package com.teamtrack.teamtrackbackend.comment;

import com.teamtrack.teamtrackbackend.comment.Classes.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Integer> {

    Optional<Comment> findById(Integer id);

    @Query("SELECT c FROM Comment c JOIN FETCH c.issue i WHERE i.id =:id")
    List<Comment> findByTask(Integer id);
}
