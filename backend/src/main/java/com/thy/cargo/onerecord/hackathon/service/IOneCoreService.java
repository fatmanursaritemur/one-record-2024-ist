package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import com.thy.cargo.onerecord.hackathon.model.server.LogisticsObject_OR;
import org.springframework.http.HttpStatusCode;

import java.io.File;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

public interface IOneCoreService {

  ExternalReference sendSlaAgreement(File agreement);
}
