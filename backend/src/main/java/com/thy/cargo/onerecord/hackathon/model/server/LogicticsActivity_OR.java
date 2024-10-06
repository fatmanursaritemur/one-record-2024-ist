package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.Location;
import com.thy.cargo.onerecord.hackathon.model.MovementTime;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

import java.util.List;

@JsonldType("cargo:TransportMovement")
public class LogicticsActivity_OR {
    @JsonProperty("cargo:arrivalLocation")
    private Location_OR arrivalLocation;
    @JsonProperty("cargo:departureLocation")
    private Location_OR departureLocation;
    @JsonProperty("cargo:modeQualifier")
    private String modeQualifier;
    @JsonProperty("cargo:transportIdentifier")
    private String transportIdentifier;
    @JsonProperty("cargo:movementTimes")
    private List<MovementTime_OR> movementTimes;

    public Location_OR getArrivalLocation() {
        return arrivalLocation;
    }

    public void setArrivalLocation(Location_OR arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }

    public Location_OR getDepartureLocation() {
        return departureLocation;
    }

    public void setDepartureLocation(Location_OR departureLocation) {
        this.departureLocation = departureLocation;
    }

    public String getModeQualifier() {
        return modeQualifier;
    }

    public void setModeQualifier(String modeQualifier) {
        this.modeQualifier = modeQualifier;
    }

    public String getTransportIdentifier() {
        return transportIdentifier;
    }

    public void setTransportIdentifier(String transportIdentifier) {
        this.transportIdentifier = transportIdentifier;
    }

    public List<MovementTime_OR> getMovementTimes() {
        return movementTimes;
    }

    public void setMovementTimes(List<MovementTime_OR> movementTimes) {
        this.movementTimes = movementTimes;
    }
}
