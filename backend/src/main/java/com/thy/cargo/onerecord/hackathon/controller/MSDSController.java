package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.service.IMSDSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/msds")
public class MSDSController {

    @Autowired
    IMSDSService msdsService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/check")
    public ResponseEntity<CheckStatus> msdsCheck(@RequestParam(name = "pieceId") String pieceId) {

        return new ResponseEntity<>(msdsService.msdsCheck(pieceId), HttpStatus.OK);
    }
}
