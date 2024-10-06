package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import com.thy.cargo.onerecord.hackathon.service.ICustomsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping(path = "/customs")
public class CustomsController {

    @Autowired
    ICustomsService customsService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pre-filing")
    public ResponseEntity<CheckStatus> customsPreFiling(@RequestBody LogisticsObject requestData) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        return new ResponseEntity<>(customsService.customsPreFiling(requestData.getShipment().getPieces().get(0).getPieceId(), null), HttpStatus.OK);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/dg-declaration")
    public ResponseEntity<CheckStatus> dgDeclaration() {
        return new ResponseEntity<>(customsService.customsDgDeclaration(), HttpStatus.OK);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/check")
    public ResponseEntity<CheckStatus> customsCheck(@RequestParam(name = "pieceId") String pieceId,
                                               @RequestParam(name = "waybillId") String waybillId
    ) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        return new ResponseEntity<>(customsService.customsPreFiling(pieceId, waybillId), HttpStatus.OK);
    }
    
}

