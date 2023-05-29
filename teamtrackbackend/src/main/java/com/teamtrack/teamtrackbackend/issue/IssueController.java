package com.teamtrack.teamtrackbackend.issue;

import com.teamtrack.teamtrackbackend.issue.Classes.Issue;
import com.teamtrack.teamtrackbackend.issue.Classes.IssuePost;
import com.teamtrack.teamtrackbackend.project.Project;
import com.teamtrack.teamtrackbackend.project.ProjectRepository;
import com.teamtrack.teamtrackbackend.user.User;
import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/auth/issue")
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    private final ProjectRepository projectRepository;

    public IssueController(IssueRepository issueRepository, UserRepository userRepository, ProjectRepository projectRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public ResponseEntity<List<Issue>> getIssue(){
        List<Issue> issueList = issueRepository.findAll();
        return ResponseEntity.ok(issueList);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Issue>> getIssueById(@PathVariable Integer id){
        Optional<Issue> issue = issueRepository.findById(id);
        if (issue.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else{
            return ResponseEntity.ok(issue);
        }
    }

    @GetMapping("/proj/{projId}")
    public ResponseEntity<List<Issue>> findByProjId(@PathVariable Integer projId){
        List<Issue> issueList = issueRepository.findAll();
        List<Issue> listToReturn = issueList.stream().filter(issue ->
                projId.equals(issue.getProject().getId())
        ).collect(Collectors.toList());

        return  ResponseEntity.ok(listToReturn);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Issue> changeUser(@PathVariable Integer id,@RequestParam Integer userId){
        Optional<Issue> issue = issueRepository.findById(id);
        if (issue.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else{
            User user = userRepository.getReferenceById(userId);
            Issue issueUpdate = issueRepository.getReferenceById(id);
            issueUpdate.setUser(user);
            issueRepository.save(issueUpdate);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping
    public ResponseEntity<Issue> addIssue(@RequestBody IssuePost issue){
        if (issue == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            User user = userRepository.getReferenceById(issue.getUser_id());
            Project project = projectRepository.getReferenceById(issue.getProject_id());
            Issue toSave = new Issue();
            toSave.setDescription(issue.getDescription());
            toSave.setStatus(issue.getStatus());
            toSave.setUser(user);
            toSave.setProject(project);
            issueRepository.save(toSave);
            return new ResponseEntity<>(toSave, HttpStatus.CREATED);
        }
    }

    @PostMapping("/updateIssue")
    public ResponseEntity<Issue> updateIssue(@RequestBody IssuePost issuePost){
        if (issuePost == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            User user = userRepository.getReferenceById(issuePost.getUser_id());
            Project project = projectRepository.getReferenceById(issuePost.getProject_id());
            if (issuePost.getDescription().isEmpty() || issuePost.getStatus().isEmpty() || issuePost.getId().describeConstable().isEmpty() ){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            Issue toSave = issueRepository.getReferenceById(issuePost.getId());
            if(!issuePost.getDescription().isEmpty()) {
                toSave.setDescription(issuePost.getDescription());
            }
            if (!issuePost.getStatus().isEmpty()){
                toSave.setStatus(issuePost.getStatus());
            }
            toSave.setUser(user);
            toSave.setProject(project);
            issueRepository.save(toSave);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
