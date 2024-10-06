package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("https://onerecord.iata.org/ns/cargo#CodeListElement")
public class EventCode_OR {

    @JsonProperty("https://onerecord.iata.org/ns/cargo#code")
    private String code;

    @JsonProperty("https://onerecord.iata.org/ns/cargo#codeListName")
    private String codeListName;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCodeListName() {
        return codeListName;
    }

    public void setCodeListName(String codeListName) {
        this.codeListName = codeListName;
    }
}
