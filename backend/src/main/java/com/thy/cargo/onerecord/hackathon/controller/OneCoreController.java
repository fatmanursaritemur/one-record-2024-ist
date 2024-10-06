package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.service.IOneCoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
@RequestMapping("/one-core")
public class OneCoreController {

    @Autowired
    IOneCoreService iOneCoreService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/sla-agreement")
    public ResponseEntity<ExternalReference> sendSlaAgreement(File agreement){
        return new ResponseEntity<>(iOneCoreService.sendSlaAgreement(agreement), HttpStatus.OK);
    }
}
