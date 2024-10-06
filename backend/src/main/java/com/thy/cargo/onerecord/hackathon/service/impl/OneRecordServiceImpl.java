package com.thy.cargo.onerecord.hackathon.service.impl;

import com.thy.cargo.onerecord.hackathon.config.HttpClientFactory;
import com.thy.cargo.onerecord.hackathon.model.ExternalReference;
import com.thy.cargo.onerecord.hackathon.model.LogisticsObject;
import com.thy.cargo.onerecord.hackathon.security.TokenManager;
import com.thy.cargo.onerecord.hackathon.service.IOneRecordService;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.util.EntityUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

@Service
public class OneRecordServiceImpl implements IOneRecordService {

    private static final String ONE_RECORD_URL = "https://cargo-onerecord-cargo-onerecord-dev.apps.ocpnonprod.thy.com/logistics-objects/";
    public static final String CONTENT_TYPE_LD_JSON = "application/ld+json";

    public static final String ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3MTEwMjU1NDcsImlhdCI6MTcxMDE2MTU0NywianRpIjoiMmE4M2NjOTItNzI1My00NWQwLWE5NjUtODI3YjdhZTllMjcxIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLWNhcmdvLW9uZXJlY29yZC1kZXYuYXBwcy5vY3Bub25wcm9kLnRoeS5jb20vcmVhbG1zL2NvciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxNWNlNzRkMy1kN2JlLTRjZjYtODA3ZC1lN2I2M2MyMmM5ZGUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjb3ItY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjJiNjQ1ZjY2LWM5OTktNGI4OC1hNTUxLTBjMTVlMzJhM2JlMiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1jb3IiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiMmI2NDVmNjYtYzk5OS00Yjg4LWE1NTEtMGMxNWUzMmEzYmUyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImxvZ2lzdGljc19hZ2VudF91cmkiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naXN0aWNzLW9iamVjdHMvX2RhdGEtaG9sZGVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiY29yLXZpZXdlciIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.Vi9cHoSFtTe7cdD4J5qu1F6fJP5zIQN8CjEFy_rEG8nPsYfXEGPyqpaoaovFwmP5inlqwUJWwrf5a01w_F0nBvUwbnKVdKWG9QK1j5gitr4Ys-8_QJUEfkhzdhGxPH2vdC0oQZf3KWj_J6It6g0VX2q1W7-5M0s5kJEZ7r0vxpDbwUSpEJpYhoFIBvOGUIoNI9A1PFSmfJU9_Bp93meTCBia4opDRFtuNCa4R2zp1L1IVarJjTA8I20xZK51xMkv4VTa9kkn8WeqlGF0fna4IyoCxdRj-2-VXtjBeIz6hHk2M6uo1uUGe6kfdrlkCp_BKmFDom2XrBp-R6UvMvxt7Q";

    @Override
    public String getLogisticsObject(String logisticObjectId) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        String apiOutput;

        try {
            StringBuilder oneRecoderUrlBuilder = new StringBuilder(ONE_RECORD_URL).append(logisticObjectId);

            //Define a HttpGet request; You can choose between HttpPost, HttpDelete or HttpPut also.
            //Choice depends on type of method you will be invoking.
            HttpGet getRequest = new HttpGet(oneRecoderUrlBuilder.toString());

            HttpHeaders headers = new HttpHeaders();

            getRequest.addHeader("Authorization", TokenManager.getOauth2Token());
            //Set the API media type in http accept header
            // getRequest.addHeader("accept", CONTENT_TYPE_LD_JSON);

            //Send the request; It will immediately return the response in HttpResponse object
            HttpResponse response = HttpClientFactory.getHttpClient().execute(getRequest);

            //verify the valid error code first
            int statusCode = response.getStatusLine().getStatusCode();
            if (statusCode != 200) {
                throw new RuntimeException("Failed with HTTP error code : " + statusCode);
            }

            //Now pull back the response object
            HttpEntity httpEntity = response.getEntity();
            apiOutput = EntityUtils.toString(httpEntity);
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return apiOutput;
    }

    @Override
    public HttpStatusCode createLogisticsObject(String logisticsObject_or) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        HttpStatusCode httpStatusCode;
        try {

            HttpPost postRequest = new HttpPost(ONE_RECORD_URL);

            HttpHeaders headers = new HttpHeaders();

            //oauth2
            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());

            StringEntity input = new StringEntity(logisticsObject_or);
            //    input.setContentType(CONTENT_TYPE_LD_JSON);
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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public String getLogisticsAllEvent(String logisticObjectId) throws NoSuchAlgorithmException, KeyManagementException, IOException {
        String apiOutput;

        try {
            String logisticArgStr = logisticObjectId;
            StringBuilder oneRecoderUrlBuilder = new StringBuilder(ONE_RECORD_URL)
                    .append(logisticArgStr + "/logistics-events");
            HttpGet getRequest = new HttpGet(oneRecoderUrlBuilder.toString());

            //Define a HttpGet request; You can choose between HttpPost, HttpDelete or HttpPut also.
            //Choice depends on type of method you will be invoking.
            HttpHeaders headers = new HttpHeaders();

            getRequest.addHeader("Authorization", TokenManager.getOauth2Token());
            //Set the API media type in http accept header
            // getRequest.addHeader("accept", CONTENT_TYPE_LD_JSON);

            //Send the request; It will immediately return the response in HttpResponse object
            HttpResponse response = HttpClientFactory.getHttpClient().execute(getRequest);

            //Send the request; It will immediately return the response in HttpResponse object

            //verify the valid error code first
            int statusCode = response.getStatusLine().getStatusCode();
            if (statusCode != 200) {
                throw new RuntimeException("Failed with HTTP error code : " + statusCode);
            }

            //Now pull back the response object
            HttpEntity httpEntity = response.getEntity();
            apiOutput = EntityUtils.toString(httpEntity);
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return apiOutput;
    }

    @Override
    public HttpStatusCode createLogisticsEvent(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
               input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode updateLogisticsEvent(LogisticsObject requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
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

    @Override
    public ExternalReference createSLAAgreement(ExternalReference externalReference) {
        return externalReference;
    }

    @Override
    public HttpStatusCode createLogisticsEventUWS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventLIR(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventLPOW(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventALS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventALE(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventOFB(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventWHU(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventEXC(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventEXR(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventWDO(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }


    @Override
    public HttpStatusCode createLogisticsEventONB(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventAUS(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventAUE(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }

    @Override
    public HttpStatusCode createLogisticsEventLPW(String wayBillId, String requestBody) throws IOException, NoSuchAlgorithmException, KeyManagementException {
        HttpStatusCode httpStatusCode;
        try {
            final String postUrl = ONE_RECORD_URL + wayBillId + "/logistics-events";

            HttpPost postRequest = new HttpPost(postUrl);

            StringEntity input = new StringEntity(requestBody);
            input.setContentType(CONTENT_TYPE_LD_JSON);
            postRequest.setEntity(input);

            postRequest.addHeader("Authorization", TokenManager.getOauth2Token());


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
        } finally {
            HttpClientFactory.getHttpClient().getConnectionManager().shutdown();
        }

        return httpStatusCode;
    }
}
