package com.thy.cargo.onerecord.hackathon.config.h2;

import java.util.List;

public interface LogisticService {

    // Save operation
    LogisticObject saveLogisticObject(LogisticObject logisticObject);

    // Read operation
    List<LogisticObject> fetchLogisticObject();
}
