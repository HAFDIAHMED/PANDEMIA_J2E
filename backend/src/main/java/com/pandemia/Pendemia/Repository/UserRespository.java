package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRespository extends JpaRepository<User, UUID> {
    Optional<User> findUserByEmail(String Email);
    Optional<User> findUserByName(String Name);


}
