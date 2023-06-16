package com.teamtrack.teamtrackbackend.group;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface GroupsRepository extends JpaRepository<Groups, Integer> {
    Optional<Groups> findById(Integer group);

    @Query("SELECT g.id, g.name, u.id, u.username " +
            "FROM Groups g " +
            "JOIN g.users u")
    List<Object[]> findAllGroupsWithUsers();
}
