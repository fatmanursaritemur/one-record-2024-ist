import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../service/bookingService";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-freight-forwarder',
  templateUrl: './freight-forwarder.component.html',
  styleUrls: ['./freight-forwarder.component.scss']
})
export class FreightForwarderComponent implements OnInit {
  awbNumber: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private bookingService: BookingService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  getAWB() {
    this.bookingService.getWayBill(this.awbNumber).subscribe(res => {
      console.log(res);
      localStorage.setItem('awbNumber', this.awbNumber);
      this.router.navigate(['detail'], {relativeTo: this.route});
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: ex.error});

    })
  }

}
