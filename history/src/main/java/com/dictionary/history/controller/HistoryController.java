package com.dictionary.history.controller;

import com.dictionary.history.entity.HistoryEntity;
import com.dictionary.history.entity.UserDetails;
import com.dictionary.history.service.HistoryService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Comparator;

@RestController
@RequestMapping("/api/v1/history")
@CrossOrigin
public class HistoryController {
    @Value("${application.authentication-endpoint}")
    private String authEndpoint;
    @Autowired
    HistoryService service;
    @Autowired
    WebClient webClient;

    @PostMapping
    public ResponseEntity<?> createSearchHistory(@RequestParam(required = true) String word, HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        try {
            UserDetails userDetails = webClient.get()
                    .uri(authEndpoint+"details")
                    .header("Authorization", token)
                    .retrieve()
                    .bodyToMono(UserDetails.class).block();
            return ResponseEntity.ok(service.save(word, userDetails.getUsername(), token.substring(7)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    ResponseEntity<?> getHistory(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        try {
            UserDetails userDetails = webClient.get()
                    .uri(authEndpoint+"details")
                    .header("Authorization", token)
                    .retrieve()
                    .bodyToMono(UserDetails.class).block();
            return ResponseEntity.ok(service.findByUsername(userDetails.getUsername()).stream().sorted(Comparator.comparing(HistoryEntity::getSearchTime).reversed()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
