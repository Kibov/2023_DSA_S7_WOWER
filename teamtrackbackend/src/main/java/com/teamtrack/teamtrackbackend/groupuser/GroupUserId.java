package com.teamtrack.teamtrackbackend.groupuser;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GroupUserId implements Serializable {
    private Integer groupId;
    private Integer userId;

}
