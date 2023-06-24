package com.teamtrack.teamtrackbackend.timetable;

import com.teamtrack.teamtrackbackend.timetable.Classes.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TimeTableRepository  extends JpaRepository<TimeTable,Integer> {
    @Override
    Optional<TimeTable> findById(Integer integer);

    @Query("SELECT t FROM TimeTable t JOIN FETCH t.user u JOIN FETCH t.issue i WHERE u.username =:userName AND i.id =:issueId")
    List<TimeTable> findByUserIdAndIssueId(String userName, Integer issueId);
}
