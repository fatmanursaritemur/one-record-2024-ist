package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.model.Sensor;
import com.thy.cargo.onerecord.hackathon.service.IIOTService;
import org.springframework.stereotype.Service;

@Service
public class IOTServiceImpl implements IIOTService {

    /**
     * This data gets from GHA Onerecord Server
     * <p>
     * {
     * "@context": {
     * "cargo": "https://onerecord.iata.org/ns/cargo#"
     * },
     * "cargo:Sensor": {
     * "@id":"http://0.0.0.0:8080/logistics-objects/SensorGeo",
     * "@type": "cargo:Sensor",
     * "cargo:description":"Lat36.43432,Lng42.748375",
     * "cargo:sensorType":"GEOLOCATION",
     * "cargo:name":"GeoSensor"
     * }
     * }
     */
    @Override
    public Sensor getIOTInformation(String iotId) {
        Sensor sensor = new Sensor();
        sensor.setName("GeoSensor");
        sensor.setSensorType("GEOLOCATION");
        sensor.setDescription("Lat36.43432,Lng42.748375");
        return sensor;
    }
}