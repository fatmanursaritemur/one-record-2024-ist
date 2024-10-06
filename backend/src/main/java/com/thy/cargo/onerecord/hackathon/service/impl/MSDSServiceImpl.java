package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.service.IMSDSService;
import org.springframework.stereotype.Service;

@Service
public class MSDSServiceImpl implements IMSDSService {
    @Override
    public CheckStatus msdsCheck(String pieceId) {
        if (pieceId.equals("Piece20002") || pieceId.equals("Piece20003")) {
            return CheckStatus.CHECK;
        }else if(pieceId.equals("Piece20001")){
            return CheckStatus.NOT_OK;
        }
        return CheckStatus.OK;
    }
}
