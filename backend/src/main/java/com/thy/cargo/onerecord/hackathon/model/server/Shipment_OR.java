package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.Piece;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

import java.util.List;

@JsonldType("cargo:Shipment")
public class Shipment_OR {
    @JsonProperty("cargo:pieces")
    private List<Piece_OR> pieces;

    public List<Piece_OR> getPieces() {
        return pieces;
    }

    public void setPieces(List<Piece_OR> pieces) {
        this.pieces = pieces;
    }
}
