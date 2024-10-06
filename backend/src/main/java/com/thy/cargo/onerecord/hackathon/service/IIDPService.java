package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.ExternalReference;

import java.io.File;

public interface IIDPService {

    ExternalReference getExternalReferenceViaIDP(File file);
}
