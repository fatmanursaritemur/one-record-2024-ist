package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

public interface ICustomsService {
    CheckStatus customsPreFiling(String pieceId, String waybillId) throws IOException, NoSuchAlgorithmException, KeyManagementException;
    CheckStatus customsDgDeclaration();
}
