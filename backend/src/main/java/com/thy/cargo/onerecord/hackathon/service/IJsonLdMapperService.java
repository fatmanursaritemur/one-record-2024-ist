package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.LogisticsEvent;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import org.springframework.http.HttpStatusCode;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface IJsonLdMapperService {
    LogisticsObject getWayBill(String wayBillId) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsObject(LogisticsObject logisticsObject) throws IOException, NoSuchAlgorithmException, KeyManagementException;
    HttpStatusCode createLogisticsEvent(String wayBillId, String logisticsEventId, LogisticsEvent logisticsEvent) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    List<LogisticsEvent> getLogisticsAllEvent(String wayBillId) throws NoSuchAlgorithmException, IOException, KeyManagementException;

    HttpStatusCode updateLogisticsObject(LogisticsObject requestData) throws IOException, NoSuchAlgorithmException, KeyManagementException;

}
