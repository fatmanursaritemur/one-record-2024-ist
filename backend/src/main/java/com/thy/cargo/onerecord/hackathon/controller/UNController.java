package com.thy.cargo.onerecord.hackathon.controller;

import com.thy.cargo.onerecord.hackathon.model.CheckStatus;
import com.thy.cargo.onerecord.hackathon.service.IUNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/un")
public class UNController {

    @Autowired
    IUNService unService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/check")
    public ResponseEntity<CheckStatus> unNumberCheck(@RequestParam(name = "unNumber") String unNumber){

        return new ResponseEntity<>(unService.unNumberCheck(unNumber), HttpStatus.OK);
    }
}
