package com.pandemia.Pendemia.controllers;


import com.pandemia.Pendemia.Repository.MagazinRespository;
import com.pandemia.Pendemia.Repository.Telephone_MagazinRespository;
import com.pandemia.Pendemia.model.magazin.Magazin;
import com.pandemia.Pendemia.model.magazin.Telephone_Magazin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.sql.Time;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RequestMapping("api/magazin")
@RestController
public class MagazinController {
    @Autowired
    private MagazinRespository magazinRespository ;
    @Autowired
    private Telephone_MagazinRespository telephone_magazinRespository ;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public Magazin addMagazin(@RequestBody Map<String , Object> body)
    {   Magazin magazin = new Magazin(UUID.fromString((String)body.get("user")),UUID.fromString((String)body.get("type")),(String)body.get("label"),(String)body.get("address"),(String)body.get("ville"),Time.valueOf((String)body.get("debut")),Time.valueOf((String)body.get("fin")));
        Magazin Re_magazin = magazinRespository.save(magazin);
        List Ltelephone = (List)body.get("telephones");
        Ltelephone.forEach(telephone->telephone_magazinRespository.save(new Telephone_Magazin(Re_magazin.getId(),(String)telephone)));
        return Re_magazin;
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public List<Magazin> getMagazin() {
        return magazinRespository.findAll();
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public Optional<Magazin> getSpecMagazin(@RequestBody Map<String , UUID> body) {
        return magazinRespository.findById(body.get("id"));
    }

    @PostMapping("/mymagazin")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public List<Magazin> getMyMagazin(@RequestBody Map<String , UUID> body) {
        return magazinRespository.findByUser(body.get("id"));
    }

    @PostMapping("/deletetelephone")
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public String deletetelephone(@RequestBody Map<String , UUID> body) {
        telephone_magazinRespository.deleteByMagazin(body.get("id"));
        return "Deleted";
    }
    @PostMapping("/delete")
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_PROP')")
    public String deleteMagazin(@RequestBody Map<String , UUID> body) {
        magazinRespository.deleteById(body.get("id"));
        return "Deleted";
    }
}
