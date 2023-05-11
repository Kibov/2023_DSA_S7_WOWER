package com.teamtrack.teamtrackbackend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> userList = userRepository.findAll();
        List<String> userStringList = new ArrayList<>();
        for (User user : userList) {
            String userString = "Name: " + user.getUsername() + ", Password: " + user.getPassword() + ", Role: " + user.getRole();
            userStringList.add(userString);
        }
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/test")
    public String home()
    {
        return "this is home";
    }

}
