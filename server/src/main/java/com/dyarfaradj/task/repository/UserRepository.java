package com.dyarfaradj.task.repository;


import com.dyarfaradj.task.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//    User findById(String userId);
    List<User> findAll();
}