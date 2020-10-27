package com.pandemia.Pendemia.controllers;

import com.pandemia.Pendemia.Repository.Type_MagazinRespository;
import com.pandemia.Pendemia.model.magazin.Type_Magazin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RequestMapping("api/type_magazin")
@RestController
public class Type_MagazinController {
    @Autowired
    private Type_MagazinRespository type_magazinRespository ;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Type_Magazin addTypeMagazin(@RequestBody Map<String , String> body) {
        Type_Magazin type_magazin = new Type_Magazin(body.get("type_magazin"));
        Type_Magazin Rtype_magazin = type_magazinRespository.save(type_magazin);
        return Rtype_magazin;
    }


    @PostMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP') or hasRole('ROLE_USER')")
    public List<Type_Magazin> getTypeMagazin() {
        return  type_magazinRespository.findAll();
    }

}
