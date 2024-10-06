package com.thy.cargo.onerecord.hackathon.model;

import java.util.List;

public class LogisticsObject {

    private Location arrivalLocation;
    private Location departureLocation;
    private List<Party> involvedParties;
    private Shipment shipment;
    private String waybillPrefix;
    private String waybillType;
    private String waybillnumber;

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

    public List<Party> getInvolvedParties() {
        return involvedParties;
    }

    public void setInvolvedParties(List<Party> involvedParties) {
        this.involvedParties = involvedParties;
    }

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }

    public String getWaybillPrefix() {
        return waybillPrefix;
    }

    public void setWaybillPrefix(String waybillPrefix) {
        this.waybillPrefix = waybillPrefix;
    }

    public String getWaybillType() {
        return waybillType;
    }

    public void setWaybillType(String waybillType) {
        this.waybillType = waybillType;
    }

    public String getWaybillnumber() {
        return waybillnumber;
    }

    public void setWaybillnumber(String waybillnumber) {
        this.waybillnumber = waybillnumber;
    }
}
