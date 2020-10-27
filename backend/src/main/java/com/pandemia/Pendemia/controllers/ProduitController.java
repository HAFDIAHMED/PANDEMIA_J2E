package com.pandemia.Pendemia.controllers;

import com.pandemia.Pendemia.Repository.Image_ProduitRespository;
import com.pandemia.Pendemia.Repository.ProduitRespository;
import com.pandemia.Pendemia.Repository.QuantiteRespository;
import com.pandemia.Pendemia.model.Quantite;
import com.pandemia.Pendemia.model.produit.Image_Produit;
import com.pandemia.Pendemia.model.produit.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.*;

@CrossOrigin(origins = "*")
@RequestMapping("api/produit")
@RestController
public class ProduitController {
    @Autowired
    private ProduitRespository produitRespository ;
    @Autowired
    private Image_ProduitRespository image_produitRespository ;
    @Autowired
    private QuantiteRespository quantiteRespository;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public Produit addProduit(@RequestBody Map<String , Object> body) {
        Produit produit = new Produit((String)body.get("label"),(String)body.get("description"));
        Produit Re_produit = produitRespository.save(produit);
        List Limages = (List)body.get("images");
        Limages.forEach(image->image_produitRespository.save(new Image_Produit(Re_produit.getId(),(String)image)));
        Quantite quantite = new Quantite(Re_produit.getId(),UUID.fromString((String)body.get("magazin")),Integer.parseInt((String)body.get("quantite")),Float.parseFloat((String)body.get("prix")));
        quantiteRespository.save(quantite);
        return Re_produit;
    }

    @PostMapping("/add_img")
    public void addImage(@RequestBody Map<String , String> body) {
        Image_Produit image_produit = new Image_Produit(UUID.fromString(body.get("id")),body.get("url"));
        image_produitRespository.save(image_produit);
    }

    @PostMapping("/alterprix_or_quantite")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public void alterPrix(@RequestBody Map<String , Object> body) {
        Quantite quantite = new Quantite(UUID.fromString((String)body.get("produit")),UUID.fromString((String)body.get("magazin")),Integer.parseInt((String)body.get("quantite")),Float.parseFloat((String)body.get("prix")));
        quantiteRespository.save(quantite);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public Optional<Produit> getProduit(@RequestBody Map<String , UUID> body) {
        return produitRespository.findById(body.get("id"));
    }

    @PostMapping("/deletequantite")
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public String deleteQuantiteProduit(@RequestBody Map<String , UUID> body) {
        quantiteRespository.deleteByProduit(body.get("id"));
        return "Deleted";
    }
    @PostMapping("/deleteimage")
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public String deleteImageProduit(@RequestBody Map<String , UUID> body) {
        image_produitRespository.deleteAllByProduit(body.get("id"));
        return "Deleted";
    }
    @PostMapping("/delete")
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public String deleteProduit(@RequestBody Map<String , UUID> body) {
        produitRespository.deleteById(body.get("id"));
        return "Deleted";
    }






}
