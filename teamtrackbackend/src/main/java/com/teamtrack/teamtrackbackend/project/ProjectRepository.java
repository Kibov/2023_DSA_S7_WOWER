package com.teamtrack.teamtrackbackend.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    Optional<Project> findProjectByGroup_id(Integer group_id);
}
