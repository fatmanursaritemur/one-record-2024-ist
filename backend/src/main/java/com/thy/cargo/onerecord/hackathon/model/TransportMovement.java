package com.thy.cargo.onerecord.hackathon.model;

public class TransportMovement {
    String modeQualifier;
    String transportIdentifier;

    Location arrivalLocation;

    Location departureLocation;

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

    public Location getArrivalLocation() {
        return arrivalLocation;
    }

    public void setArrivalLocation(Location arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }

    public Location getDepartureLocation() {
        return departureLocation;
    }

    public void setDepartureLocation(Location departureLocation) {
        this.departureLocation = departureLocation;
    }
}
