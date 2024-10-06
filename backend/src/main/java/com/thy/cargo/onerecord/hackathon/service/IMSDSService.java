package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;

public interface IMSDSService {
    CheckStatus msdsCheck(String pieceId);
}
