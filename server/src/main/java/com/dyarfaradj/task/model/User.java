package com.dyarfaradj.task.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int id;
    @Column(name = "user_name")
    private String name;
    @ElementCollection(targetClass=String.class)
    private List<String> skills;
    private String city;
    private String country;
    private Integer score;
    private String avatar;
    private Date registeredDate;
}