package com.pandemia.Pendemia.model.magazin;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "type_magazin")
public class Type_Magazin {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_TYPE" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Column(name = "Nom_TYPE")
    private String Name;

    public Type_Magazin() {}

    public Type_Magazin(String Name) {
        this.Name = Name ;
    }

    public Type_Magazin(UUID Id , String Name) {
        this.Id = Id ;
        this.Name = Name ;
    }

    public UUID getId() {
        return Id;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}
