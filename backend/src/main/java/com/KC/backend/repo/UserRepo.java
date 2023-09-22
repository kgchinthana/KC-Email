package com.KC.backend.repo;

import com.KC.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User,String> {
    @Query(value = "SELECT * FROM user WHERE email = ?1",nativeQuery = true )
    String getUserByEmail(String mail);


}