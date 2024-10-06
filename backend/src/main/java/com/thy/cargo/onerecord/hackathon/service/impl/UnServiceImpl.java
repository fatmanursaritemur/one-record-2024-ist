package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.service.IUNService;
import org.springframework.stereotype.Service;

@Service
public class UnServiceImpl implements IUNService {
    @Override
    public CheckStatus unNumberCheck(String unNumber) {
        return CheckStatus.OK;
    }
}
