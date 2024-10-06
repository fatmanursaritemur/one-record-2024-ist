package com.thy.cargo.onerecord.hackathon.model;

import com.thy.cargo.onerecord.hackathon.model.Location;

public class LogisticsEvent {
    private String pieceId;
    private Location location;
    private String eventTimeType;
    private String eventCode;
    private String codeListName;
    private String eventDate;
    private String eventName;
    private String creationDate;
    private String linkedObject;

    public String getCodeListName() {
        return codeListName;
    }

    public void setCodeListName(String codeListName) {
        this.codeListName = codeListName;
    }

    private String eventFor;

    public String getPieceId() {
        return pieceId;
    }

    public void setPieceId(String pieceId) {
        this.pieceId = pieceId;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getEventTimeType() {
        return eventTimeType;
    }

    public void setEventTimeType(String eventTimeType) {
        this.eventTimeType = eventTimeType;
    }

    public String getEventCode() {
        return eventCode;
    }

    public void setEventCode(String eventCode) {
        this.eventCode = eventCode;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public String getLinkedObject() {
        return linkedObject;
    }

    public void setLinkedObject(String linkedObject) {
        this.linkedObject = linkedObject;
    }

    public String getEventFor() {
        return eventFor;
    }

    public void setEventFor(String eventFor) {
        this.eventFor = eventFor;
    }
}
