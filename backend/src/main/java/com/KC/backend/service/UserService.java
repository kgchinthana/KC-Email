package com.KC.backend.service;
import com.KC.backend.dto.UserDTO;
import com.KC.backend.entity.User;
import com.KC.backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



@Service
@Transactional
public class UserService {



    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;



    public UserDTO saveUser(UserDTO userDTO)  {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encodedPassword = bcrypt.encode(userDTO.getPassword());
        userDTO.setPassword(encodedPassword);
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public boolean getUserByEmail(String email, String password) {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String user= userRepo.getUserByEmail(email);
        String dbPassword =user.split(",")[4];
        if(bcrypt.matches(password,dbPassword)){
            return true;
        }
        else {
            return false;
        }
    }
}