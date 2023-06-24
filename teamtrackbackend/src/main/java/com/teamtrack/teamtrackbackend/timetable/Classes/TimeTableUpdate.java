package com.teamtrack.teamtrackbackend.timetable.Classes;

import java.sql.Timestamp;

public class TimeTableUpdate {

    private String user_name;

    private String issue_name;

    private String startedat;

    private String finishedat;

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getIssue_name() {
        return issue_name;
    }

    public void setIssue_name(String issue_name) {
        this.issue_name = issue_name;
    }

    public String getStartedat() {
        return startedat;
    }

    public void setStartedat(String startedat) {
        this.startedat = startedat;
    }

    public String getFinishedat() {
        return finishedat;
    }

    public void setFinishedat(String finishedat) {
        this.finishedat = finishedat;
    }
}
