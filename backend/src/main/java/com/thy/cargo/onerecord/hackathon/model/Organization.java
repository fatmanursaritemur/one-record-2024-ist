package com.thy.cargo.onerecord.hackathon.model;

public class Organization {

    private String name;
    private Location basedAtLocation;
    private OtherIdentifiers otherIdentifiers;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location getBasedAtLocation() {
        return basedAtLocation;
    }

    public void setBasedAtLocation(Location basedAtLocation) {
        this.basedAtLocation = basedAtLocation;
    }

    public OtherIdentifiers getOtherIdentifiers() {
        return otherIdentifiers;
    }

    public void setOtherIdentifiers(OtherIdentifiers otherIdentifiers) {
        this.otherIdentifiers = otherIdentifiers;
    }
}
