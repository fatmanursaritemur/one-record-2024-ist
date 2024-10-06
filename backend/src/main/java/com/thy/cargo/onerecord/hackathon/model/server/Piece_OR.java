package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.Dimensions;
import com.thy.cargo.onerecord.hackathon.model.LogisticsAction;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

import java.util.List;

@JsonldType("cargo:Piece")
public class Piece_OR {
    @JsonProperty("@id")
    private String id;

    @JsonProperty("cargo:grossWeight")
    private String grossWeight;
    @JsonProperty("cargo:goodsDescription")
    private String goodsDescription;
    @JsonProperty("cargo:specialHandlingCodes")
    private String specialHandlingCodes;
    @JsonProperty("cargo:dimensions")
    private Dimensions_OR dimensions;
    @JsonProperty("cargo:involvedInActions")
    private List<LogisticsAction_OR> involvedInActions;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(String grossWeight) {
        this.grossWeight = grossWeight;
    }

    public String getGoodsDescription() {
        return goodsDescription;
    }

    public void setGoodsDescription(String goodsDescription) {
        this.goodsDescription = goodsDescription;
    }

    public String getSpecialHandlingCodes() {
        return specialHandlingCodes;
    }

    public void setSpecialHandlingCodes(String specialHandlingCodes) {
        this.specialHandlingCodes = specialHandlingCodes;
    }

    public Dimensions_OR getDimensions() {
        return dimensions;
    }

    public void setDimensions(Dimensions_OR dimensions) {
        this.dimensions = dimensions;
    }

    public List<LogisticsAction_OR> getInvolvedInActions() {
        return involvedInActions;
    }

    public void setInvolvedInActions(List<LogisticsAction_OR> involvedInActions) {
        this.involvedInActions = involvedInActions;
    }
}
