package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import com.thy.cargo.onerecord.hackathon.model.Piece;
import com.thy.cargo.onerecord.hackathon.service.ICustomsService;
import com.thy.cargo.onerecord.hackathon.service.IJsonLdMapperService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

@Service
public class CustomsServiceImpl implements ICustomsService {

    @Autowired
    IJsonLdMapperService jsonLdMapperService;

    @Override
    public CheckStatus customsPreFiling(String pieceId, String waybillId) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        /**
         *  This request is sent to Customs Onerecord Server
         *
         *     {
         *     "@context": {
         *         "cargo": "https://onerecord.iata.org/ns/cargo#"
         *     },
         *     "@id": "http://0.0.0.0:8080/logistics-objects/DgDec1",
         *     "@type": "cargo:DgDeclaration",
         *     "cargo:issuedForPiece":"http://0.0.0.0:8080/logistics-objects/Prodg3001",
         *     "cargo:aircraftLimitationInformation":"DgDeclaration is done."
         *
         *
         * Customs give a reponse with a RFI or 'OK'
         */

            if (pieceId.equals("Piece20002") || pieceId.equals("Piece20003")) {
                return CheckStatus.NOT_OK;
            } else {
                return CheckStatus.OK;
            }
    }

    @Override
    public CheckStatus customsDgDeclaration() {

        /**
         * DgDeclaration is sent to Customs Onerecord Server
         *
         *
         *     "@context": {
         *         "cargo": "https://onerecord.iata.org/ns/cargo#"
         *     },
         *     "@id": "http://0.0.0.0:8080/logistics-objects/DgDec1",
         *     "@type": "cargo:DgDeclaration",
         *     "cargo:externalReferences":"http://0.0.0.0:8080/logistics-objects/ExtRef1",
         *     "cargo:issuedForPiece":"http://0.0.0.0:8080/logistics-objects/Prodg3001",
         *     "cargo:aircraftLimitationInformation":"DgDeclaration is done."
         *
         *
         *  Customs response is 'OK'
         */
        return CheckStatus.OK;
    }
}
