package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:OtherIdentifiers")
public class OtherIdentifiers_OR {
    @JsonProperty("cargo:otherIdentifierType")
    private String otherIdentifierType;
    @JsonProperty("cargo:textualValue")
    private String textualValue;

    public String getOtherIdentifierType() {
        return otherIdentifierType;
    }

    public void setOtherIdentifierType(String otherIdentifierType) {
        this.otherIdentifierType = otherIdentifierType;
    }

    public String getTextualValue() {
        return textualValue;
    }

    public void setTextualValue(String textualValue) {
        this.textualValue = textualValue;
    }
}
