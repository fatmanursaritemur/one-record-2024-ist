package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;
import lombok.Getter;
import lombok.Setter;


@JsonldType("http://www.w3.org/2001/XMLSchema:dateTime")
public class DateTime_OR {

    @JsonProperty("@value")
    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
