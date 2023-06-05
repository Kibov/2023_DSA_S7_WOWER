package com.teamtrack.teamtrackbackend.groupuser;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "group_user")
@IdClass(GroupUserId.class)
public class GroupUser {
    @Id
    @Column(name = "group_id")
    private Integer groupId;

    @Id
    @Column(name = "user_id")
    private Integer userId;
}
