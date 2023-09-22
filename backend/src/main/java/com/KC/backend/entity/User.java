package com.KC.backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private String first_name;
    private String last_name;
    private String status;
    @Id
    private String email;
    private String password;
    private  String birthday;




}
