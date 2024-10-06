import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ConfirmComponent} from '../confirm/confirm.component';
import {LogisticsEventService} from '../../service/logisticsEventService';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers:[DialogService, MessageService]
})
export class StepperComponent implements OnInit, OnDestroy {

  constructor(private router: Router, public dialogService: DialogService, private logisticEventService: LogisticsEventService,
              private messageService: MessageService) {

  }

  items: MenuItem[] | undefined;
  activeIndex: number = 0;
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'NFD',
      },
      {
        label: 'CCD',
      },
      {
        label: 'DLV',
      },
      {
        label: 'RIW',
      },
      {
        label: 'OFD',
      },
      {
        label: 'POD',
      }
    ];
  }

  onActiveIndexChange(event: number) {
    //this.activeIndex = event;
  }

  onConfirmBtn(){
    this.router.navigateByUrl('/confirm')
  }

  openDialog() {
    this.ref = this.dialogService.open(ConfirmComponent,
      {
        width: '50%',
        height: '35%',
        header: 'Confirmation of this process',
      });

    this.ref.onClose.subscribe((res: boolean)=>{
      if(res){
        this.activeIndex++;
      }
    })
  }

  clickNFD() {
    let req = {
      "@context": {
        "cargo": "https://onerecord.iata.org/ns/cargo#"
      },
      "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023/logistics-events/202306242323",
      "@type": "cargo:LogisticsEvent",
      "cargo:eventDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:creationDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:eventCode": "NFD",
      "cargo:eventName": "Consignment departed on a specific flight",
      "cargo:eventTimeType": "Actual",
      "cargo:linkedObject": {
        "@type": "cargo:Shipment",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023"
      },
      "cargo:recordedBy": {
        "@type": "cargo:Company",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/nylmz44"
      }
    }
    this.logisticEventService.sendNFD(req).subscribe(res => {
      console.log(res);
      this.messageService.add({severity:'success', summary:'SUCCESS', detail:'SUCCESS NFD'});
      this.activeIndex = 1;
    }, error => {
      this.messageService.add({severity:'error', summary:'SERVICE ERROR', detail:error.message});
      console.log(error)
    })
  }
  clickCCD() {
    let req = {
      "@context": {
        "cargo": "https://onerecord.iata.org/ns/cargo#"
      },
      "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023/logistics-events/202306242323",
      "@type": "cargo:LogisticsEvent",
      "cargo:eventDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:creationDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:eventCode": "CCD",
      "cargo:eventName": "Consignment departed on a specific flight",
      "cargo:eventTimeType": "Actual",
      "cargo:linkedObject": {
        "@type": "cargo:Shipment",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023"
      },
      "cargo:recordedBy": {
        "@type": "cargo:Company",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/nylmz44"
      }
    }
    this.logisticEventService.sendCCD(req).subscribe(res => {
      console.log(res);
      this.messageService.add({severity:'success', summary:'SUCCESS', detail:'SUCCESS CCD'});
      this.activeIndex = 2;
    }, error => {
      this.messageService.add({severity:'error', summary:'SERVICE ERROR', detail:error.message});
      console.log(error)
    })
  }

  clickDLV() {
    let req = {
      "@context": {
        "cargo": "https://onerecord.iata.org/ns/cargo#"
      },
      "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023/logistics-events/202306242323",
      "@type": "cargo:LogisticsEvent",
      "cargo:eventDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:creationDate": "2023-06-25T01:33:28.213+00:00",
      "cargo:eventCode": "DLV",
      "cargo:eventName": "Consignment departed on a specific flight",
      "cargo:eventTimeType": "Actual",
      "cargo:linkedObject": {
        "@type": "cargo:Shipment",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/23524062023"
      },
      "cargo:recordedBy": {
        "@type": "cargo:Company",
        "@id": "https://tk.one-record.lhind.dev/logistics-objects/nylmz44"
      }
    }
    this.logisticEventService.sendDLV(req).subscribe(res => {
      console.log(res);
      this.messageService.add({severity:'success', summary:'SUCCESS', detail:'SUCCESS DLV'});
      this.activeIndex = 3;
    }, error => {
      this.messageService.add({severity:'error', summary:'SERVICE ERROR', detail:error.message});
      console.log(error)
    })
  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
