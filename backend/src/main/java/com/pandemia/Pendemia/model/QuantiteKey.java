package com.pandemia.Pendemia.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class QuantiteKey implements Serializable {
    @Column(name = "ID_PRODUIT" , columnDefinition = "BINARY(16)" , nullable = false)
    private UUID produit;
    @Column(name = "ID_MAGAZIN" , columnDefinition = "BINARY(16)" , nullable = false)
    private UUID MAGAZIN;
}
