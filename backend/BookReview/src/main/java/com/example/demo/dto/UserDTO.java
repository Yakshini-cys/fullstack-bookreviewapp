package com.example.demo.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {
    private Long userId;
    private String username;
    private String email;
    private String passwordHash;
    private LocalDate registrationDate;
    private LocalDate lastLoginDate;
}
