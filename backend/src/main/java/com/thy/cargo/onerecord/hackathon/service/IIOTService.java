package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.Sensor;
import com.thy.cargo.onerecord.hackathon.model.response.IOTResponseModel;

public interface IIOTService {

    Sensor getIOTInformation(String iotId);
}
