package com.teamtrack.teamtrackbackend.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    @Query("SELECT p FROM Project p JOIN FETCH p.groups g JOIN FETCH g.users u WHERE u.id = :userId")
    List<Project> findByUserId(@Param("userId") Integer userId);

    @Query("SELECT p FROM Project p JOIN FETCH p.groups g JOIN FETCH g.users u WHERE u.id = :userId AND p.id = :projectId")
    Project findByProjectIdUserId(@Param("projectId")Integer projectId, @Param("userId") Integer userId);
}
