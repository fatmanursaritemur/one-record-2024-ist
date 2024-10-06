package com.thy.cargo.onerecord.hackathon.config.h2;

import java.util.List;
// Importing required classes
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// Annotation
@RestController
public class LogisticObjectController {

    @Autowired
    private LogisticService logisticService;

    // Save operation
    @PostMapping("/saveLogisticObject")
    public LogisticObject saveLogisticObject(@RequestBody LogisticObject logisticObject)
    {
        return logisticService.saveLogisticObject(logisticObject);
    }

    // Read operation
    @GetMapping("/logisticObject")
    public List<LogisticObject> fetchLogisticObject()
    {
        return logisticService.fetchLogisticObject();
    }
}
