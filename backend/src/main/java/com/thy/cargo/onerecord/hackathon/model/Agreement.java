package com.thy.cargo.onerecord.hackathon.model;


import com.thy.cargo.onerecord.hackathon.model.server.DateTime_OR;

public class Agreement {
    String operationType;
    String serviceType;
    DateTime_OR eventTime;
    DateTime_OR referenceTime;
    String penalty;
    Boolean feed;

    public String getOperationType() {
        return operationType;
    }

    public void setOperationType(String operationType) {
        this.operationType = operationType;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public DateTime_OR getEventTime() {
        return eventTime;
    }

    public void setEventTime(DateTime_OR eventTime) {
        this.eventTime = eventTime;
    }

    public DateTime_OR getReferenceTime() {
        return referenceTime;
    }

    public void setReferenceTime(DateTime_OR referenceTime) {
        this.referenceTime = referenceTime;
    }

    public String getPenalty() {
        return penalty;
    }

    public void setPenalty(String penalty) {
        this.penalty = penalty;
    }

    public Boolean getFeed() {
        return feed;
    }

    public void setFeed(Boolean feed) {
        this.feed = feed;
    }


}
