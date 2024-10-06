package com.thy.cargo.onerecord.hackathon.model;

import java.util.List;

public class InvolvedParties {
    private String pieceId;
    private String grossWeight;
    private String goodsDescription;
    private String specialHandlingCodes;
    private Dimensions dimensions;
    private Product product;
    private List<InvolvedParties> involvedParties;
    private List<LogisticsAction> involvedInActions;

    public String getPieceId() {
        return pieceId;
    }

    public void setPieceId(String pieceId) {
        this.pieceId = pieceId;
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

    public Dimensions getDimensions() {
        return dimensions;
    }

    public void setDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
    }

    public List<LogisticsAction> getInvolvedInActions() {
        return involvedInActions;
    }

    public void setInvolvedInActions(List<LogisticsAction> involvedInActions) {
        this.involvedInActions = involvedInActions;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
