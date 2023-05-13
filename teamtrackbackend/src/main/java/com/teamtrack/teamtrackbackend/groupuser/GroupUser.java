package com.teamtrack.teamtrackbackend.groupuser;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
public class GroupUser {
    @Id
    private Integer group_id;
    @Id
    private Integer user_id;
}
