import {Component, OnInit} from '@angular/core';
import {CargoStatusService} from '../../service/cargoStatusService';
import {CargoStatus} from '../../model/CargoStatus';
import {BookingService} from "../../service/bookingService";
import {DatePipe, formatDate} from "@angular/common";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  cargoStatuses: CargoStatus[] | any[];
  departuredPiece: number;
  remainingPiece: number;
  messageList: any[] = [];
  flight1!: string;
  flight2!: string;
  awbNumber: string | null;
  logicObj: any[] = [{
    name: 'LAT',
    image: 'a1.png',
    planned: '',
    actual: ''
  },
    {
      name: 'RCS',
      image: 'a2.png',
      planned: '',
      actual: ''
    },
    {
      name: 'DEP',
      image: 'a3.png',
      planned: '',
      actual: ''
    },
    {
      name: '',
      image: 'plane1.png',
      planned: '',
      actual: ''
    },
    {
      name: 'ARR',
      image: 'a4.png',
      planned: '',
      actual: ''
    },
    {
      name: 'NCF',
      image: 'a5.png',
      planned: '',
      actual: ''
    },
    {
      name: 'FDD',
      image: 'a6.png',
      planned: '',
      actual: ''
    }
  ];

  logicObj2: any[] = [{
    name: 'LAT',
    image: 'a1.png',
    planned: '',
    actual: ''
  },
    {
      name: 'RCS',
      image: 'a2.png',
      planned: '',
      actual: ''
    },
    {
      name: 'DEP',
      image: 'a3.png',
      planned: '',
      actual: ''
    },
    {
      name: '',
      image: 'plane1.png',
      planned: '',
      actual: ''
    },
    {
      name: 'ARR',
      image: 'a4.png',
      planned: '',
      actual: ''
    },
    {
      name: 'NCF',
      image: 'a5.png',
      planned: '',
      actual: ''
    },
    {
      name: 'FDD',
      image: 'a6.png',
      planned: '',
      actual: ''
    }
  ];


  responsiveOptions: any[] | undefined;

  constructor(private productService: CargoStatusService, private bookingService: BookingService) {
    this.cargoStatuses = [];
    this.departuredPiece = 50;
    this.remainingPiece = 30;
    this.awbNumber = localStorage.getItem('awbNumber');
    console.log(this.awbNumber);
  }

  ngOnInit() {
    this.getBookingService();
    this.getAllLogisticsEvents();
    this.productService.getCargoStatusesSmall().then((cargoStatuses) => {
      this.cargoStatuses = cargoStatuses;
    });


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getBookingService() {
    //23525112023
    //23525252023
    this.bookingService.getWayBill(this.awbNumber).subscribe((res: any) => {
      this.messageList = res.shipment.pieces
      this.checkFlights(this.messageList)
      console.log(this.messageList);
    })
  }

  getAllLogisticsEvents() {
    this.bookingService.getAllLogisticsEvents('ram123').subscribe((res: any) => {
      console.log(res);
    })
  }

  getSeverityDep(type: string) {
    if (type === 'P') {
      return 'danger';
    }
    return 'success'
  }

  getSeverity(status: string) {
    if (status === 'active') {
      return 'success';
    } else {
      return 'danger';
    }
  }

  checkFlights(pieceList: any[]) {
    var union = [];
    for (var i = 0; i < pieceList.length; i++) {
      if (union.indexOf(pieceList[i].involvedInActions[0].servedActivity.transportIdentifier) == -1) {
        union.push(pieceList[i].involvedInActions[0].servedActivity.transportIdentifier);
      }
    }
    console.log(union)
    if (union[0]) {
      console.log(union[0].split(' ')[0]);
      this.flight1 = union[0].split(' ')[0];
      this.logicObj[3].name = this.flight1;
    }
    if (union[1]) {
      this.flight2 = union[1].split(' ')[0];
      this.logicObj2[3].name = this.flight2;
    }
    this.createLogisticObject(pieceList)
  }

  createLogisticObject(pieceList: any[]) {
    for (let i = 0; i < pieceList.length; i++) {
      if (pieceList[i].involvedInActions[0].servedActivity.transportIdentifier.split(' ')[0] == this.flight1) {
        let flight1Obj = pieceList[i].involvedInActions[0].servedActivity.movementTimes[0];
        if (flight1Obj.movementTimeType === 'Scheduled') {
          this.logicObj.forEach((loj: any) => {
            if (loj.name === 'LAT') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, -2);
              loj.actual = this.createDate(flight1Obj.movementTimeStamp, -2);
            } else if (loj.name === 'RCS') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, -1);
            } else if (loj.name === 'DEP') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, 0);
            } else if (loj.name.includes('TK')) {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, 0);
            } else if (loj.name === 'ARR') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, 4);
            } else if (loj.name === 'NCF') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, 5);
            } else if (loj.name === 'FDD') {
              loj.planned = this.createDate(flight1Obj.movementTimeStamp, 6);
            }
          })
        }
        break;
      }
    }
    if (this.flight2) {
      for (let i = 0; i < pieceList.length; i++) {
        if (pieceList[i].involvedInActions[0].servedActivity.transportIdentifier.split(' ')[0] == this.flight2) {
          let flight1Obj = pieceList[i].involvedInActions[0].servedActivity.movementTimes[0];
          if (flight1Obj.movementTimeType === 'Scheduled') {
            this.logicObj2.forEach((loj: any) => {
              if (loj.name === 'LAT') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, -2);
              } else if (loj.name === 'RCS') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, -1);
              } else if (loj.name === 'DEP') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, 0);
              } else if (loj.name.includes('TK')) {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, 0);
              } else if (loj.name === 'ARR') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, 4);
              } else if (loj.name === 'NCF') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, 5);
              } else if (loj.name === 'FDD') {
                loj.planned = this.createDate(flight1Obj.movementTimeStamp, 6);
              }
            })
          }
          break;
        }
      }
    }
    console.log(this.logicObj)
  }

  createDate(dateStr: string, hours: number) {
    const newDate = new Date(dateStr);
    newDate.setTime(newDate.getTime() + hours * 60 * 60 * 1000);
    let date = formatDate(newDate.toDateString(), 'dd/MM/yyyy', 'en-US');
    date = date + ' ' + this.formatSingleDate(newDate.getHours()) + ':' + this.formatSingleDate(newDate.getMinutes());
    return date;
  }

  formatSingleDate(hour: any) {
    if (hour < 10) {
      return '' + 0 + hour;
    } else {
      return hour;
    }
  }


}
