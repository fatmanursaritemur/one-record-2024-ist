import {Component, HostListener, OnInit} from '@angular/core';
import {BookingService} from "../../service/bookingService";
import {BooleanStatus, GeneralStatus, Status, WidectPiece} from "../../model/WidectPiece";

import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {Airline} from "../../model/Airline";
import {LookupDataService} from "../../service/lookupDataService";

interface Step {
  completed: boolean;
}

@Component({
  selector: 'app-widect-operation',
  templateUrl: './widect-operation.component.html',
  styleUrls: ['./widect-operation.component.scss']
})
export class WidectOperationComponent implements OnInit {
  customers!: WidectPiece[];
  steps: any = ['', '', '', '', '', '', ''];
  currentStepIndex: number = 1;


  selectedCustomers!: WidectPiece[];

  pieceDetailVisible: boolean = false;

  createBookingVisible: boolean = false;

  dgDeclarationVisible: boolean = false;

  statuses!: any[];

  booleanStatuses!: any[];

  loading: boolean = true;


  activeIndex: number = 5; // Örnek olarak 3. adımı aktif hale getiriyoruz
  stepText: any = ['', '', '', '', '', '', '', '', '', '', ''];

  activityValues: number[] = [0, 100];

  menuItems = ['MSDS Request', 'MSDS Check', 'UN Check', 'Customs Filling', 'DG Declaration', 'Booking Request', 'Execute AWB'];


  ngAfterViewInit(): void {
    const menuItems = ['Step 1', 'Step 2', 'Step 3'];
  }


  setIconsForPastSteps(): void {
    for (let i = 0; i < this.activeIndex; i++) {
      const stepIcon = document.getElementById(`Step 1`);
      if (stepIcon) {
        stepIcon.innerHTML = '<i class="pi pi-check"></i>'; // Tik işareti ikonu
      }
    }
  }


  getIcon(index: number): string {
    if (index < this.activeIndex) {
      return 'pi pi-check';
    } else {
      return 'pi pi-times'; // Aktif adımdan sonra olan adımlar için çarpı işareti gösterir
    }
  }


  countries: Airline[] = [
    {name: 'Qatar Airways Cargo', code: 'Qatar.png'},
    {name: 'Air China Cargo', code: 'China.png'},
    {name: 'Turkish Cargo', code: 'Turkish.png'},
    {name: 'Korean Air Cargo', code: 'Korean.png'}
  ];

  selectedCountry: Airline = this.countries[2];

  visible: boolean = false;
  sCustomerDetail!
    :
    WidectPiece;


  constructor(private bookingService: BookingService, public messageService: MessageService, public lookupData: LookupDataService
  ) {
  }

  async ngOnInit() {
    // @ts-ignore

    // for apps's first screen is tk operation

    this.customers = JSON.parse(localStorage.getItem('widectItems'));
    this.awbNumber = String(this.lookupData.getAwb());
    this.loading = false;
    this.statuses = Object.values(Status);
    this.booleanStatuses = Object.values(BooleanStatus);


    // for apps's first screen is widect operation
    /*
    await this.lookupData.getScCodes().subscribe(value => {

      this.lookupData.getScCodes().subscribe(value => this.customers = value);
      this.awbNumber = String(this.lookupData.getAwb());
      this.loading = false;
      this.statuses = Object.values(Status);
      this.booleanStatuses = Object.values(BooleanStatus);
    });*/
  }

  getSeverityByStatus(status: Status
  ) {
    switch (status) {
      case Status.VERIFIED:
        return 'success';
      case Status.NOT_VERIFIED:
        return 'danger';
      case Status.CHECK:
        return 'warning';
      case Status.UNDEFINED:
        return 'info';
      case Status.DENIED:
        return 'danger';
      default:
        return 'warning';
    }
  }

  getSeverityByBooleanStatus(status
                               :
                               BooleanStatus
  ) {
    switch (status) {
      case BooleanStatus.True:
        return 'success';
      case BooleanStatus.False:
        return 'warning';
      default:
        return 'warning';
    }
  }

  clear(table: Table
  ) {
    table.clear();
  }

  protected readonly MsdsStatus = Status;

  getActivityStatus(widectPiece: WidectPiece
  ) {
    switch (widectPiece.status) {
      case GeneralStatus.MSDS_REQUEST:
        return 15;
      case GeneralStatus.MSDS_CHECK:
        return 30;
      case GeneralStatus.UN_CHECK:
        return 45;
      case GeneralStatus.PRE_FILLING:
        return 60;
      case GeneralStatus.DG_DECLARATION:
        return 75;
      case GeneralStatus.TK_BOOKING:
        return 83;
      case GeneralStatus.EXECUTE_AWB:
        return 90;
      default:
        return 0;
    }
  }


  showDialog(customer: any
  ) {
    this.sCustomerDetail = customer;
    this.getActiveIndex(this.sCustomerDetail);
    this.initializeStepText();
    this.pieceDetailVisible = true;
  }


  sleep(milliseconds
          :
          number
  ) {
    let resolve: (value: (PromiseLike<unknown> | unknown)) => void;
    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });
    // @ts-ignore
    setTimeout(() => resolve(), milliseconds);
    return promise;
  }

  executeAwb() {
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.selectedCustomers.forEach(value => {
          value.version = 7;
          value.status = GeneralStatus.EXECUTE_AWB;
        })
        this.loading = false;
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Execute AWB request has been sent'});
      })
  }

  checkMsdsRequest() {
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.selectedCustomers.forEach(value => {
          value.version = 1;
          value.status = GeneralStatus.MSDS_REQUEST;
        })
        this.loading = false;
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'MSDS request has been sent'});
      })

  }

  checkMsds(widectPieces
              :
              WidectPiece[]
  ) {
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.loading = false;
        this.loading = false;
        this.selectedCustomers.forEach(value => {
          this.bookingService.checkMSDS(value.pieceId).subscribe(prefilling => {
            value.status = GeneralStatus.MSDS_CHECK;
            value.version = 2;
            if (prefilling === 'CHECK') {
              value.msds = Status.CHECK;
            } else if (prefilling === 'OK') {
              value.msds = Status.VERIFIED;
            } else {
              value.msds = Status.DENIED;
            }
          })
        });
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'MSDS request has been sent'});
      })
  }

  checkUN() {
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.loading = false;
        this.selectedCustomers.forEach(value => {
          this.bookingService.checkUN(value.pieceId).subscribe(prefilling => {
            console.log(prefilling);
            if (prefilling === 'CHECK') {
              value.msds = Status.CHECK;
            } else if (prefilling === 'OK') {
              if (value.msds !== Status.VERIFIED) {
                value.isAfterMsdsOk = true;
              }
              value.msds = Status.VERIFIED;
            }
          })
          value.version = 3;
          value.status = GeneralStatus.UN_CHECK;
        });
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'UN Check request has been sent'});
      })
  }

  checkCustomsPreFilling() {
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.loading = false;
        this.selectedCustomers.forEach(value => {
          this.bookingService.checkCustomPrefilling(value.pieceId, 'Waybill23516032024').subscribe(prefilling => {
            console.log(value);
            if (value.msds !== Status.VERIFIED) {
              value.customsCheck = Status.NOT_VERIFIED;
            } else {
              if (prefilling === 'NOT_OK') {
                value.customsCheck = Status.NOT_VERIFIED;
              } else {
                value.customsCheck = Status.VERIFIED;
              }
            }
          })
          value.version = 4;
          value.status = GeneralStatus.PRE_FILLING;
        })
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Custom Prefilling has been sent'});
      })
  }

  declarationDg() {
    this.dgDeclarationVisible = true;
  }

  closeDeclarationDgDialog() {
    this.dgDeclarationVisible = false;
    this.loading = true;
    const delay = 500;
    this.sleep(delay)
      .then(() => {
        this.loading = false;
        this.selectedCustomers.forEach(value => {
          this.bookingService.dgDecleration(value.pieceId).subscribe(prefilling => {
            value.version = 5;
            if (value.msds !== Status.VERIFIED) {
              value.customsCheck = Status.NOT_VERIFIED;
            } else {
              if (prefilling === 'CHECK') {
                value.customsCheck = Status.CHECK;
              } else if (prefilling === 'OK') {
                value.customsCheck = Status.VERIFIED;
              }
            }
          })
          value.version = 4;
          value.status = GeneralStatus.DG_DECLARATION;
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'DG Declaration request has been sent'
        });
      })
  }

  createBookingRequest() {
    this.createBookingVisible = true;
  }

  closeCreateBookingDialog() {
    this.createBookingVisible = false;
    this.loading = true;
    const delay = 200;
    this.sleep(delay)
      .then(() => {
        this.loading = false;
        this.selectedCustomers.forEach(value => {
          value.version = 6;
          if (value.customsCheck !== Status.VERIFIED) {
            value.bookingStatus = BooleanStatus.False;
          } else {
            value.bookingStatus = BooleanStatus.True;
            value.parcelStatus = 'BKD';
          }
          value.status = GeneralStatus.TK_BOOKING;
        })
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Airline send file.'});
      })

  }

  Status = Status;
  awbNumber: any;

  checkStatusAndVersion(customer: WidectPiece
  ) {

    return customer.isAfterMsdsOk === true && customer.msds === Status.VERIFIED;
  }

  getActiveIndex(sCustomerDetail: WidectPiece
  ) {
    this.activeIndex = Number(sCustomerDetail.status);

    //   return Number(GeneralStatus[sCustomerDetail.status]);
  }


  isPreviousStep(i: number) {
    return this.activeIndex > i;
  }

  getStepperData(i: number) {
    console.log("getStepperData");
    console.log(i);
    console.log(this.activeIndex);
    console.log(this.activeIndex > i ? i : '');
    return this.activeIndex > i ? i : '';
  }

  isCurrentStep(i: number) {
    return this.activeIndex === i;
  }

  private initializeStepText() {
    console.log('ssss');
    for (let i = 0; i < 7; i++) {
      console.log(this.activeIndex > i ? i : '');
      if (this.activeIndex < i) {
        this.stepText[i] = i;
      } else {
        this.stepText[i] = '';
      }
      // Döngü içinde yapılacak işlemler buraya yazılabilir
    }
    console.log(this.stepText);
  }


  protected readonly GeneralStatus = GeneralStatus;
  protected readonly BooleanStatus = BooleanStatus

  @HostListener('window:beforeunload') goToPage() {
    localStorage.setItem('widectItems', JSON.stringify(this.customers));
    console.log('denemeee');
  }
}
