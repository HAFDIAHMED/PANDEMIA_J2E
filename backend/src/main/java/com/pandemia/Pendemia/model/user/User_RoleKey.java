package com.pandemia.Pendemia.model.user;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class User_RoleKey implements Serializable {
    @Column(name = "ID_ROLE" , columnDefinition = "BINARY(16)")
    private UUID Id_Role;
    @Column(name = "ID_USER" , columnDefinition = "BINARY(16)")
    private UUID User;
}
