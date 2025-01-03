package com.scm.SCMProject.service;

import com.scm.SCMProject.entity.User;

import java.util.List;
import java.util.Optional;


public interface UserService {

    User saveUser(User user);

    Optional<User> getUserById(String id);

    Optional<User> updateUser(User user);

    void deleteUser(String id);

    boolean isUserExist(String userId);

    boolean isUserExistByEmail(String email);

    List<User> getAllUsers();

    // add more methods here related user service[logic]

}
