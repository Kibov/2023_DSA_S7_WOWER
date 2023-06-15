package com.teamtrack.teamtrackbackend.group;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/group")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupController {
    private final GroupsRepository groupsRepository;

    public GroupController(GroupsRepository groupsRepository) {this.groupsRepository = groupsRepository;}

    @GetMapping
    public ResponseEntity<List<Object[]>> getGroup() {
        List<Object[]> groupList = groupsRepository.findAllGroupsWithUsersAndProjects();
        //Returns group_id, group_name, user_id, username, project_id, project_name
        return ResponseEntity.ok(groupList);
    }
}
