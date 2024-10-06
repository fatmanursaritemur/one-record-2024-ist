package com.thy.cargo.onerecord.hackathon.model;

public class Consignee {

    private Location basedAtLocation;
    private String name;
    private String textualValue;

    public Location getBasedAtLocation() {
        return basedAtLocation;
    }

    public void setBasedAtLocation(Location basedAtLocation) {
        this.basedAtLocation = basedAtLocation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTextualValue() {
        return textualValue;
    }

    public void setTextualValue(String textualValue) {
        this.textualValue = textualValue;
    }
}
