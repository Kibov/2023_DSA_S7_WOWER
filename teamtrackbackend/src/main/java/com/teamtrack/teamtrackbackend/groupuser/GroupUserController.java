package com.teamtrack.teamtrackbackend.groupuser;


import com.teamtrack.teamtrackbackend.group.Groups;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/groupuser")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupUserController {
    private final GroupUserRepository groupUserRepository;

    public GroupUserController(GroupUserRepository groupUserRepository) {
        this.groupUserRepository = groupUserRepository;
    }

    @PostMapping
    public ResponseEntity<GroupUser> createGroupUser(@RequestBody GroupUser groupUser) {
        GroupUser savedGroupUser = groupUserRepository.save(groupUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGroupUser);
    }



}
