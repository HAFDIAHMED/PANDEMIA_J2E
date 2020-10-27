package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.magazin.Magazin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface MagazinRespository extends JpaRepository<Magazin, UUID> {
    Optional<Magazin> findById(UUID Id);
    List<Magazin> findByUser(UUID Id);
}
