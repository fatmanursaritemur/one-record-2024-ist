package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.Sensor;
import com.thy.cargo.onerecord.hackathon.model.response.IOTResponseModel;
import com.thy.cargo.onerecord.hackathon.service.IIOTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/iot")
public class IOTController {

    @Autowired
    IIOTService iotService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getInformation")
    public ResponseEntity<Sensor> getIOTInformation(@RequestParam(name = "iotId") String iotId){

        return new ResponseEntity<>(iotService.getIOTInformation(iotId), HttpStatus.OK);
    }
}
