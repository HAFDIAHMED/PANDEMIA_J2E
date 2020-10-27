package com.pandemia.Pendemia.security.services;

import com.pandemia.Pendemia.Repository.UserRespository;
import com.pandemia.Pendemia.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRespository userRespository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRespository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Not Found with name: "+email));
        return UserDetailsImpl.build(user);
    }

    public UserDetails loadUserByname(String name) throws UsernameNotFoundException {
        User user = userRespository.findUserByName(name).orElseThrow(() -> new UsernameNotFoundException("User Not Found with name: "+name));
        return UserDetailsImpl.build(user);
    }
}
