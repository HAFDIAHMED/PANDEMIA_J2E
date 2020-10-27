package com.pandemia.Pendemia.model.user;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_USER" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Email
    @Column(name = "Email_USER")
    private String email;
    @Column(name = "Name_USER")
    private String name;
    @Column(name = "Password_USER")
    private String Password;
    @Column(name = "Adresse_USER")
    private String Adresse;
    @Column(name = "Ville_USER")
    private String Ville;
    @Column(name = "Telephone_USER")
    private String Telephone;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="user_role",
               joinColumns = @JoinColumn(name="ID_USER"),
               inverseJoinColumns = @JoinColumn(name="ID_ROLE"))
    private Set<Role> roles = new HashSet<>();

    public User() {}

    public  User(UUID Id,String email,String Name) {
        this.Id = Id;
        this.email = email;
        this.name = Name;
    }

    public User(String email,String Name,String Password,String Adresse,String Ville,String Telephone) {
        this.email = email;
        this.name = Name;
        this.Password = Password ;
        this.Adresse = Adresse ;
        this.Ville = Ville ;
        this.Telephone = Telephone ;
    }

    public UUID getId() {
        return Id;
    }

    public String getAdresse() {
        return Adresse;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return Password;
    }

    public String getTelephone() {
        return Telephone;
    }

    public String getVille() { return Ville; }

    public void setId(UUID id) {
        Id = id;
    }

    public void setName(String name) {
        name = name;
    }

    public void setEmail(String email) {
        email = email;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }

    public void setVille(String ville) { Ville = ville; }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}





