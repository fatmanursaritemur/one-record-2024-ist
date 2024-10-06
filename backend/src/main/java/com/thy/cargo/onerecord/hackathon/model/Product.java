package com.thy.cargo.onerecord.hackathon.model;

public class Product {
    private HsCode hsCode;
    private String unNumber;
    private Sensor sensor;

    public HsCode getHsCode() {
        return hsCode;
    }

    public void setHsCode(HsCode hsCode) {
        this.hsCode = hsCode;
    }

    public String getUnNumber() {
        return unNumber;
    }

    public void setUnNumber(String unNumber) {
        this.unNumber = unNumber;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
}
