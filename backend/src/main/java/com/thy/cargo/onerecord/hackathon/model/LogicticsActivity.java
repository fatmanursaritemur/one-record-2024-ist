package com.thy.cargo.onerecord.hackathon.model;

import java.util.List;

public class LogicticsActivity {
    private Location arrivalLocation;
    private Location departureLocation;
    private String modeQualifier;
    private String transportIdentifier;
    private List<MovementTime> movementTimes;

    private String shippingMarks;

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

    public List<MovementTime> getMovementTimes() {
        return movementTimes;
    }

    public void setMovementTimes(List<MovementTime> movementTimes) {
        this.movementTimes = movementTimes;
    }

    public void setShippingMarks(String shippingMarks) {
        this.shippingMarks = shippingMarks;
    }

    public String getShippingMarks() {
        return shippingMarks;
    }
}
