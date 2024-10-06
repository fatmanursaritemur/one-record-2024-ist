package com.thy.cargo.onerecord.hackathon.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.thy.cargo.onerecord.hackathon.model.*;
import com.thy.cargo.onerecord.hackathon.model.server.*;
import com.thy.cargo.onerecord.hackathon.service.IJsonLdMapperService;
import com.thy.cargo.onerecord.hackathon.service.IOneRecordService;
import ioinformarics.oss.jackson.module.jsonld.JsonldModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

@Service
public class JsonLdMapperServiceImpl implements IJsonLdMapperService {

    private static final String LOGISTICS_OBJECT_PARAM = "<logistics_object_param>";
    private static final String LOGISTICS_EVENT_PARAM = "<logistics_event_param>";
    @Autowired
    IOneRecordService oneRecordService;
    private HashMap<String, LogisticsObject> cache = new HashMap<>();
    private static final String CARGO_PREDEFINITION = "https://onerecord.iata.org/ns/cargo#";
    private String EVENT_ID_STR = "http://localhost:8081/logistics-objects/" + LOGISTICS_OBJECT_PARAM + "/logistics-events/" +
            LOGISTICS_EVENT_PARAM;

    private static final String W3_CARGO_PREDEFINITON = "http://www.w3.org/2001/XMLSchema";

    @Override
    public LogisticsObject getWayBill(String wayBillId) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        LogisticsObject preObject = cache.get(wayBillId);
        if (preObject != null) {
            return preObject;
        }

            String logisticsObjectStr = oneRecordService.getLogisticsObject(wayBillId);
        JsonObject wayBillJsonObject = JsonParser.parseString(logisticsObjectStr)
                .getAsJsonObject();


        LogisticsObject logisticsObject = new LogisticsObject();
        logisticsObject.setWaybillPrefix(getJsonStringFromObject(wayBillJsonObject, "waybillPrefix"));
        logisticsObject.setWaybillnumber(getJsonStringFromObject(wayBillJsonObject, "waybillNumber"));
        //logisticsObject.setWaybillType(getJsonStringFromObject(wayBillJsonObject, "waybillType"));

        //Location arrivalLocation = getLocationFromJsonObject(wayBillJsonObject.getAsJsonObject("cargo:arrivalLocation"));
        //logisticsObject.setArrivalLocation(arrivalLocation);

        //Location departureLocation = getLocationFromJsonObject(wayBillJsonObject.getAsJsonObject("cargo:departureLocation"));
        //logisticsObject.setDepartureLocation(departureLocation);

        /*JsonArray involvedPartiesJsonArray = wayBillJsonObject.getAsJsonArray("cargo:involvedParties");

        if (involvedPartiesJsonArray != null) {
            List<Party> involvedParties = new ArrayList<>();

            involvedPartiesJsonArray.forEach(involvedPartyJsonObject -> {
                Party party = new Party();
                party.setRole(getJsonStringFromObject((JsonObject) involvedPartyJsonObject, "role"));
                Organization organization = new Organization();
                party.setOrganization(organization);
                JsonObject organizationJsonObject = ((JsonObject) involvedPartyJsonObject).getAsJsonObject("cargo:organization");

                Location basedAtLocation = getLocationFromJsonObject(organizationJsonObject.getAsJsonObject("cargo:basedAtLocation"));
                organization.setBasedAtLocation(basedAtLocation);

                organization.setName(getJsonStringFromObject(organizationJsonObject, "name"));

                JsonObject otherIdentifiersJsonObject = organizationJsonObject.getAsJsonObject("cargo:otherIdentifiers");

                OtherIdentifiers otherIdentifier = new OtherIdentifiers();

                otherIdentifier.setOtherIdentifierType(getJsonStringFromObject(otherIdentifiersJsonObject, "otherIdentifierType"));
                otherIdentifier.setOtherIdentifierType(getJsonStringFromObject(otherIdentifiersJsonObject, "textualValue"));
                organization.setOtherIdentifiers(otherIdentifier);
                involvedParties.add(party);
            });
            logisticsObject.setInvolvedParties(involvedParties);
        }*/

        //JsonObject shipmentJsonObject = wayBillJsonObject.getAsJsonObject("cargo:shipment");
        //JsonObject shipmentJsonObject = wayBillJsonObject.getAsJsonObject("shipment");
        String shipmentJsonUrl = wayBillJsonObject.getAsJsonPrimitive("shipment").getAsString();
        String shipmentId = shipmentJsonUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        String shipmentStr = oneRecordService.getLogisticsObject(shipmentId);
        JsonObject shipmentJsonObject = JsonParser.parseString(shipmentStr)
                .getAsJsonObject();
        if (shipmentJsonObject != null) {

            //JsonArray piecesJsonArray = shipmentJsonObject.getAsJsonArray("cargo:pieces");
            JsonArray piecesJsonArray = shipmentJsonObject.getAsJsonArray("pieces");

            List<String> pieceUrlList = new ArrayList<>();
            piecesJsonArray.forEach(pieceJsonObject -> {
                pieceUrlList.add(((JsonObject) pieceJsonObject).get("@id").getAsString());
            });

            Shipment shipment = new Shipment();
            List<Piece> pieces = getPieces(pieceUrlList);

            shipment.setPieces(pieces);
            logisticsObject.setShipment(shipment);
        }
        cache.put(wayBillId, logisticsObject);
        return logisticsObject;
    }

    @Override
    public HttpStatusCode createLogisticsObject(LogisticsObject logisticsObject) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        LogisticsObject_OR logisticsObject_or = new LogisticsObject_OR();
        logisticsObject_or.setId("http://localhost:8081/logistics-objects/" + logisticsObject.getWaybillPrefix() + logisticsObject.getWaybillnumber());
        //logisticsObject_or.setWaybillType(logisticsObject.getWaybillType());
        logisticsObject_or.setWaybillPrefix(logisticsObject.getWaybillPrefix());
        logisticsObject_or.setWaybillnumber(logisticsObject.getWaybillnumber());
        /*Location_OR arrivalLocation_or = new Location_OR();
        arrivalLocation_or.setCode(logisticsObject.getArrivalLocation().getCode());
        arrivalLocation_or.setLocationName(logisticsObject.getArrivalLocation().getLocationName());
        arrivalLocation_or.setLocationType(logisticsObject.getArrivalLocation().getLocationType());
        logisticsObject_or.setArrivalLocation(arrivalLocation_or);
        Location_OR departureLocation_or = new Location_OR();
        departureLocation_or.setCode(logisticsObject.getDepartureLocation().getCode());
        departureLocation_or.setLocationName(logisticsObject.getDepartureLocation().getLocationName());
        departureLocation_or.setLocationType(logisticsObject.getDepartureLocation().getLocationType());
        logisticsObject_or.setDepartureLocation(departureLocation_or);

        List<Party_OR> involvedParties = new ArrayList<>();
        for (int i = 0; i < logisticsObject.getInvolvedParties().size();i++) {
            Party_OR party_or = new Party_OR();
            party_or.setRole(logisticsObject.getInvolvedParties().get(i).getRole());
            Organization_OR organization_or = new Organization_OR();
            organization_or.setName(logisticsObject.getInvolvedParties().get(i).getOrganization().getName());
            Location_OR location_or = new Location_OR();
            location_or.setCode(logisticsObject.getInvolvedParties().get(i).getOrganization().getBasedAtLocation().getCode());
            location_or.setLocationName(logisticsObject.getInvolvedParties().get(i).getOrganization().getBasedAtLocation().getLocationName());
            location_or.setLocationType(logisticsObject.getInvolvedParties().get(i).getOrganization().getBasedAtLocation().getLocationType());
            organization_or.setBasedAtLocation(location_or);
            OtherIdentifiers_OR otherIdentifiers_or = new OtherIdentifiers_OR();
            otherIdentifiers_or.setOtherIdentifierType(logisticsObject.getInvolvedParties().get(i).getOrganization().getOtherIdentifiers().getOtherIdentifierType());
            otherIdentifiers_or.setTextualValue(logisticsObject.getInvolvedParties().get(i).getOrganization().getOtherIdentifiers().getTextualValue());
            organization_or.setOtherIdentifiers(otherIdentifiers_or);
            party_or.setOrganization(organization_or);
            involvedParties.add(party_or);
        }
        logisticsObject_or.setInvolvedParties(involvedParties);
*/
        Shipment_OR shipment_or = new Shipment_OR();
        List<Piece_OR> pieces = new ArrayList<>();
        List<HttpStatusCode> httpStatusCodes = createAllPieces(logisticsObject.getShipment().getPieces());
        for (int i = 0; i < logisticsObject.getShipment().getPieces().size(); i++) {
            Piece_OR piece_or = new Piece_OR();
            if (httpStatusCodes.get(i) == HttpStatus.CREATED) {
                piece_or.setId("http://localhost:8081/logistics-objects/" + logisticsObject.getShipment().getPieces().get(i).getPieceId());
                pieces.add(piece_or);
            } else {
                System.err.println("Not created: " + logisticsObject.getShipment().getPieces().get(i).getPieceId());
            }
        }
        shipment_or.setPieces(pieces);
        logisticsObject_or.setShipment(shipment_or);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JsonldModule());
        String logisticsObject_orJsonLd = objectMapper.writeValueAsString(logisticsObject_or);
        return oneRecordService.createLogisticsObject(logisticsObject_orJsonLd);
    }

    @Override
    public HttpStatusCode updateLogisticsObject(LogisticsObject requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
/*
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            HttpResponse response = HttpClientFactory.getHttpClient().execute(postRequest);

            httpStatusCode = HttpStatusCode.valueOf(response.getStatusLine().getStatusCode());

            if (response.getStatusLine().getStatusCode() != 201) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + response.getStatusLine().getStatusCode());
            }

            BufferedReader br = new BufferedReader(
                    new InputStreamReader((response.getEntity().getContent())));

            String output;
            System.out.println("Output from Server .... \n");
            while ((output = br.readLine()) != null) {
                System.out.println(output);
            }
        }
        finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }
*/
        return HttpStatus.OK;
    }

    private List<HttpStatusCode> createAllPieces(List<Piece> pieces) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        List<HttpStatusCode> httpStatusCodes = new ArrayList<>();

        for (int i = 0; i < pieces.size(); i++) {
            Piece_OR piece_or = new Piece_OR();
            piece_or.setId("http://localhost:8081/logistics-objects/" + pieces.get(i).getPieceId());
            piece_or.setGoodsDescription(pieces.get(i).getGoodsDescription());
            piece_or.setGrossWeight(pieces.get(i).getGrossWeight());
            piece_or.setSpecialHandlingCodes(pieces.get(i).getSpecialHandlingCodes());
            /*Dimensions_OR dimensions_or = new Dimensions_OR();
            dimensions_or.setHeight(pieces.get(i).getDimensions().getHeight());
            dimensions_or.setLenght(pieces.get(i).getDimensions().getLenght());
            dimensions_or.setVolume(pieces.get(i).getDimensions().getVolume());
            dimensions_or.setWidth(pieces.get(i).getDimensions().getWidth());
            piece_or.setDimensions(dimensions_or);
            */
            List<LogisticsAction_OR> involvedInActions_or = new ArrayList<>();

            for (int k = 0; k < pieces.get(i).getInvolvedInActions().size(); k++) {

                LogisticsAction_OR logisticsAction_or = new LogisticsAction_OR();
                LogicticsActivity_OR servedActivity = new LogicticsActivity_OR();
                /*
                Location_OR arrivalLocation_or = new Location_OR();

                arrivalLocation_or.setCode(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getArrivalLocation().getCode());
                arrivalLocation_or.setLocationName(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getArrivalLocation().getLocationName());
                arrivalLocation_or.setLocationType(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getArrivalLocation().getLocationType());
                Location_OR departureLocation_or = new Location_OR();
                departureLocation_or.setCode(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getDepartureLocation().getCode());
                departureLocation_or.setLocationName(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getDepartureLocation().getLocationName());
                departureLocation_or.setLocationType(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getDepartureLocation().getLocationType());
                servedActivity.setArrivalLocation(arrivalLocation_or);
                servedActivity.setDepartureLocation(departureLocation_or);
                servedActivity.setModeQualifier(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getModeQualifier());
                 */
                servedActivity.setTransportIdentifier(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getTransportIdentifier());
                List<MovementTime_OR> movementTimes_or = new ArrayList<>();
                for (int j = 0; j < pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getMovementTimes().size(); j++) {
                    MovementTime_OR movementTime_or = new MovementTime_OR();
                    movementTime_or.setMovementTimeType(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getMovementTimes().get(j).getMovementTimeType());
                    MovementTimeStamp_OR movementTimeStamp_or = new MovementTimeStamp_OR();
                    movementTimeStamp_or.setValue(pieces.get(i).getInvolvedInActions().get(k).getServedActivity().getMovementTimes().get(j).getMovementTimeStamp());
                    movementTime_or.setMovementTimeStamp(movementTimeStamp_or);
                    movementTimes_or.add(movementTime_or);
                }
                servedActivity.setMovementTimes(movementTimes_or);
                logisticsAction_or.setServedActivity(servedActivity);
                involvedInActions_or.add(logisticsAction_or);
            }
            piece_or.setInvolvedInActions(involvedInActions_or);

            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JsonldModule());
            String piece_orJsonLd = objectMapper.writeValueAsString(piece_or);
            HttpStatusCode httpStatusCode = oneRecordService.createLogisticsObject(piece_orJsonLd);
            httpStatusCodes.add(httpStatusCode);

        }
        return httpStatusCodes;
    }

    @Override
    public HttpStatusCode createLogisticsEvent(String wayBillId, String logisticsEventId, LogisticsEvent logisticsEvent) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JsonldModule());

        LogisticsEvent_OR logisticsEventOr = new LogisticsEvent_OR();
        String logisticsEventIdUrl = EVENT_ID_STR.replaceAll(LOGISTICS_OBJECT_PARAM, wayBillId).replaceAll(LOGISTICS_EVENT_PARAM, logisticsEventId);

        logisticsEventOr.setId(logisticsEventIdUrl);
        logisticsEventOr.setEventFor(logisticsEvent.getEventFor());
        logisticsEventOr.setEventTimeType(logisticsEvent.getEventTimeType());
        logisticsEventOr.setEventName(logisticsEvent.getEventName());

        EventCode_OR eventCodeOr = new EventCode_OR();
        eventCodeOr.setCode(logisticsEvent.getEventCode());
        eventCodeOr.setCodeListName(logisticsEvent.getCodeListName());
        logisticsEventOr.setEventCode(eventCodeOr);
        //logisticsEventOr.setEventCode(logisticsEvent.getEventCode());
        DateTime_OR eventDateOr = new DateTime_OR();
        eventDateOr.setValue(logisticsEvent.getEventDate());
        logisticsEventOr.setEventDate(eventDateOr);

        String logisticsObject_orJsonLd = objectMapper.writeValueAsString(logisticsEventOr);
        System.err.println(logisticsObject_orJsonLd.toString());

        return oneRecordService.createLogisticsEvent(logisticsEventId, logisticsObject_orJsonLd);
    }

    @Override
    public List<LogisticsEvent> getLogisticsAllEvent(String wayBillId) throws NoSuchAlgorithmException, IOException, KeyManagementException {

        List<LogisticsEvent> logisticsEventList = new ArrayList<>();

        String logisticsEventsStr = oneRecordService.getLogisticsAllEvent(wayBillId);
        JsonObject rootJsonObject = JsonParser.parseString(logisticsEventsStr).getAsJsonObject();

        JsonArray logisticsEventsJsonArray = rootJsonObject.getAsJsonArray("@graph");

        logisticsEventsJsonArray.forEach(logisticsEventJsonObj -> {
           try {
               LogisticsEvent logisticsEvent = new LogisticsEvent();
               logisticsEvent.setPieceId(wayBillId);

               JsonObject eventCodeJsonObject = ((JsonObject) logisticsEventJsonObj).getAsJsonObject(CARGO_PREDEFINITION + "eventCode");
            /*   if(eventCodeJsonObject != null) {
                   if(eventCodeJsonObject.get(CARGO_PREDEFINITION + "code").getAsString() != null) {
                       logisticsEvent.setEventCode(eventCodeJsonObject.get(CARGO_PREDEFINITION + "code").getAsString());
                   }

                   if(eventCodeJsonObject.get(CARGO_PREDEFINITION + "codeListName").getAsString() != null) {
                       logisticsEvent.setCodeListName(eventCodeJsonObject.get(CARGO_PREDEFINITION + "codeListName").getAsString());

                   }
               } */

               String eventCode = getJsonStringFromObjForEvents((JsonObject) logisticsEventJsonObj, "code");
               if(eventCode != null) {
                   logisticsEvent.setEventCode(eventCode);
               }

               String codeListName = getJsonStringFromObjForEvents((JsonObject) logisticsEventJsonObj, "codeListName");
               if(codeListName != null) {
                   logisticsEvent.setCodeListName(codeListName);
               }

               JsonObject eventDateJsonObject = ((JsonObject) logisticsEventJsonObj).getAsJsonObject("eventDate");
               if (eventDateJsonObject != null) {
                   logisticsEvent.setEventDate(eventDateJsonObject.get("@value").getAsString());
               }

               String eventName = getJsonStringFromObjForEvents((JsonObject) logisticsEventJsonObj, "eventName");
               if(eventName != null) {
                   logisticsEvent.setEventName(eventName);
               }

               String eventTimeType = getJsonStringFromObjForEvents((JsonObject) logisticsEventJsonObj, "eventTimeType");
               if(eventTimeType != null) {
                   logisticsEvent.setEventTimeType(eventTimeType);
               }

               JsonObject createDateJsonObject = ((JsonObject) logisticsEventJsonObj).getAsJsonObject(W3_CARGO_PREDEFINITON + "creationDate");
               if(createDateJsonObject != null) {
                   logisticsEvent.setCreationDate(createDateJsonObject.get("@value").getAsString());
               }

               JsonObject linkedObjectJsonObject = ((JsonObject) logisticsEventJsonObj).getAsJsonObject(CARGO_PREDEFINITION + "creationDate");

               if (linkedObjectJsonObject != null && linkedObjectJsonObject.get("@id") != null) {
                   logisticsEvent.setLinkedObject(linkedObjectJsonObject.get("@id").getAsString());
               }

               //logisticsEvent.setLocation(getLocationFromJsonObject(((JsonObject) logisticsEventJsonObj).getAsJsonObject("cargo:arrivalLocation"));
               logisticsEventList.add(logisticsEvent);
           }catch (Exception e) {}
        });

        return logisticsEventList;
    }

   /* private void setEventValues(JsonElement logisticsEventJsonObj, String key, LogisticsEvent logisticsEvent) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        //eventFor
        String eventForJsonUrl = getJsonStringFromObject(((JsonObject) logisticsEventJsonObj).getAsJsonObject(key), "@id");
        String eventForId = eventForJsonUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        String eventStr = oneRecordService.getLogisticsObject(eventForId);
        JsonObject evetForJsonObject = JsonParser.parseString(eventStr)
                .getAsJsonObject();

        if (evetForJsonObject != null) {

            String code = getJsonStringFromObject(evetForJsonObject, "code");
            if(code != null) {
                logisticsEvent.setEventCode(code);
            }

            String codeListName = getJsonStringFromObject(evetForJsonObject, "codeListName");
            if(codeListName != null) {
                logisticsEvent.setCodeListName(codeListName);
            }
        }
    }*/

    private List<Piece> getPieces(List<String> pieceUrlList) {
        List<Piece> pieces = new ArrayList<>();

        pieceUrlList.forEach(pieceUrl -> {

            try {
                String pieceId = pieceUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
                String pieceObjectStr = oneRecordService.getLogisticsObject(pieceId);
                JsonObject pieceJsonObject = JsonParser.parseString(pieceObjectStr)
                        .getAsJsonObject();

                JsonArray pieceJSonArray = pieceJsonObject.getAsJsonArray("@graph");
                JsonObject pieceJSonArrayFirst = (JsonObject) pieceJSonArray.get(0);
                JsonObject pieceJSonArraySecond = (JsonObject) pieceJSonArray.get(1);

                Piece piece = new Piece();
                piece.setPieceId(pieceId);
                piece.setGoodsDescription(getJsonStringFromObject(pieceJSonArraySecond, "goodsDescription"));
                piece.setGrossWeight(getJsonStringFromObject(pieceJSonArraySecond, "grossWeight"));

                JsonArray involvedPartiesJsonArray = pieceJSonArraySecond.getAsJsonArray("involvedParties");

                List<String> involvedPartiesUrlList = new ArrayList<>();
                involvedPartiesJsonArray.forEach(element -> {
                    involvedPartiesUrlList.add(((JsonObject) element).get("@id").getAsString());
                });

                Consignee consignee = getConsignee(involvedPartiesUrlList.get(0));
                Shipper shipper = getShipper(involvedPartiesUrlList.get(1));

                piece.setShipper(shipper);
                piece.setConsignee(consignee);

                //List<Piece> pieces = getShipper(pieceUrlList);

                //   shipment.setPieces(pieces);
                //piece.setSpecialHandlingCodes(getJsonStringFromObject(pieceJsonObject, "specialHandlingCodes"));

               /* JsonObject dimensionsJsonObject = pieceJsonObject.getAsJsonObject("cargo:dimensions");

                Dimensions dimensions = new Dimensions();
                dimensions.setHeight(getJsonStringFromObject(dimensionsJsonObject, "height"));
                dimensions.setLenght(getJsonStringFromObject(dimensionsJsonObject, "lenght"));
                dimensions.setWidth(getJsonStringFromObject(dimensionsJsonObject, "volume"));
                dimensions.setVolume(getJsonStringFromObject(dimensionsJsonObject, "width"));

                piece.setDimensions(dimensions);*/

                String productJsonUrl = pieceJSonArrayFirst.getAsJsonPrimitive("Product").getAsString();
                String productId = productJsonUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
                String productStr = oneRecordService.getLogisticsObject(productId);
                JsonObject productJsonObject = JsonParser.parseString(productStr)
                        .getAsJsonObject();

                JsonArray productJSonArray = productJsonObject.getAsJsonArray("@graph");
                JsonObject productSonArrayFirst = (JsonObject) productJSonArray.get(0);
                JsonObject productJSonArraySecond = (JsonObject) productJSonArray.get(1);
                Product product = new Product();

                HsCode hsCode = new HsCode();
                hsCode.setCode(getJsonStringFromObject(productSonArrayFirst, "code"));
                hsCode.setCodeListName(getJsonStringFromObject(productSonArrayFirst, "codeListName"));

                product.setHsCode(hsCode);
                product.setUnNumber(getJsonStringFromObject(productJSonArraySecond, "unNumber"));
                //todo: arrayin 2. elemanında gelmeyebilir, bilmiyoruz
                JsonObject describedObjects = productJSonArraySecond.getAsJsonObject("describedObjects");
                product.setSensor(getSensor(getJsonStringFromObject(describedObjects, "@id")));
                //product.setSensor(getSensor(getJsonStringFromObject(productJSonArraySecond, "describedObjects")));
                piece.setProduct(product);

                /*JsonObject involvedInActionsJsonObject = pieceJsonObject.getAsJsonObject("cargo:involvedInActions");

                if (involvedInActionsJsonObject != null) {

                    JsonObject servedActivityJsonObject = involvedInActionsJsonObject.getAsJsonObject("cargo:servedActivity");
                    JsonArray movementTimesJsonArray = servedActivityJsonObject.getAsJsonArray("cargo:movementTimes");


                    LogisticsAction involvedAction = new LogisticsAction();
                    LogicticsActivity servedActivity = new LogicticsActivity();
                    involvedAction.setServedActivity(servedActivity);

                    servedActivity.setModeQualifier(getJsonStringFromObject(servedActivityJsonObject, "modeQualifier"));
                    String transportIdentifier = getJsonStringFromObject(servedActivityJsonObject, "transportIdentifier");


                    Location arrivalLocationSA = getLocationFromJsonObject(servedActivityJsonObject.getAsJsonObject("cargo:arrivalLocation"));
                    servedActivity.setArrivalLocation(arrivalLocationSA);

                    Location departureLocationSA = getLocationFromJsonObject(servedActivityJsonObject.getAsJsonObject("cargo:arrivalLocation"));
                    servedActivity.setDepartureLocation(departureLocationSA);

                    servedActivity.setShippingMarks(getJsonStringFromObject(servedActivityJsonObject, "shippingMarks"));

                    List<MovementTime> movementTimes = new ArrayList<>();

                    movementTimesJsonArray.forEach(movementTimeJsonObject -> {
                        MovementTime movementTime = new MovementTime();

                        String movementTimeType = getJsonStringFromObject((JsonObject) movementTimeJsonObject, "movementTimeType");
                        movementTime.setMovementTimeType(movementTimeType);

                        if (Objects.equals(MovementTimeEnum.Actual.toString(), movementTimeType)) {
                            JsonObject movementTimeStampJsonObj = ((JsonObject) movementTimeJsonObject).getAsJsonObject("cargo:movementTimeStamp");
                            String timeString = movementTimeStampJsonObj.get("@value").getAsString();

                            try {
                                Date date = DateUtil.toDate(timeString, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                                String dateStr = DateUtil.toString(date, "dd MMM yyyy hh:mm");
                                String finalTransportIdentifier = transportIdentifier + " " + dateStr;
                                servedActivity.setTransportIdentifier(finalTransportIdentifier);
                            } catch (ParseException e) {
                                throw new RuntimeException(e);
                            }
                        }

                        movementTime.setDirection(getJsonStringFromObject((JsonObject) movementTimeJsonObject, "direction"));

                        JsonObject movementTimeStampJsonObject = ((JsonObject) movementTimeJsonObject).getAsJsonObject("cargo:movementTimeStamp");

                        movementTime.setMovementTimeStamp(movementTimeStampJsonObject.get("@value").getAsString());
                        movementTimes.add(movementTime);

                    });
                    servedActivity.setMovementTimes(movementTimes);

                    involvedAction.setServedActivity(servedActivity);
                    piece.setInvolvedInActions(Arrays.asList(involvedAction));
                }*/


                pieces.add(piece);
            } catch (IOException | NoSuchAlgorithmException | KeyManagementException e) {
                throw new RuntimeException(e);
            }
        });
        return pieces;
    }

    public Sensor getSensor(String describedObjectsUrl) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        // todo: cevap gelince sil
        describedObjectsUrl = "http://0.0.0.0:8080/logistics-objects/IotGeo";
        String iotGeoId = describedObjectsUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        // todo: cevap gelince aç
        //String iotGeoObjectStr = oneRecordService.getLogisticsObject(iotGeoId);

        String iotGeoObjectStr = "{\n" +
                "    \"@context\": {\n" +
                "        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n" +
                "    },\n" +
                "    \"cargo:Sensor\": {\n" +
                "        \"@id\":\"http://0.0.0.0:8080/logistics-objects/SensorGeo\",\n" +
                "        \"@type\": \"cargo:IotDevice\",\n" +
                "        \"cargo:name\":\"GeoIot\",\n" +
                "        \"cargo:attachedToObject\":{\n" +
                "            \"@id\":\"http://0.0.0.0:8080/logistics-objects/SensorGeo\"}\n" +
                "    }\n" +
                "}";
        JsonObject iotGeoJsonObject = JsonParser.parseString(iotGeoObjectStr).getAsJsonObject();
        JsonObject cargoSensorJsonObject = iotGeoJsonObject.getAsJsonObject("cargo:Sensor");
        JsonObject attachedJsonObject = cargoSensorJsonObject.getAsJsonObject("cargo:attachedToObject");
        String attachedUrl = getJsonStringFromObject(attachedJsonObject, "@id");

        String sensorId = attachedUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        // todo: cevap gelince aç
        //String sensorObjectStr = oneRecordService.getLogisticsObject(sensorId);
        String sensorObjectStr = "{\n" +
                "    \"@context\": {\n" +
                "        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n" +
                "    },\n" +
                "    \"cargo:Sensor\": {\n" +
                "        \"@id\":\"http://0.0.0.0:8080/logistics-objects/SensorGeo\",\n" +
                "        \"@type\": \"cargo:Sensor\",\n" +
                "        \"cargo:description\":\"Lat36.43432,Lng42.748375\",\n" +
                "        \"cargo:sensorType\":\"GEOLOCATION\",\n" +
                "        \"cargo:name\":\"GeoSensor\"\n" +
                "    }\n" +
                "}";
        JsonObject sensorJsonObject = JsonParser.parseString(sensorObjectStr).getAsJsonObject();
        cargoSensorJsonObject = sensorJsonObject.getAsJsonObject("cargo:Sensor");

        Sensor sensor = new Sensor();
        sensor.setName(getJsonStringFromObject(cargoSensorJsonObject, "cargo:name"));
        sensor.setDescription(getJsonStringFromObject(cargoSensorJsonObject, "cargo:description"));
        sensor.setSensorType(getJsonStringFromObject(cargoSensorJsonObject, "cargo:sensorType"));

        return sensor;
    }

    private Shipper getShipper(String shipperUrl) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        String shipperId = shipperUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        String shipperObjectStr = oneRecordService.getLogisticsObject(shipperId);
        JsonObject shipperJsonObject = JsonParser.parseString(shipperObjectStr)
                .getAsJsonObject();

        JsonArray shipperJSonArray = shipperJsonObject.getAsJsonArray("@graph");
        JsonObject shipperJSonArrayFirst = (JsonObject) shipperJSonArray.get(0);
        JsonObject shipperJSonArraySecond = (JsonObject) shipperJSonArray.get(1);

        Shipper shipper = new Shipper();
        shipper.setTextualValue(getJsonStringFromObject(shipperJSonArrayFirst, "textualValue"));
        shipper.setName(getJsonStringFromObject(shipperJSonArraySecond, "name"));
        shipper.setBasedAtLocation(getLocation(getJsonStringFromObject(shipperJSonArraySecond, "basedAtLocation")));
        return shipper;
    }

    private Consignee getConsignee(String consigneeUrl) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        String consigneeId = consigneeUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        String consigneeObjectStr = oneRecordService.getLogisticsObject(consigneeId);
        JsonObject consigneeJsonObject = JsonParser.parseString(consigneeObjectStr)
                .getAsJsonObject();

        JsonArray consigneeJSonArray = consigneeJsonObject.getAsJsonArray("@graph");
        JsonObject consigneeJSonArrayFirst = (JsonObject) consigneeJSonArray.get(0);
        JsonObject consigneeJSonArraySecond = (JsonObject) consigneeJSonArray.get(1);

        Consignee consignee = new Consignee();
        consignee.setTextualValue(getJsonStringFromObject(consigneeJSonArrayFirst, "textualValue"));
        consignee.setName(getJsonStringFromObject(consigneeJSonArraySecond, "name"));
        consignee.setBasedAtLocation(getLocation(getJsonStringFromObject(consigneeJSonArraySecond, "basedAtLocation")));
        return consignee;
    }

    private Location getLocation(String basedAtLocationUrl) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        String locationId = basedAtLocationUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        //todo: model tutarsız, o yüzden büyük harf ile request atılacak. Location-SZX szx
      /*
        String[] split = locationId.split("-");
        String upperCase = split[1].toUpperCase(Locale.ROOT);

       */
        String locationObjectStr = oneRecordService.getLogisticsObject(locationId);
        JsonObject locationJsonObject = JsonParser.parseString(locationObjectStr)
                .getAsJsonObject();

        Location location = new Location();
        location.setCode(getJsonStringFromObject(locationJsonObject, "code"));
        location.setLocationName(getJsonStringFromObject(locationJsonObject, "locationName"));

        //  Address address = getAddress(locationJsonObject.get("@id").getAsString());
        //location.setAddress(address);
        location.setCityCode(getJsonStringFromObject(locationJsonObject, "cityCode"));
        location.setPostalCode(getJsonStringFromObject(locationJsonObject, "postalCode"));

        //JsonArray locationJSonArray = locationJsonObject.getAsJsonArray("@graph");

       /* locationJSonArray.forEach(loc -> {
            String code = getJsonStringFromObject((JsonObject) loc, "code");
            if (code != null) {
                location.setCode(code);
            }

            String locationName = getJsonStringFromObject((JsonObject) loc, "locationName");
            if (locationName != null) {
                location.setLocationName(locationName);
            }

            String cityCode = getJsonStringFromObject((JsonObject) loc, "cityCode");
            if (cityCode != null) {
                location.setCityCode(cityCode);
            }

            String postalCode = getJsonStringFromObject((JsonObject) loc, "postalCode");
            if (postalCode != null) {
                location.setPostalCode(postalCode);
            }

        });*/
        return location;
    }

    private Address getAddress(String addressUrl) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        String addressId = addressUrl.replaceAll("http://0.0.0.0:8080/logistics-objects/", "");
        String addressObjectStr = oneRecordService.getLogisticsObject(addressId);
        JsonObject addressJsonObject = JsonParser.parseString(addressObjectStr)
                .getAsJsonObject();

        Address address = new Address();
        address.setCityCode(getJsonStringFromObject(addressJsonObject, "cityCode"));
        address.setPostalCode(getJsonStringFromObject(addressJsonObject, "postalCode"));

        return address;
    }

    Location getLocationFromJsonObject(JsonObject jsonObject) {
        Location arrivalLocation = null;
        if (jsonObject != null) {
            arrivalLocation = new Location();

            arrivalLocation.setLocationName(getJsonStringFromObject(jsonObject, "locationName"));
            arrivalLocation.setCode(getJsonStringFromObject(jsonObject, "code"));
            arrivalLocation.setLocationType(getJsonStringFromObject(jsonObject, "locationType"));
        }

        return arrivalLocation;
    }

    String getJsonStringFromObject(JsonObject jsonObject, String key) {
        String result = null;

        if (jsonObject != null) {
            //JsonElement jsonElement = jsonObject.get("cargo:" + key);
            JsonElement jsonElement = jsonObject.get(key);
            if (jsonElement != null) {
                result = jsonElement.getAsString();
            }
        }
        return result;
    }

    String getJsonStringFromObjForEvents(JsonObject jsonObject, String key) {
        String result = null;

        String memberName = key;

        switch (key) {
            case "creationDate":
                memberName = W3_CARGO_PREDEFINITON + key;
                break;
            case "eventDate":
                memberName = W3_CARGO_PREDEFINITON + key;
                break;
        }

      //  JsonElement jsonElement = jsonObject.get(CARGO_PREDEFINITION + key);

        JsonElement jsonElement = jsonObject.get(memberName);
        if (jsonElement != null) {
            result = jsonElement.getAsString();
        }

        return result;
    }
}
