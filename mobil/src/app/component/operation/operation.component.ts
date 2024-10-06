import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Piece} from '../../model/Piece';
import {CargoStatus} from '../../model/CargoStatus';
import {BookingService} from '../../service/bookingService';
import {concatMap, delay, of} from 'rxjs';
import {ServedActivity} from '../../model/ServedActivity';
import {LookupDataService} from "../../service/lookupDataService";
import {MessageService} from "primeng/api";
import {WidectPiece} from "../../model/WidectPiece";

@Component({
  selector: 'app-truck',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  sourcePieces!: Piece[];
  targetPieces!: Piece[];
  cargoStatuses!: CargoStatus[];
  currentCargoStatus: CargoStatus = {name: 'FOH', code: 'FOH'};
  customers: WidectPiece[] = [];
  date!: Date;
  awb!: string;

  constructor(private bookingService: BookingService, private cdr: ChangeDetectorRef,
              public messageService: MessageService, private lookupData: LookupDataService) {
  }

  ngOnInit() {
    this.lookupData.initScCodes().subscribe(value => {
      this.targetPieces = [];

      this.cargoStatuses = [
        {name: 'FOH', code: 'FOH'},
        {name: 'XRAY', code: 'XRAY'},
        {name: 'RCS', code: 'RCS'},
        {name: 'DEP', code: 'DEP'},
        {name: 'ARR', code: 'ARR'},
        {name: 'RCF', code: 'RCF'},
        {name: 'NFD', code: 'NFD'},
        {name: 'DLV', code: 'DLV'},
        {name: 'POD', code: 'POD'},
      ];
    });
  }

  saveOps() {
    for (let i = 0; i < this.targetPieces.length; ++i) {
      const p: Piece = {pieceId: ''};
      p.pieceId = this.targetPieces[i].pieceId;
      p.grossWeight = this.targetPieces[i].grossWeight;
      p.goodsDescription = this.targetPieces[i].goodsDescription;
      p.specialHandlingCodes = this.targetPieces[i].specialHandlingCodes;
      p.dimensions = this.targetPieces[i].dimensions;
      p.exceptionReason = this.targetPieces[i].exceptionReason ?? `er-${i + 1}`;

      const servedActivity: ServedActivity = {
        transportIdentifier: this.targetPieces[i].transportIdentifier ?? 'TK2509 25-Nov-23 14:44',
        movementTimes: []
      };

      p.involvedInActions = [{servedActivity}];

    }
    if (this.targetPieces.length > 0)
      of(...this.targetPieces)
        .pipe(
          concatMap(item => {
            const data = {
              awb: this.awb,
              pieceId: item.pieceId,
              payload: {
                eventLocation: {
                  code: 'ERZ',
                  locationName: 'Erzurum',
                  locationType: 'Airport'
                },
                eventTimeType: 'Actual',
                eventCode: this.currentCargoStatus.name,
                eventDate: this.date,
                eventName: 'Rezervasyon tarihi'
              }
            };
            // @ts-ignorereturn this.bookingService.postLogisticsEvent(data);
            return this.bookingService.checkMSDS('Piece20001');
          }),
          delay(250)
        )
        .subscribe(result => {
          console.log('aaaaaaaaaaaaaa');// @ts-ignore
          this.customers = JSON.parse(localStorage.getItem('widectItems'));
          this.targetPieces.forEach(item => {
            console.log(item);
            this.customers.forEach(value => {
              if (value.pieceId === item.pieceId && value.pieceId !== 'Piece20001') {
                value.parcelStatus = this.currentCargoStatus.code;
              }
            });
            console.log(this.customers);
            localStorage.setItem('widectItems', JSON.stringify(this.customers));

            console.log(result)
          })
        })
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Status updated and published!'});
  }

  getAwb() {
    this.bookingService.getWayBill(this.awb).subscribe((res: any) => {
      this.sourcePieces = [];

      for (let i = 0; i < res.shipment.pieces.length; ++i) {
        const operation: Piece = {pieceId: ''};
        operation.pieceId = res.shipment.pieces[i].pieceId;
        operation.grossWeight = res.shipment.pieces[i].grossWeight;
        operation.goodsDescription = res.shipment.pieces[i].goodsDescription;
        operation.specialHandlingCodes = res.shipment.pieces[i].specialHandlingCodes;
        operation.dimensions = res.shipment.pieces[i].dimensions;


        operation.transportIdentifier = res.shipment.pieces[i]?.involvedInAction?.servedActivity?.transportIdentifier ?? 'TK2509 25-Nov-23 14:44';


        this.sourcePieces.push(operation);
      }

      this.cdr.markForCheck();
    });
  }
}
