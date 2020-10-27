package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.Quantite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface QuantiteRespository extends JpaRepository<Quantite, UUID> {
    long deleteByProduit(UUID id);
}
