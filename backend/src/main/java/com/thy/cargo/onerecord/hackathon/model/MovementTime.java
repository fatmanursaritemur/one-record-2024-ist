package com.thy.cargo.onerecord.hackathon.model;

public class MovementTime {
    private String movementTimeStamp;
    private String movementTimeType;
    private String direction;

    public String getMovementTimeStamp() {
        return movementTimeStamp;
    }

    public void setMovementTimeStamp(String movementTimeStamp) {
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
