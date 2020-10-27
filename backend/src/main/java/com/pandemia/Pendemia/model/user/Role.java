package com.pandemia.Pendemia.model.user;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;


@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_ROLE" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Column(name = "Name_ROLE")
    @Enumerated(EnumType.STRING)
    private ERole name;

    public Role() {}

    public Role(UUID Id , ERole Name) {
        this.Id = Id ;
        this.name = Name ;
    }

    public Role(ERole Name) {
        this.name = Name ;
    }

    public void setName(ERole name) {
        name = name;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public ERole getName() {
        return name;
    }

    public UUID getId() {
        return Id;
    }
}
