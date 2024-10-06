package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:Organization")
public class Organization_OR {
    @JsonProperty("cargo:name")
    private String name;
    @JsonProperty("cargo:basedAtLocation")
    private Location_OR basedAtLocation;
    @JsonProperty("cargo:otherIdentifiers")
    private OtherIdentifiers_OR otherIdentifiers;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location_OR getBasedAtLocation() {
        return basedAtLocation;
    }

    public void setBasedAtLocation(Location_OR basedAtLocation) {
        this.basedAtLocation = basedAtLocation;
    }

    public OtherIdentifiers_OR getOtherIdentifiers() {
        return otherIdentifiers;
    }

    public void setOtherIdentifiers(OtherIdentifiers_OR otherIdentifiers) {
        this.otherIdentifiers = otherIdentifiers;
    }
}
