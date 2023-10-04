package com.dictionary.authentication.controller;

import com.dictionary.authentication.service.AuthenticationService;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@Hidden
@CrossOrigin
public class UserController {
    @Autowired
    AuthenticationService service;

    @GetMapping("/get-username")
    public ResponseEntity<?> getUsername(HttpServletRequest request) {
        try {
            String username = service.getUsername(request);
            if (username != null) {
                return ResponseEntity.ok(username);
            } else {
                return ResponseEntity.badRequest().body("Not found");
            }

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
