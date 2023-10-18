package com.dictionary.search.controller;


import com.dictionary.search.exception.NotFoundOxford;
import com.dictionary.search.service.SearchService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/v1/search")
@CrossOrigin
public class SearchController {
    @Value("${application.history-endpoint}")
    private String hisEndpoint;
    @Autowired
    SearchService searchService;
    @Autowired
    WebClient webClient;
    @GetMapping
    public ResponseEntity<?> search(@RequestParam String word, HttpServletRequest request) {
        try {
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            if(token!=null)
            {
                webClient.post()
                        .uri(hisEndpoint+"?word="+word)
                        .header("Authorization", token)
                        .exchange()
                        .block()
                        .statusCode();
            }
            return ResponseEntity.ok(searchService.findByWord(word.toLowerCase()));
        } catch (Exception e) {
            throw new NotFoundOxford(word);

        }

    }
}