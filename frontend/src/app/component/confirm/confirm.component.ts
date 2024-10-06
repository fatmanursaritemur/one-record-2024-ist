import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  providers:[DialogService]
})
export class ConfirmComponent implements OnInit {

  title: string = 'Optional extra texts..';

  constructor(public ref: DynamicDialogRef, public dialogService: DialogService) {
  }

  ngOnInit(): void {
    console.log(this.ref)
  }

  onConfirm() {
    this.ref.close(true);
  }
}
