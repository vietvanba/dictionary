package com.dictionary.apigateway.filter;

import com.dictionary.apigateway.Repository.TokenRepository;
import com.dictionary.apigateway.entity.ErrorResponse;
import com.dictionary.apigateway.service.JwtService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;
    @Autowired
    private JwtService service;
    @Autowired
    private TokenRepository tokenRepository;
    @Autowired
    private UserDetailsService userDetailsService;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            ObjectMapper objectMapper = new ObjectMapper();
            if (validator.isSecured.test(exchange.getRequest())) {
                //header contains token or not
                final String userEmail;
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new RuntimeException("missing authorization header");
                }

                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }
                try {
//                    //REST call to AUTH service
//                    template.getForObject("http://IDENTITY-SERVICE//validate?token" + authHeader, String.class);
                    try {
                        userEmail = service.extractUsername(authHeader);
                    } catch (Exception e) {
                        throw new JwtException(e.getMessage());
                    }
                    if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {

                        UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
                        var isTokenValid = tokenRepository.findByToken(authHeader)
                                .map(t -> !t.isExpired() && !t.isRevoked())
                                .orElse(false);
                        if (service.isTokenValid(authHeader, userDetails) && isTokenValid) {
                            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities()
                            );
                        } else {
                            System.out.println("token is expired...!");
                            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                            ErrorResponse errorResponse = new ErrorResponse();
                            errorResponse.setError("jwt expired");
                            errorResponse.setHttpStatus(HttpStatus.UNAUTHORIZED);
                            return exchange.getResponse().writeWith(Mono.just(
                                    exchange.getResponse().bufferFactory().wrap(objectMapper.writeValueAsBytes(errorResponse))
                            ));
                        }
                    }

                } catch (Exception e) {
                    System.out.println("invalid access...!");
                    exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                    ErrorResponse errorResponse = new ErrorResponse();
                    errorResponse.setError("Unauthorized access to the application");
                    errorResponse.setHttpStatus(HttpStatus.UNAUTHORIZED);
                    try {
                        return exchange.getResponse().writeWith(Mono.just(
                                exchange.getResponse().bufferFactory().wrap(objectMapper.writeValueAsBytes(errorResponse))
                        ));
                    } catch (JsonProcessingException ex) {
                        throw new RuntimeException(ex);
                    }
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {

    }
}