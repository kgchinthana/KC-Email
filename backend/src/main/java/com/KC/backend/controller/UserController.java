package com.KC.backend.controller;

import com.KC.backend.dto.UserDTO;
import com.KC.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ModelMapper modelMapper;



    @PostMapping("/registercustomer")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }
    @GetMapping("/logincustomer/{email}/{password}")
    public String getUserByUserID(@PathVariable String email , @PathVariable String password){
        boolean authentication = userService.getUserByEmail(email,password);
        String message;
        if(authentication){
            message= "Login is successfully completed";
        }
        else {
            message="Login is failed";
        }
        return message;

    }
}