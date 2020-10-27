package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.produit.Image_Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface Image_ProduitRespository extends JpaRepository<Image_Produit, UUID> {
    Optional<Image_Produit> findByProduit(UUID Id);
    long deleteAllByProduit(UUID Id);
}
