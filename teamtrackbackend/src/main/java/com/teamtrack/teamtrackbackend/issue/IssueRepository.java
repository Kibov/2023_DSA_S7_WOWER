package com.teamtrack.teamtrackbackend.issue;

import com.teamtrack.teamtrackbackend.issue.Classes.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue,Integer> {
    Optional<Issue> findById(Integer issueId);

    Optional<Issue> findByName(String issueName);
}
