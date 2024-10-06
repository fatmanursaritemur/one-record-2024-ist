package com.thy.cargo.onerecord.hackathon.model.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.thy.cargo.onerecord.hackathon.model.LogicticsActivity;
import ioinformarics.oss.jackson.module.jsonld.annotation.JsonldType;

@JsonldType("cargo:Loading")
public class LogisticsAction_OR {

    @JsonProperty("cargo:servedActivity")
    private LogicticsActivity_OR servedActivity;

    public LogicticsActivity_OR getServedActivity() {
        return servedActivity;
    }

    public void setServedActivity(LogicticsActivity_OR servedActivity) {
        this.servedActivity = servedActivity;
    }
}
