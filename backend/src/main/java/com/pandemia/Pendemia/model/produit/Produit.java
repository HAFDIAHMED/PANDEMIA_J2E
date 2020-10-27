package com.pandemia.Pendemia.model.produit;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "produit")
public class Produit {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "ID_PRODUIT" , columnDefinition = "BINARY(16)")
    private UUID Id;
    @Column(name = "Label_PRODUIT")
    private String Label;
    @Column(name = "Description_PRODUIT")
    private String Description;
    @OneToMany(targetEntity = Image_Produit.class)
    @JoinColumn(name="ID_PRODUIT")
    private Set<Image_Produit> images = new HashSet<>();

    public Produit() {}

    public Produit(String Label,String Description) {
        this.Label = Label ;
        this.Description = Description ;
    }

    public Produit(UUID Id,String Label,String Description) {
        this.Id = Id ;
        this.Label = Label ;
        this.Description = Description ;
    }

    public UUID getId() {
        return Id;
    }

    public String getDescription() {
        return Description;
    }

    public String getLabel() {
        return Label;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public void setLabel(String label) {
        Label = label;
    }

    public Set<Image_Produit> getImages() {
        return images;
    }

    public void setImages(Set<Image_Produit> images) {
        this.images = images;
    }
}
