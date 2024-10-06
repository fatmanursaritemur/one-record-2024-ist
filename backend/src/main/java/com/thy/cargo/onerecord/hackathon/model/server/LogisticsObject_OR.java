package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.Location;
import com.thy.cargo.onerecord.hackathon.model.Party;
import com.thy.cargo.onerecord.hackathon.model.Shipment;

import java.util.List;

import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:Waybill")
public class LogisticsObject_OR {
    @JsonProperty("@id")
    private String id;

    @JsonProperty("cargo:arrivalLocation")
    private Location_OR arrivalLocation;
    @JsonProperty("cargo:departureLocation")
    private Location_OR departureLocation;
    @JsonProperty("cargo:involvedParties")
    private List<Party_OR> involvedParties;
    @JsonProperty("cargo:shipment")
    private Shipment_OR shipment;

    @JsonProperty("cargo:waybillPrefix")
    private String waybillPrefix;

    @JsonProperty("cargo:waybillType")
    private String waybillType;
    @JsonProperty("cargo:waybillnumber")
    private String waybillnumber;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public List<Party_OR> getInvolvedParties() {
        return involvedParties;
    }

    public void setInvolvedParties(List<Party_OR> involvedParties) {
        this.involvedParties = involvedParties;
    }

    public Shipment_OR getShipment() {
        return shipment;
    }

    public void setShipment(Shipment_OR shipment) {
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
