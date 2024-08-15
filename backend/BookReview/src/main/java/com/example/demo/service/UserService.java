package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDTO;

public interface UserService {
	// method declarations here
    UserDTO createUser(UserDTO userDTO); // for new user creation
    UserDTO getUserById(Long userId); // for fetching specific user by id
    List<UserDTO> getAllUsers();  // to fetch all users
    UserDTO updateUser(Long userId, UserDTO userDTO); // to update existing user details
    void deleteUser(Long userId); // to delete user
}
