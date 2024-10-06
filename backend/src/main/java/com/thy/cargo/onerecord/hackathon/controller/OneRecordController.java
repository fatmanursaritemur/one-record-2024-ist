package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.*;
import com.thy.cargo.onerecord.hackathon.service.IJsonLdMapperService;
import com.thy.cargo.onerecord.hackathon.service.IOneRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping("/onerecord")
//@CrossOrigin(origins = "http://localhost:4200")
public class OneRecordController {

    @Autowired
    IOneRecordService oneRecordService;

    @Autowired
    IJsonLdMapperService jsonLdMapperService;

    //String logisticObjectId = "90eb49a5-807e-4839-9948-9fe1f5fd8598";

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getLogisticsObject")
    public String getLogisticsObject(@RequestParam(name = "logisticObjectId") String logisticObjectId) throws IOException, KeyManagementException, NoSuchAlgorithmException {

        return oneRecordService.getLogisticsObject(logisticObjectId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/postLogisticsObject")
    public ResponseEntity<String> createLogisticsObject(@RequestBody LogisticsObject requestData) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        HttpStatusCode httpStatusCode = jsonLdMapperService.createLogisticsObject(requestData);

        return new ResponseEntity<>(httpStatusCode);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getWayBill")
    public ResponseEntity<LogisticsObject> getWayBill(@RequestParam(name = "wayBillId") String wayBillId)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        return new ResponseEntity<LogisticsObject>(jsonLdMapperService.getWayBill(wayBillId), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/updateLogisticsObject")
    public HttpStatusCode updateLogisticsObject(@RequestBody LogisticsObject requestData) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        HttpStatusCode httpStatusCode = jsonLdMapperService.updateLogisticsObject(requestData);

        return httpStatusCode;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEvent", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> postLogisticsEvent(@RequestParam(name = "wayBillId") String wayBillId,
             String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        jsonLdMapperService.createLogisticsEvent(wayBillId, logisticsEventId, logisticsEvent);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getAllLogisticsEvents")
    public ResponseEntity<List<LogisticsEvent>> getAllLogisticsEvents(@RequestParam(name = "wayBillId") String wayBillId)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        return new ResponseEntity<List<LogisticsEvent>>(jsonLdMapperService.getLogisticsAllEvent(wayBillId), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventUWS", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventUWS(@RequestParam(name = "wayBillId") String wayBillId,
                                                     String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventUWS(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventLIR", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventLIR(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventLIR(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventPOW", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventPOW(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventLPOW(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventALS", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventALS(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventALS(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventALE", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventALE(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventALE(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventOFB", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventOFB(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventOFB(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventWHU", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventWHU(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventWHU(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventEXC", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventEXC(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventEXC(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventEXR", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventEXR(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventEXR(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventWDO", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventWDO(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventWDO(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventONB", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventONB(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventONB(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventAUS", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventAUS(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventAUS(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventAUE", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventAUE(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventAUE(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/postLogisticsEventLPW", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> createLogisticsEventLPW(@RequestParam(name = "wayBillId") String wayBillId,
                                                          String logisticsEventId ,@RequestBody LogisticsEvent logisticsEvent)
            throws IOException, NoSuchAlgorithmException, KeyManagementException {

        oneRecordService.createLogisticsEventLPW(wayBillId, logisticsEventId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
