package com.pandemia.Pendemia.controllers;


import com.pandemia.Pendemia.Repository.RoleRespository;
import com.pandemia.Pendemia.Repository.UserRespository;
import com.pandemia.Pendemia.model.user.ERole;
import com.pandemia.Pendemia.model.user.Role;
import com.pandemia.Pendemia.model.user.User;
import com.pandemia.Pendemia.payload.request.LoginRequest;
import com.pandemia.Pendemia.payload.request.SignupRequest;
import com.pandemia.Pendemia.payload.response.JwtResponse;
import com.pandemia.Pendemia.payload.response.MessageResponse;
import com.pandemia.Pendemia.security.jwt.JwtUtils;
import com.pandemia.Pendemia.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private RoleRespository roleRespository;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,userDetails.getId(), userDetails.getName(),userDetails.getEmail(),userDetails.getPassword(),userDetails.getAdresse(),userDetails.getVille(),userDetails.getTelephone(),roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (!userRespository.findUserByEmail(signUpRequest.getEmail()).isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already exist!"));
        }
        if (!userRespository.findUserByName(signUpRequest.getName()).isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: UserName is already exist!"));
        }
        // Create new user's account
        User user = new User(signUpRequest.getEmail(), signUpRequest.getName(), encoder.encode(signUpRequest.getPassword()),signUpRequest.getAdresse(),signUpRequest.getVille(),signUpRequest.getTelephone());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
        if (strRoles == null) {
            Role userRole = roleRespository.findRoleByName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRespository.findRoleByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                        break;
                    case "prop":
                        Role modRole = roleRespository.findRoleByName(ERole.ROLE_PROP).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);
                        break;
                    default:
                        Role userRole = roleRespository.findRoleByName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userRespository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

}
