package com.thy.cargo.onerecord.hackathon.model;

import com.thy.cargo.onerecord.hackathon.model.server.Agreement_OR;
import com.thy.cargo.onerecord.hackathon.model.server.Company_OR;
import com.thy.cargo.onerecord.hackathon.model.server.DateTime_OR;

import java.util.List;

public class ExternalReference {
    String id;
    String documentLink;
    String documentName;
    String documentType;
    String documentVersion;
    String documentIdentifier;
    Company_OR originator;

    DateTime_OR validFrom;
    DateTime_OR validUtil;
     List<Agreement> agreements;

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

    public List<Agreement> getAgreements() {
        return agreements;
    }

    public void setAgreements(List<Agreement> agreements) {
        this.agreements = agreements;
    }

    public DateTime_OR getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(DateTime_OR validFrom) {
        this.validFrom = validFrom;
    }

    public DateTime_OR getValidUtil() {
        return validUtil;
    }

    public void setValidUtil(DateTime_OR validUtil) {
        this.validUtil = validUtil;
    }
}

