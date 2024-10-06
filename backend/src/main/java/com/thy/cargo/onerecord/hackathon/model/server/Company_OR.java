package com.thy.cargo.onerecord.hackathon.model.server;


import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:originator")
public class Company_OR {
    String iataCargoAgentCode;
    String iataCargoAgentLocationIdentifier;

    public String getIataCargoAgentCode() {
        return iataCargoAgentCode;
    }

    public void setIataCargoAgentCode(String iataCargoAgentCode) {
        this.iataCargoAgentCode = iataCargoAgentCode;
    }

    public String getIataCargoAgentLocationIdentifier() {
        return iataCargoAgentLocationIdentifier;
    }

    public void setIataCargoAgentLocationIdentifier(String iataCargoAgentLocationIdentifier) {
        this.iataCargoAgentLocationIdentifier = iataCargoAgentLocationIdentifier;
    }
}
