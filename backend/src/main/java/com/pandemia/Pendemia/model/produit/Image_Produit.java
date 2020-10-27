package com.pandemia.Pendemia.model.produit;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "image_produit")
public class Image_Produit {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_IMAGE" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Column(name = "ID_PRODUIT" , columnDefinition = "BINARY(16)")
    private UUID produit;
    @Column(name = "Url_IMAGE")
    private String Url;

    public Image_Produit() {}

    public  Image_Produit(UUID Produit, String Url) {
        this.produit = Produit ;
        this.Url = Url ;
    }

    public  Image_Produit(UUID Id ,UUID Produit, String Url) {
        this.Id = Id ;
        this.produit = Produit ;
        this.Url = Url ;
    }

    public UUID getId() {
        return Id;
    }

    public String getUrl() {
        return Url;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public void setUrl(String url) {
        Url = url;
    }

    public UUID getProduit() {
        return produit;
    }

    public void setProduit(UUID produit) {
        produit = produit;
    }
}
