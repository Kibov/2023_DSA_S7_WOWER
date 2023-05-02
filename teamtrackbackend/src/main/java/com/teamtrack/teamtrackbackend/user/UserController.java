package com.teamtrack.teamtrackbackend.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }


}
