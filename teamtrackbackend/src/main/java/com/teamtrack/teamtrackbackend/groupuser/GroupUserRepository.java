package com.teamtrack.teamtrackbackend.groupuser;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupUserRepository extends JpaRepository<GroupUser, Integer> {
    Optional<GroupUser> findByUser_id(Integer user_id);
    Optional<GroupUser> findByGroup_id(Integer group_id);
}
