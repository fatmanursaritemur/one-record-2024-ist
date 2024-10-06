import {Component, OnInit} from '@angular/core';
import {Flight} from "../../model/WidectPiece";
import {Table} from "primeng/table";

interface Step {
  completed: boolean;
}

@Component({
  selector: 'app-company-operation',
  templateUrl: './company-operation.component.html',
  styleUrls: ['./company-operation.component.scss'],
})
export class CompanyOperationComponent implements OnInit {

  steps: any = ['', '', '', '', '', '', ''];
  currentStepIndex: number = 1;
  selectedFlights!: Flight[];
  statuses!: any[];
  loading: boolean = true;
  activeIndex: number = 5; // Örnek olarak 3. adımı aktif hale getiriyoruz
  stepText: any = ['', '', '', '', '', '', '', '', '', '', ''];
  activityValues: number[] = [0, 100];
  flights: Flight[] = [
    {destination: 'IST', flightNumber: 'TK571', flightStatus: 'fa-solid fa-plane-arrival', arrival: 'IST', color:'#359758'},
    {destination: 'IST', flightNumber: 'TK1071', flightStatus: 'fa-solid fa-plane-departure', arrival: 'IST', color:'#f68738'},
    {destination: 'IST', flightNumber: 'TK1453', flightStatus: 'fa-solid fa-plane', arrival: 'IST', color:'#619bfb'},
  ];

  expandedRows= {};

  selectedOperationType: any;
  operationTypes: String[] = ['FFM', 'FSU', 'FWQ', 'FBI'];


  async ngOnInit() {
    this.loading = false;
  }

  ngAfterViewInit(): void {
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

  clear(table: Table
  ) {
    table.clear();
  }

}
