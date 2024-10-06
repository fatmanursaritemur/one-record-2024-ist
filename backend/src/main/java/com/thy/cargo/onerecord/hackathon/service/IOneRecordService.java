package com.thy.cargo.onerecord.hackathon.service;

import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import com.thy.cargo.onerecord.hackathon.model.server.LogisticsObject_OR;
import org.springframework.http.HttpStatusCode;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

public interface IOneRecordService {
    String getLogisticsObject(String logisticObjectId) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsObject(String logisticsObject_or) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    String getLogisticsAllEvent(String logisticObjectId) throws NoSuchAlgorithmException, KeyManagementException, IOException;

    HttpStatusCode createLogisticsEvent(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode updateLogisticsEvent(LogisticsObject requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    ExternalReference createSLAAgreement(ExternalReference externalReference);

    HttpStatusCode createLogisticsEventUWS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventLIR(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventLPOW(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventALS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventALE(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventOFB(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventWHU(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventEXC(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventEXR(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventWDO(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventONB(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventAUS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventAUE(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;

    HttpStatusCode createLogisticsEventLPW(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException;
}
