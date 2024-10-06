package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.service.IIDPService;
import com.thy.cargo.onerecord.hackathon.service.IOneCoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class OneCoreServiceImpl implements IOneCoreService {

    @Autowired
    public IDPServiceImpl idpService;

    @Autowired
    public OneRecordServiceImpl oneRecordService;


    /**
     * SLA Agreement will be created in CargoIQ Onerecord server by calling CargoIQ API.
     *
     * Once the record is created in the cargoIQ onerecord server, Our OneRecord server will
     * start to push all scheduled flights to the GHA as part of the SLA Agreement
     * Example Flight: {
     *     "@context": {
     *         "cargo": "https://onerecord.iata.org/ns/cargo#"
     *     },
     *     "@id": "http://0.0.0.0:8080/logistics-objects/TransportMovement-1",
     *     "@type": "cargo:TransportMovement",
     *     "cargo:arrivalLocation": "http://0.0.0.0:8080/logistics-objects/bos1QAT",
     *     "cargo:departureLocation": "http://0.0.0.0:8080/logistics-objects/bos1IST",
     *     "cargo:modeQualifier:": "MAIN_CARRIAGE",
     *     "cargo:transportIdentifier": "TK1299"
     * }
     *
     * @param agreement
     * @return
     */


    @Override
    public ExternalReference sendSlaAgreement(File agreement) {
        ExternalReference externalReference = idpService.getExternalReferenceViaIDP(agreement);
        ExternalReference sentExternalReference=oneRecordService.createSLAAgreement(externalReference);
        return sentExternalReference ;
    }
}
