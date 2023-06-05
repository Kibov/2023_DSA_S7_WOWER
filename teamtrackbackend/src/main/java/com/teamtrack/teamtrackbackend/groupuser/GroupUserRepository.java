package com.teamtrack.teamtrackbackend.groupuser;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupUserRepository extends JpaRepository<GroupUser, GroupUserId> {
    Optional<GroupUser> findByUserId(Integer userId);
}
