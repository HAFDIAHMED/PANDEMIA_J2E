package com.pandemia.Pendemia.model.user;


import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "user_role")
@IdClass(User_RoleKey.class)
public class User_Role {
    @Id
    @Column(name = "ID_ROLE" , columnDefinition = "BINARY(16)")
    private UUID Id_Role;
    @Id
    @Column(name = "ID_USER" , columnDefinition = "BINARY(16)")
    private UUID User;

    public User_Role() {}

    public User_Role(UUID User , UUID Id_Role) {
        this.User = User ;
        this.Id_Role = Id_Role ;
    }

    public UUID getId_Role() {
        return Id_Role;
    }

    public void setId_Role(UUID id_Role) {
        Id_Role = id_Role;
    }

    public UUID get_User() {
        return User;
    }

    public void set_User(UUID User) {
        User = User;
    }
}
