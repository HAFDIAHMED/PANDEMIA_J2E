package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.produit.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProduitRespository extends JpaRepository<Produit, UUID> {
    Optional<Produit> findById(UUID Id);

}
