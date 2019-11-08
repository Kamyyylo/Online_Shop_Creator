package com.gadgetshop.services;

import com.gadgetshop.domain.User;
import com.gadgetshop.exceptions.UserNameExistsException;
import com.gadgetshop.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //password encoder zeby nie trzymac hasla bez ochrony
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //username has to be unique(exception). trying to set user that already exists throw an exception
            newUser.setUsername(newUser.getUsername());
            //make sure that password and confirm match
            //dont persists/show confirm password thats why this is set to null after checking if the passwords match
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        } catch (Exception e) {
            throw new UserNameExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }
}
