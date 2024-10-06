package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:Location")
public class Location_OR {

    @JsonProperty("cargo:code")
    private String code;
    @JsonProperty("cargo:locationName")
    private String locationName;
    @JsonProperty("cargo:locationType")
    private String locationType;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }
}
