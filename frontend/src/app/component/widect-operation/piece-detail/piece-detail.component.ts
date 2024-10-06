import {Component, Injectable} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-piece-detail',
  templateUrl: './piece-detail.component.html',
  styleUrls: ['./piece-detail.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PieceDetailComponent {
  displayDialog: boolean = false;
  awbNumber: string = '';
  description: string = '';
  activeIndex: number = 0;

  steps: MenuItem[] = [
    {label: 'Hazırlanıyor'},
    {label: 'Kargolandı'},
    {label: 'Teslim Edildi'}
  ];

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}
