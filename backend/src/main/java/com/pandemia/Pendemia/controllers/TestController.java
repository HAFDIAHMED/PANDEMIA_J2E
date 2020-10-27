package com.pandemia.Pendemia.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/all")
    public String publicAcess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_PROP') or hasRole('ROLE_ADMIN')")
    public String userAcess() {
        return "User Content.";
    }

    @GetMapping("/prop")
    @PreAuthorize("hasRole('ROLE_PROP')")
    public String propAcess() {
        return "Prop Content.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String adminAcess() {
        return "Admin Content.";
    }
}
