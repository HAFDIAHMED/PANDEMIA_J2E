package com.pandemia.Pendemia.security.services;

import com.pandemia.Pendemia.model.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private UUID Id;
    private String email;
    private String Name;
    private String Password;
    private String Ville;
    private String Adresse;
    private String Telephone;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(UUID Id,String email,String Name,String Password,String Adresse,String Ville,String Telephone,Collection<? extends GrantedAuthority> authorities) {
        this.Id = Id ;
        this.email = email;
        this.Name = Name;
        this.Password = Password ;
        this.Adresse = Adresse ;
        this.Ville = Ville ;
        this.Telephone = Telephone ;
        this.authorities = authorities ;
    }

    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
        return new UserDetailsImpl(user.getId(),user.getEmail(),user.getName(),user.getPassword(),user.getAdresse(),user.getVille(),user.getTelephone(),authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return Password;
    }

    @Override
    public String getUsername() {
        return Name;
    }

    public String getTelephone() {
        return Telephone;
    }

    public String getVille() {
        return Ville;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getName() {
        return Name;
    }

    public String getAdresse() {
        return Adresse;
    }

    public String getEmail() {
        return email;
    }

    public UUID getId() {
        return Id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if(this == o) {
            return true;
        }
        if(o == null || getClass() != o.getClass()) {
            return false;
        }
        UserDetailsImpl user = (UserDetailsImpl)o;
        return Objects.equals(Id,user.Id);
    }
}
