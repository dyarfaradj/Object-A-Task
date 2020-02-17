package com.dyarfaradj.task.service;

import com.dyarfaradj.task.model.User;
import com.dyarfaradj.task.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserById(int id) {
        return userRepository.findById(id);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User saveUser(User user) {
//        user.setRegisteredDate(new Date());
        return userRepository.save(user);
    }
}