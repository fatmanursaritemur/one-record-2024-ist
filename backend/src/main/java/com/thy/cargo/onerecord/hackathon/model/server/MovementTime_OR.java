package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:MovementTime")
public class MovementTime_OR {
    @JsonProperty("cargo:movementTimeStamp")
    private MovementTimeStamp_OR movementTimeStamp;
    @JsonProperty("cargo:movementTimeType")
    private String movementTimeType;
    @JsonProperty("cargo:direction")
    private String direction;

    public MovementTimeStamp_OR getMovementTimeStamp() {
        return movementTimeStamp;
    }

    public void setMovementTimeStamp(MovementTimeStamp_OR movementTimeStamp) {
        this.movementTimeStamp = movementTimeStamp;
    }

    public String getMovementTimeType() {
        return movementTimeType;
    }

    public void setMovementTimeType(String movementTimeType) {
        this.movementTimeType = movementTimeType;
    }
    public String getDirection() {
        return direction;
    }
    public void setDirection(String direction) {
        this.direction = direction;
    }
}
