package com.teamtrack.teamtrackbackend.comment;

import com.teamtrack.teamtrackbackend.comment.Classes.Comment;
import com.teamtrack.teamtrackbackend.comment.Classes.CommentPost;
import com.teamtrack.teamtrackbackend.issue.Classes.Issue;
import com.teamtrack.teamtrackbackend.issue.IssueRepository;
import com.teamtrack.teamtrackbackend.project.Project;
import com.teamtrack.teamtrackbackend.project.ProjectRepository;
import com.teamtrack.teamtrackbackend.user.User;
import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/comments")
@CrossOrigin(origins = "http://localhost:4200")

public class CommentController {

    private final CommentRepository commentRepository;
    private final ProjectRepository projectRepository;
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    public CommentController(CommentRepository commentRepository, ProjectRepository projectRepository, IssueRepository issueRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.projectRepository = projectRepository;
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Comment>> getComments(){
        List<Comment> commentList = commentRepository.findAll();
        return ResponseEntity.ok(commentList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Comment>> getCommentToTask(@PathVariable Integer id){
        List<Comment> commentList = commentRepository.findByTask(id);
        return ResponseEntity.ok(commentList);
    }
    @PostMapping
    public ResponseEntity<Comment> addProject(@RequestBody CommentPost comment){


        if (comment == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            if (userRepository.findByUsername(comment.getUser_name()).isEmpty() || issueRepository.findByName(comment.getIssue_name()).isEmpty()){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            Integer userId = userRepository.findByUsername(comment.getUser_name()).get().getId();
            User user = userRepository.getReferenceById(userId);
            Integer issueId = issueRepository.findByName(comment.getIssue_name()).get().getId();
            Issue issue = issueRepository.getReferenceById(issueId);

            Comment toSave = new Comment();
            toSave.setIssue(issue);
            toSave.setUser(user);
            toSave.setCreated_at(Timestamp.from(Instant.now()));
            toSave.setBody(comment.getBody());
            commentRepository.save(toSave);
            return new ResponseEntity<>(toSave, HttpStatus.OK);
        }
    }
}
