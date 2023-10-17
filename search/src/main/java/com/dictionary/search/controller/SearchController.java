package com.dictionary.search.controller;


import com.dictionary.search.exception.NotFoundOxford;
import com.dictionary.search.service.SearchService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
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
                HttpStatusCode status = webClient.post()
                        .uri("http://localhost:8082/api/v1/history?word="+word)
                        .header("Authorization", token)
                        .exchange()
                        .block()
                        .statusCode();
                if(status.equals(HttpStatus.OK))
                {
                    return ResponseEntity.ok(searchService.findByWord(word.toLowerCase()));
                }
            }
            return ResponseEntity.ok(searchService.findByWord(word.toLowerCase()));
        } catch (Exception e) {
            throw new NotFoundOxford(word);

        }

    }
}