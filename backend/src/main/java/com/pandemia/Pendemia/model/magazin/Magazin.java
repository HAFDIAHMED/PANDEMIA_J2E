package com.pandemia.Pendemia.model.magazin;

import com.pandemia.Pendemia.model.Quantite;
import org.apache.tomcat.jni.Address;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Time;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "magazin")
public class Magazin {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_MAGAZIN" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Column(name = "Label_MAGAZIN")
    private String Label;
    @Column(name = "Address_MAGAZIN")
    private String Address ;
    @Column(name = "Ville_MAGAZIN")
    private String Ville ;
    @Column(name = "Type_MAGAZIN", columnDefinition = "BINARY(16)")
    private UUID Type ;
    @Column(name = "Debut_Travail_MAGAZIN", columnDefinition = "time")
    private Time DebutTravail ;
    @Column(name = "Fin_Travail_MAGAZIN", columnDefinition = "time")
    private Time FinTravail ;
    @Column(name = "Id_USER", columnDefinition = "BINARY(16)")
    private UUID user ;
    @OneToMany(targetEntity = Quantite.class)
    @JoinColumn(name="ID_MAGAZIN")
    private Set<Quantite> produits = new HashSet<>();
    @OneToMany(targetEntity = Telephone_Magazin.class)
    @JoinColumn(name="ID_MAGAZIN")
    private Set<Telephone_Magazin> telephones = new HashSet<>();

    public Magazin() {}

    public Magazin(UUID User,UUID Type,String Label,String Address,String Ville,Time DebutTravail,Time FinTravail ) {
        this.user = User ;
        this.Address = Address ;
        this.Label = Label ;
        this.Type = Type ;
        this.Ville = Ville ;
        this.DebutTravail = DebutTravail;
        this.FinTravail = FinTravail ;
    }

    public Magazin(UUID Id,UUID User,UUID Type,String Label,String Address,String Ville,Time DebutTravail,Time FinTravail ) {
        this.Id = Id ;
        this.user = User ;
        this.Address = Address ;
        this.Label = Label ;
        this.Type = Type ;
        this.Ville = Ville ;
        this.DebutTravail = DebutTravail;
        this.FinTravail = FinTravail ;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public UUID getId() {
        return Id;
    }

    public void setLabel(String label) {
        Label = label;
    }

    public String getLabel() {
        return Label;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getVille() {
        return Ville;
    }

    public void setVille(String ville) {
        Ville = ville;
    }

    public UUID getUser() {
        return user;
    }

    public void setUser(UUID user) {
        user = user;
    }

    public UUID getType() {
        return Type;
    }

    public void setType(UUID type) {
        Type = type;
    }

    public Time getDebutTravail() {
        return DebutTravail;
    }

    public void setDebutTravail(Time debutTravail) {
        DebutTravail = debutTravail;
    }

    public Time getFinTravail() {
        return FinTravail;
    }

    public void setFinTravail(Time finTravail) {
        FinTravail = finTravail;
    }

    public Set<Quantite> getProduits() {
        return produits;
    }

    public void setProduits(Set<Quantite> produits) {
        this.produits = produits;
    }

    public Set<Telephone_Magazin> getTelephones() {
        return telephones;
    }

    public void setTelephones(Set<Telephone_Magazin> telephones) {
        this.telephones = telephones;
    }
}
