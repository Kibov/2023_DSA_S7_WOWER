package com.teamtrack.teamtrackbackend.project;

import com.teamtrack.teamtrackbackend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    @Query("SELECT p FROM Project p JOIN FETCH p.groups g JOIN FETCH g.users u WHERE u.id = :userId")
    List<Project> findByUserId(@Param("userId") Integer userId);
}
