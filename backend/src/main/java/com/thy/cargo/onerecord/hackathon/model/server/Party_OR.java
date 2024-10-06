package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.Organization;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:Party")
public class Party_OR {
    @JsonProperty("cargo:role")
    private String role;
    @JsonProperty("cargo:organization")
    private Organization_OR organization;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Organization_OR getOrganization() {
        return organization;
    }

    public void setOrganization(Organization_OR organization) {
        this.organization = organization;
    }
}
