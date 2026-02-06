package com.it342.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.it342.backend.dto.AuthResponse;
import com.it342.backend.dto.LoginRequest;
import com.it342.backend.dto.RegisterRequest;
import com.it342.backend.model.User;
import com.it342.backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        try {
            User user = authService.register(request);
            AuthResponse response = new AuthResponse(
                true,
                "Registration successful",
                "token_placeholder",
                authService.convertToDTO(user)
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            AuthResponse response = new AuthResponse(
                false,
                e.getMessage(),
                null,
                null
            );
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        try {
            User user = authService.login(request);
            AuthResponse response = new AuthResponse(
                true,
                "Login successful",
                "token_placeholder",
                authService.convertToDTO(user)
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            AuthResponse response = new AuthResponse(
                false,
                e.getMessage(),
                null,
                null
            );
            return ResponseEntity.badRequest().body(response);
        }
    }
}
