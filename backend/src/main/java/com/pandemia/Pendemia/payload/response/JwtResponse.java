package com.pandemia.Pendemia.payload.response;

import javax.validation.constraints.Email;
import java.util.List;
import java.util.UUID;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private UUID Id;
    @Email
    private String email;
    private String Name;
    private String Password;
    private String Adresse;
    private String Ville;
    private String Telephone;
    private List<String> roles;

    public JwtResponse(String accessToken, UUID id, String Name, String email, String Password,String Adresse,String Ville,String Telephone,List<String> roles) {
        this.token = accessToken;
        this.Id = id;
        this.Name = Name;
        this.email = email;
        this.Adresse = Adresse;
        this.Password = Password;
        this.Ville = Ville;
        this.Telephone = Telephone ;
        this.roles = roles;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public UUID getId() {
        return Id;
    }

    public void setId(UUID id) {
        this.Id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresse() {
        return Adresse;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }

    public void setVille(String ville) {
        Ville = ville;
    }

    public String getVille() {
        return Ville;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getName() {
        return Name;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }

    public String getTelephone() {
        return Telephone;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getPassword() {
        return Password;
    }

    public String getToken() {
        return token;
    }

    public String getType() {
        return type;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
