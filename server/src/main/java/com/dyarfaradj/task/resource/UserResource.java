package com.dyarfaradj.task.resource;

import com.dyarfaradj.task.model.User;
import com.dyarfaradj.task.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Date;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class UserResource {

    @Autowired
    private UserService userService;

  /*
    @PostMapping(value= "/create")
    public String create(@RequestBody User user) {
        user.setRegisteredDate(new Date());
        return userService.save(user);
    }*/

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
      public User getUserById(@PathVariable String id) {
          return userService.findUserById(Integer.parseInt(id));
      }

    @GetMapping("/users")
    public List<User> getAll() {
        return userService.getAllUsers();
    }
}