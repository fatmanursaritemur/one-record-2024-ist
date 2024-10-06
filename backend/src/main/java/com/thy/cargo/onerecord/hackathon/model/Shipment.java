package com.thy.cargo.onerecord.hackathon.model;

import java.util.List;

public class Shipment {
    private List<Piece> pieces;

    public List<Piece> getPieces() {
        return pieces;
    }

    public void setPieces(List<Piece> pieces) {
        this.pieces = pieces;
    }
}
