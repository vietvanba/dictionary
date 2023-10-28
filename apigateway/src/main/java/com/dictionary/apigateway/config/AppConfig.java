package com.dictionary.apigateway.config;

import com.dictionary.apigateway.Repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.server.ServerWebExchange;

@Configuration
@EnableWebSecurity
public class AppConfig {
    @Autowired
    private UserRepository repository;

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> repository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) throws Exception {
        http
                .csrf(csrfSpec -> csrfSpec.disable())
                .authorizeExchange(req ->
                        req.anyExchange()
                                .permitAll()

                ).httpBasic(httpBasicSpec -> httpBasicSpec.disable())
        ;

        return http.build();

    }
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfigurationSource source= new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(ServerWebExchange exchange) {
                CorsConfiguration corsConfig = new CorsConfiguration();
                corsConfig.addAllowedOrigin("*"); // You can specify specific origins instead of "*"
                corsConfig.addAllowedHeader("*");
                corsConfig.addAllowedMethod("*");
                return corsConfig;
            }
        };
        return new CorsWebFilter(source);
    }
}
