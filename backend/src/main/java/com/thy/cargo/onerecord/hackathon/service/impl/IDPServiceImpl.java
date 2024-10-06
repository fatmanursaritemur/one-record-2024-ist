package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.Agreement;
import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.model.Organization;
import com.thy.cargo.onerecord.hackathon.model.server.DateTime_OR;
import com.thy.cargo.onerecord.hackathon.service.IIDPService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;


@Service
public class IDPServiceImpl implements IIDPService {

    /*
 The file received from the frontend is processed with the intelligent document processing tool.
 With this processing, an object is obtained in the ExternalReference model, which is a one record model.
     */
    @Override
    public ExternalReference getExternalReferenceViaIDP(File file) {
        ExternalReference externalReference = new ExternalReference();

        externalReference.setId("Agreement1");
        externalReference.setDocumentType("Agreement");
        externalReference.setDocumentVersion("1.0");
        externalReference.setDocumentIdentifier("AGR0235");
        List<Agreement> agreementList = new ArrayList<>();

        Agreement agreement = new Agreement();
        agreement.setOperationType("BLLAAAAAA");
        agreement.setServiceType("BLLAAAAAA");
        agreement.setPenalty("BLAAAAA BLAAA");
        agreement.setFeed(true);

        DateTime_OR eventTime = new DateTime_OR();
        eventTime.setValue("2024-10-05T13:00:00Z");
        agreement.setEventTime(eventTime);

        DateTime_OR referenceTime = new DateTime_OR();
        referenceTime.setValue("2024-10-05T13:00:00Z");
        agreement.setReferenceTime(referenceTime);

        agreementList.add(agreement);
        externalReference.setAgreements(agreementList);


        DateTime_OR validFrom = new DateTime_OR();
        validFrom.setValue("2024-10-05T13:00:00Z");
        externalReference.setValidFrom(validFrom);

        DateTime_OR validUntil = new DateTime_OR();
        validUntil.setValue("2024-10-05T13:00:00Z");
        externalReference.setValidUtil(validUntil);

        return externalReference;
    }
}
