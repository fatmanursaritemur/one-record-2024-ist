import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {Piece} from '../../../model/Piece';
import {BookingService} from '../../../service/bookingService';
import {Shipment} from '../../../model/Shipment';
import {EMPTY, Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {MovementTime} from '../../../model/MovementTime';
import {ServedActivity} from '../../../model/ServedActivity';
import {Waybill} from '../../../model/Waybill';

@Component({
    selector: 'app-booking-create-update',
    templateUrl: './booking-create-update.component.html',
    styleUrls: ['./booking-create-update.component.scss']
})
export class BookingCreateUpdateComponent implements OnInit, OnDestroy {
    waybillPrefix!: string;
    waybillnumber!: string;
    pieceList: Piece[] = [];
    statuses!: SelectItem[];
    clonedOperation: { [s: string]: Piece } = {};
    awb: string = '';
    term = new Subject<string>();
    private searchSubscription!: Subscription;

    constructor(private messageService: MessageService, private bookingService: BookingService) {
    }

    ngOnInit(): void {
        this.searchSubscription = this.term.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap(term => {
                /*do something*/
                return EMPTY;
            })
        ).subscribe();

        this.statuses = [
            {label: 'TK0780 15-Dec-23 09:00', value: 'TK0780 15-Dec-23 09:00'},
            {label: 'TK6552 15-Dec-23 16:00', value: 'TK6552 15-Dec-23 16:00'}
        ];
    }

    ngOnDestroy() {
        if(this.searchSubscription) {
            this.searchSubscription.unsubscribe();
            // this.searchSubscription = null;
        }
    }

    onRowEditInit(p: Piece) {
        this.clonedOperation[p.pieceId as string] = {...p};
    }

    onRowEditSave(p: Piece) {
        // confirmation ???
        if(p.pieceId !== '') {
            this.clonedOperation = {};
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Piece is updated'});
        } else {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid pieceId'});
        }
    }

    onRowEditCancel(p: Piece, index: number) {
        this.pieceList[index] = this.clonedOperation[p.pieceId as string];
        delete this.clonedOperation[p.pieceId as string];
    }

    getAwb() {
        this.bookingService.getWayBill(this.awb).subscribe((res: any) => {
            this.waybillPrefix = res.waybillPrefix;
            this.waybillnumber = res.waybillnumber;

            this.pieceList = [];
            this.statuses = [];
            const status = {label: '', value: ''};

            for(let i = 0; i < res.shipment.pieces.length; ++i) {
                const p: Piece = {pieceId: ''};
                p.pieceId = res.shipment.pieces[i].pieceId;
                p.grossWeight = res.shipment.pieces[i].grossWeight;
                p.goodsDescription = res.shipment.pieces[i].goodsDescription;
                p.specialHandlingCodes = res.shipment.pieces[i].specialHandlingCodes;
                p.dimensions = res.shipment.pieces[i].dimensions;
                p.exceptionReason = res.shipment.pieces[i].exceptionReason ?? `er-${i + 1}`;

                const flight = res.shipment.pieces[i]?.involvedInAction?.servedActivity?.transportIdentifier ?? 'TK2509 25-Nov-23 14:44';
                p.transportIdentifier = flight;
                status.label = flight;
                status.value = flight/*.substring(0, 6)*/;

                this.pieceList.push(p);
                this.statuses.push(status);
            }
        });
    }

    addRow() {
        this.pieceList.push({pieceId: ''});
    }

    send() {
        const a = 5;
        // this.bookingService.postLogisticsObject()
        // this.waybill.shipment.pieces = this?.pieceList;
        const sh: Shipment = {pieces: []};

        for(let i = 0; i < this.pieceList.length; ++i) {
            const p: Piece = {pieceId: ''};
            p.pieceId = this.pieceList[i].pieceId;
            p.grossWeight = this.pieceList[i].grossWeight;
            p.goodsDescription = this.pieceList[i].goodsDescription;
            p.specialHandlingCodes = this.pieceList[i].specialHandlingCodes;
            p.dimensions = this.pieceList[i].dimensions;
            p.exceptionReason = this.pieceList[i].exceptionReason ?? `er-${i + 1}`;

            const movementTimes: MovementTime[] = [{
                'movementTimeStamp': '2023-11-23T20:00:00Z',
                'movementTimeType': 'Scheduled'
            },
                {
                    'movementTimeStamp': '2023-11-23T19:00:00Z',
                    'movementTimeType': 'Actual'
                }
            ];

            const servedActivity: ServedActivity = {
                transportIdentifier: this.pieceList[i].transportIdentifier ?? 'TK2509 25-Nov-23 14:44',
                movementTimes
            };
            p.involvedInActions = [{servedActivity}];

            sh.pieces?.push(p);
        }

        const waybill: Waybill = {waybillnumber: this.waybillnumber, waybillPrefix: this.waybillPrefix, shipment: sh};


        this.bookingService.postLogisticsObject(waybill).subscribe(res => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Bookıng is created'});
        });
    }

    onChangePieceId(event: Event, ind: number) {
        const element = event.currentTarget as HTMLInputElement;
        const value = element.value;
        this.pieceList[ind].pieceId = value;
        this.term.next(value);
    }
}
