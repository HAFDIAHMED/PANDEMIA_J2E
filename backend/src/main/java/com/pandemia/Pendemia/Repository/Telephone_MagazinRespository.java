package com.pandemia.Pendemia.Repository;

import com.pandemia.Pendemia.model.magazin.Telephone_Magazin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface Telephone_MagazinRespository extends JpaRepository<Telephone_Magazin, UUID> {
    long deleteByMagazin(UUID Id);
}
