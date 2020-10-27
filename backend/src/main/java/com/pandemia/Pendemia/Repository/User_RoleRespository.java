package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.user.User_Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.UUID;

@Repository
public interface User_RoleRespository extends JpaRepository<User_Role,UUID> {

}
