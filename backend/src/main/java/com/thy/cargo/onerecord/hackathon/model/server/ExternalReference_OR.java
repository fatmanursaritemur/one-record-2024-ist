package com.thy.cargo.onerecord.hackathon.model.server;

import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:ExternalReference")
public class ExternalReference_OR {
    String id;
    String documentLink;
    String documentName;
    String documentType;
    String documentVersion;
    String documentIdentifier;
    DateTime_OR validFrom;
    DateTime_OR validUntil;

    Company_OR originator;


    public String getDocumentLink() {
        return documentLink;
    }

    public void setDocumentLink(String documentLink) {
        this.documentLink = documentLink;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getDocumentVersion() {
        return documentVersion;
    }

    public void setDocumentVersion(String documentVersion) {
        this.documentVersion = documentVersion;
    }

    public String getDocumentIdentifier() {
        return documentIdentifier;
    }

    public void setDocumentIdentifier(String documentIdentifier) {
        this.documentIdentifier = documentIdentifier;
    }

    public DateTime_OR getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(DateTime_OR validFrom) {
        this.validFrom = validFrom;
    }

    public DateTime_OR getValidUntil() {
        return validUntil;
    }

    public void setValidUntil(DateTime_OR validUntil) {
        this.validUntil = validUntil;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Company_OR getOriginator() {
        return originator;
    }

    public void setOriginator(Company_OR originator) {
        this.originator = originator;
    }




}
