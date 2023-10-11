package com.dictionary.historyandfavorite.controller;

import com.dictionary.historyandfavorite.entity.HistoryEntity;
import com.dictionary.historyandfavorite.service.HistoryService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Comparator;

@RestController
@RequestMapping("/history-service/api/v1/history")
@CrossOrigin
public class HistoryController {
    @Autowired
    HistoryService service;
    @Autowired
    WebClient webClient;

    @PostMapping
    public ResponseEntity<?> createSearchHistory(@RequestParam(required = true) String word, HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        try {
            String username = webClient.get()
                    .uri("http://localhost:8081/auth-service/api/v1/user/get-username")
                    .header("Authorization", token)
                    .retrieve()
                    .bodyToMono(String.class).block();
            return ResponseEntity.ok(service.save(word, username, token.substring(7)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    ResponseEntity<?> getHistory(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        try {
            String username = webClient.get()
                    .uri("http://localhost:8081/auth-service/api/v1/user/get-username")
                    .header("Authorization", token)
                    .retrieve()
                    .bodyToMono(String.class).block();
            return ResponseEntity.ok(service.findByUsername(username).stream().sorted(Comparator.comparing(HistoryEntity::getSearchTime).reversed()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
