package com.teamtrack.teamtrackbackend.group;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/group")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupController {
    private final GroupsRepository groupsRepository;

    public GroupController(GroupsRepository groupsRepository) {this.groupsRepository = groupsRepository;}

    @PostMapping
    public ResponseEntity<Groups> createGroup(@RequestBody Groups group) {
        Groups savedGroup = groupsRepository.save(group);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGroup);
    }


    @GetMapping
    public ResponseEntity<List<Groups>> getGroup() {
        List<Groups> groupList = groupsRepository.findAll();
        //Returns group_id, group_name, user_id, username
        return ResponseEntity.ok(groupList);
    }
}
