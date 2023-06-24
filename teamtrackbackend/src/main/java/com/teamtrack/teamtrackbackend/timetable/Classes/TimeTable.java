package com.teamtrack.teamtrackbackend.timetable.Classes;

import com.teamtrack.teamtrackbackend.issue.Classes.Issue;
import com.teamtrack.teamtrackbackend.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "timetable")
public class TimeTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "task_id")
    private Issue issue;

    private Timestamp startedat;

    private Timestamp finishedat;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Issue getIssue() {
        return issue;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    public Timestamp getStartedat() {
        return startedat;
    }

    public void setStartedat(Timestamp startedat) {
        this.startedat = startedat;
    }

    public Timestamp getFinishedat() {
        return finishedat;
    }

    public void setFinishedat(Timestamp finishedat) {
        this.finishedat = finishedat;
    }
}
