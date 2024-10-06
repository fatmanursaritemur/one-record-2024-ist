import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooleanStatus, Status, WidectPiece} from "../model/WidectPiece";

export const BASE_URI: string = 'http://localhost:8080/onerecord';
export const Custom_URI: string = 'http://localhost:8080/customs';

export const MSDS_URI: string = 'http://localhost:8080/msds';

export const UN_URI: string = 'http://localhost:8080/un';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private httpClient: HttpClient) {
  }

  getAirports(): Observable<any> {
    return this.httpClient.get<any>(BASE_URI + '/getAirports', httpOptions);
  }

  getWayBill(objectID: any): Observable<any> {
    console.log('ggg');
    return this.httpClient.get<any>(BASE_URI + '/getWayBill' + '?wayBillId=' + objectID, httpOptions);
  }

  getAllLogisticsEvents(objectID: any): Observable<any> {
    return this.httpClient.get<any>(BASE_URI + '/getAllLogisticsEvents' + '?wayBillId=' + objectID, httpOptions);
  }

  postLogisticsEvent(data: any): Observable<any> {
    // return this.httpClient.post<any>(BASE_URI + '/postLogisticsEvent' + '?wayBillId=' + data.awb + '&logisticsEventId=' + data.pieceId, data.payload, httpOptions);
    return this.httpClient.post<any>(BASE_URI + '/postLogisticsEeevent' + '?wayBillId=' + data.awb + '&logisticsEventId=' + data.pieceId, data.payload, httpOptions);

  }


  postLogisticsObject(data: any): Observable<any> {
    return this.httpClient.post<any>(BASE_URI + '/postLogisticsObject', data, httpOptions);
  }

  getProductsData() {
    return [
      {
        pieceId: '1000',
        pieceDesc: 'f230fh0g3',
        hsCode: 'Product Description',
        awb: 11,
        msds: Status.NOT_VERIFIED,
        customsCheck: Status.VERIFIED,
        bookingStatus: BooleanStatus.True,
        version: 0
      },
      {
        pieceId: '1001',
        pieceDesc: 'f230fh0g3',
        hsCode: 'Product Description',
        awb: 12,
        msds: Status.VERIFIED,
        customsCheck: Status.VERIFIED,
        bookingStatus: BooleanStatus.False,
        version: 0
      }, {
        pieceId: '4333',
        pieceDesc: '4333',
        hsCode: '444 acıklama',
        awb: 44,
        msds: Status.CHECK,
        customsCheck: Status.CHECK,
        bookingStatus: BooleanStatus.True,
        version: 0
      }, {
        pieceId: '122',
        pieceDesc: 'Glass',
        hsCode: 'Deneme buuu',
        awb: 86,
        msds: Status.NOT_VERIFIED,
        customsCheck: Status.CHECK,
        bookingStatus: BooleanStatus.False,
        version: 0
      }, {
        pieceId: '6655',
        pieceDesc: 'Bag',
        hsCode: 'Yellow Bag',
        awb: 77,
        msds: Status.NOT_VERIFIED,
        customsCheck: Status.VERIFIED,
        bookingStatus: BooleanStatus.False,
        version: 0
      },

    ];
  }

  getWidectPiece() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  checkMsds(selectedCustomers: WidectPiece[]) {
    selectedCustomers.forEach(value => {
      value.msds = Status.VERIFIED;
    })
    return Promise.resolve(selectedCustomers);
  }

  getLogisticsObject(): Observable<any> {
    return this.httpClient.get<any>(BASE_URI + '/getLogisticsObject?logisticObjectId=Piece61', httpOptions);
  }


  checkCustomPrefilling(pieceId: string, waybillId: string): Observable<string> {
    return this.httpClient.get<string>(Custom_URI + '/check?pieceId=' + pieceId + '&waybillId=' + waybillId, httpOptions);
  }

  dgDecleration(pieceId: string): Observable<string> {
    return this.httpClient.get<string>(Custom_URI + '/dg-declaration', httpOptions);
  }

  checkMSDS(pieceId: string): Observable<string> {
    return this.httpClient.get<string>(MSDS_URI + '/check?pieceId=' + pieceId, httpOptions);
  }

  checkMSDSActual(pieceId: string): Observable<string> {
    return this.httpClient.get<string>(MSDS_URI + '/check?pieceId=' + pieceId, httpOptions);
  }

  checkUN(pieceId: string): Observable<string> {
    return this.httpClient.get<string>(UN_URI + '/check?unNumber=' + pieceId, httpOptions);
  }

}
