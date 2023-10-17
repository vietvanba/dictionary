package com.dictionary.authentication.controller;

import com.dictionary.authentication.entity.User;
import com.dictionary.authentication.payload.AuthenticationRequest;
import com.dictionary.authentication.payload.AuthenticationResponse;
import com.dictionary.authentication.payload.RegisterRequest;
import com.dictionary.authentication.payload.UserDetails;
import com.dictionary.authentication.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }
    @GetMapping("/details")
    public ResponseEntity<?> getUsername(HttpServletRequest request) {
        try {
            UserDetails details = service.getDetails(request);
            if (details != null) {
                return ResponseEntity.ok(details);
            } else {
                return ResponseEntity.badRequest().body("Not found");
            }

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
