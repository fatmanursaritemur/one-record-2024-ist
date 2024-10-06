package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldId;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;
import lombok.Getter;
import lombok.Setter;


@JsonldType("cargo:LogisticsEvent")
public class LogisticsEvent_OR {

    @JsonProperty("@id")
    public String id;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#eventFor")
    private String eventFor;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#eventTimeType")
    private String eventTimeType;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#eventCode")
    private EventCode_OR eventCode;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#eventName")
    private String eventName;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#eventDate")
    private DateTime_OR eventDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEventFor() {
        return eventFor;
    }

    public void setEventFor(String eventFor) {
        this.eventFor = eventFor;
    }

    public String getEventTimeType() {
        return eventTimeType;
    }

    public void setEventTimeType(String eventTimeType) {
        this.eventTimeType = eventTimeType;
    }

    public EventCode_OR getEventCode() {
        return eventCode;
    }

    public void setEventCode(EventCode_OR eventCode) {
        this.eventCode = eventCode;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public DateTime_OR getEventDate() {
        return eventDate;
    }

    public void setEventDate(DateTime_OR eventDate) {
        this.eventDate = eventDate;
    }
}
