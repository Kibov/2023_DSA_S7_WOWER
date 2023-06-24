package com.teamtrack.teamtrackbackend.timetable;

import com.teamtrack.teamtrackbackend.issue.Classes.Issue;
import com.teamtrack.teamtrackbackend.issue.IssueRepository;
import com.teamtrack.teamtrackbackend.timetable.Classes.TimeTable;
import com.teamtrack.teamtrackbackend.timetable.Classes.TimeTableUpdate;
import com.teamtrack.teamtrackbackend.user.User;
import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth/timetable")
@CrossOrigin(origins = "http://localhost:4200")
public class TimeTableController {

    private final IssueRepository issueRepository;

    private final UserRepository userRepository;

    private final TimeTableRepository timeTableRepository;

    public TimeTableController(IssueRepository issueRepository,
                               UserRepository userRepository,
                               TimeTableRepository timeTableRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
        this.timeTableRepository = timeTableRepository;
    }

    @GetMapping()
    public ResponseEntity<List<TimeTable>> getAllTime(){
        List<TimeTable> timeTableList = timeTableRepository.findAll();
        return ResponseEntity.ok(timeTableList);
    }

    @GetMapping("/time")
    public ResponseEntity<List<TimeTable>> findByUserIdAndIssueId(@RequestParam String userName, @RequestParam Integer issueId){
        List<TimeTable> time = timeTableRepository.findByUserIdAndIssueId(userName,issueId);
        return ResponseEntity.ok(time);

    }
    @PostMapping()
    public ResponseEntity<TimeTable> addTimeTable(@RequestBody TimeTableUpdate timeTablePost){
        if (timeTablePost == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else{
            if (userRepository.findByUsername(timeTablePost.getUser_name()).isEmpty() || issueRepository.findByName(timeTablePost.getIssue_name()).isEmpty()){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            Integer userId = userRepository.findByUsername(timeTablePost.getUser_name()).get().getId();
            Integer issueId = issueRepository.findByName(timeTablePost.getIssue_name()).get().getId();

            User user = userRepository.getReferenceById(userId);
            Issue issue = issueRepository.getReferenceById(issueId);

            TimeTable toSave = new TimeTable();

            toSave.setIssue(issue);
            toSave.setUser(user);
            toSave.setStartedat(Timestamp.valueOf(timeTablePost.getStartedat()));
            toSave.setFinishedat(Timestamp.valueOf(timeTablePost.getFinishedat()));

            timeTableRepository.save(toSave);
            return new ResponseEntity<>(toSave, HttpStatus.OK);

        }
    }
//    @PutMapping("/updateTime")
//    ResponseEntity<TimeTable> updateTime(@RequestBody TimeTableUpdate updateTime){
//        if (updateTime == null){
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//        else{
//            Integer userId = userRepository.findByUsername(updateTime.getUser_name()).get().getId();
//            Integer issueId = issueRepository.findByName(updateTime.getIssue_name()).get().getId();
//
//            User user = userRepository.getReferenceById(userId);
//            Issue issue = issueRepository.getReferenceById(issueId);
//
//            TimeTable toSave = new TimeTable();
//
//            toSave.setIssue(issue);
//            toSave.setUser(user);
//            toSave.setStartdat(updateTime.getStartdat());
//            toSave.setFinishdat(updateTime.getFinishdat());
//
//            timeTableRepository.save(toSave);
//            return new ResponseEntity<>(toSave, HttpStatus.OK);
//
//        }
//    }
}
