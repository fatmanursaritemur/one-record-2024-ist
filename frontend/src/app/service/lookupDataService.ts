import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {BooleanStatus, GeneralStatus, Status, WidectPiece} from "../model/WidectPiece";
import {BookingService} from "./bookingService";

@Injectable({
  providedIn: 'root'
})
export class LookupDataService {
  public static widectPieces: WidectPiece[];
  public static awb: string;

  constructor(public bookingService: BookingService
  ) {
  }


  public initialize(): Observable<boolean> {
    return this.getScCodes().pipe(map(_ => true));
  }

  public getAwb() {
    return LookupDataService.awb;
  }


  public getScCodes(): Observable<WidectPiece[]> {
    console.log(LookupDataService.widectPieces);
    if (!LookupDataService.widectPieces) {
      return this.initScCodes();
    } else {
      return of(LookupDataService.widectPieces);
    }
  }


  initScCodes(): Observable<WidectPiece[]> {
    return this.bookingService.getWayBill('Waybill23516032024').pipe(
      map(data => {
        LookupDataService.widectPieces = data['shipment']['pieces'];
        LookupDataService.awb = data['waybillPrefix'] + '-' + data['waybillnumber'];
        LookupDataService.widectPieces.forEach(value => {
          value.shipper.name = value.shipper.name.at(0) + '*****';
          value.consignee.name = value.consignee.name.at(0) + '*****';
          value.isAfterMsdsOk = false;
          value.msds = Status.UNDEFINED;
          value.bookingStatus = BooleanStatus.False;
          value.customsCheck = Status.UNDEFINED;
          value.status = GeneralStatus.INITIAL;
          value.parcelStatus = '';
        })
        return data;
      })
    );
  }

}
