package com.teamtrack.teamtrackbackend.group;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupsRepository extends JpaRepository<Groups, Integer> {
    Optional<Groups> findById(Integer group);

}
