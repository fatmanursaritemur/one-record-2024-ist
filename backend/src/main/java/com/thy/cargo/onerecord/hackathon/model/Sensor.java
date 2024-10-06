package com.thy.cargo.onerecord.hackathon.model;

import lombok.AllArgsConstructor;
import lombok.Builder;

public class Sensor {

    private String description;
    private String sensorType;
    private String name;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSensorType() {
        return sensorType;
    }

    public void setSensorType(String sensorType) {
        this.sensorType = sensorType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
