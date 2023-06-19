package com.teamtrack.teamtrackbackend.project;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/projects")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    private final ProjectRepository projectRepository;


    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public ResponseEntity<List<Project>> getProject(){
        List<Project> projectList = projectRepository.findAll();
        return ResponseEntity.ok(projectList);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Integer id,@RequestParam Integer userId){
        Project project = projectRepository.findByProjectIdUserId(id,userId);
        return ResponseEntity.ok(project);
    }


    @PostMapping
    public ResponseEntity<Project> addProject(@RequestBody Project project){
        project.setCreated_at(Timestamp.from(Instant.now()));
        Project returnValue = projectRepository.save(project);
        if (returnValue == null){
            return (ResponseEntity<Project>) ResponseEntity.internalServerError();
        }
        else {
            return new ResponseEntity<>(returnValue, HttpStatus.CREATED);
        }

    }
}
