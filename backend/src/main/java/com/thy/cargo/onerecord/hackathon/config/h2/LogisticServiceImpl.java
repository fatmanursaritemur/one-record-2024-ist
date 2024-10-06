package com.thy.cargo.onerecord.hackathon.config.h2;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Annotation
@Service

public class LogisticServiceImpl implements LogisticService{

    @Autowired
    private ILogisticObjectRepository logisticObjectRepository;

    // Save operation
    @Override
    public LogisticObject saveLogisticObject(LogisticObject logisticObject)
    {
        return logisticObjectRepository.save(logisticObject);
    }

    // Read operation
    @Override public List<LogisticObject> fetchLogisticObject()
    {
        return (List<LogisticObject>)
                logisticObjectRepository.findAll();
    }
}
