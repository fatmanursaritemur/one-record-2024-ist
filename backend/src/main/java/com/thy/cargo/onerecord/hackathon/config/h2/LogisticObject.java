package com.thy.cargo.onerecord.hackathon.config.h2;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LogisticObject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long logisticObjectId;

    private String name;
    private String location;

}
