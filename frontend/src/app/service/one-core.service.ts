import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_URI} from "./logisticsEventService";

@Injectable({
  providedIn: 'root'
})
export class OneCoreService {

   // @ts-ignore
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {
  }

  sendSLAgreement(body: any): Observable<any> {
    return this.httpClient.post<any>(BASE_URI + "/one-core/sla-agreement", body, this.httpOptions);
  }

}
