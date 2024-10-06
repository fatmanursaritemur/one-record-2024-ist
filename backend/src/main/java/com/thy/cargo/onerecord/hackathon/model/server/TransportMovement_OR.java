package com.thy.cargo.onerecord.hackathon.model.server;

import com.thy.cargo.onerecord.hackathon.model.Location;

public class TransportMovement_OR {
    String modeQualifier;
    String transportIdentifier;

    Location_OR arrivalLocation;

    Location_OR departureLocation;

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
}
