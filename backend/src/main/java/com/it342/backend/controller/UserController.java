package com.it342.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.it342.backend.dto.UserDTO;
import com.it342.backend.model.User;
import com.it342.backend.service.AuthService;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    @Autowired
    private AuthService authService;
    
    @GetMapping("/me")
    public ResponseEntity<UserDTO> getCurrentUser(@RequestParam Long userId) {
        try {
            Optional<User> user = authService.getUserById(userId);
            if (user.isPresent()) {
                return ResponseEntity.ok(authService.convertToDTO(user.get()));
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
