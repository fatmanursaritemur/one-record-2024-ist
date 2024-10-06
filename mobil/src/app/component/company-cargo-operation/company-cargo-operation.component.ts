import {Component, OnInit} from '@angular/core';
import {Flight} from "../../model/WidectPiece";
import {Table} from "primeng/table";
import {sleep} from "@amcharts/amcharts5/.internal/core/util/Time";

@Component({
  selector: 'app-company-cargo-operation',
  templateUrl: './company-cargo-operation.component.html',
  styleUrls: ['./company-cargo-operation.component.scss']
})
export class CompanyCargoOperationComponent implements OnInit {

  steps: any = ['', '', '', '', '', '', ''];
  currentStepIndex: number = 1;
  showDelay = false
  selectedFlights!: Flight[];
  statuses!: any[];
  loading: boolean = true;
  activeIndex: number = 5; // Örnek olarak 3. adımı aktif hale getiriyoruz
  stepText: any = ['', '', '', '', '', '', '', '', '', '', ''];
  activityValues: number[] = [0, 100];
  flights: Flight[] = [
    {
      destination: 'DOH',
      flightNumber: 'TK571',
      flightStatus: 'fa-solid fa-plane-arrival',
      arrival: 'IST',
      color: '#359758'
    },
    {
      destination: 'DOH',
      flightNumber: 'TK1071',
      flightStatus: 'fa-solid fa-plane-arrival',
      arrival: 'IST',
      color: '#359758'
    },
    {destination: 'DOH', flightNumber: 'TK1453', flightStatus: 'fa-solid fa-plane', arrival: 'IST', color: '#f68738'},
  ];

  expandedRows = {};

  selectedOperationType: any;
  operationTypes: String[] = ['WLS', 'LIR'];


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

  makeDelay(nextCall: any) {
    this.showDelay = true;
    nextCall.emit();
    this.sleep(5000).then(() => {
      this.showDelay = false;
    });
  }

  protected readonly sleep = sleep;
  protected readonly setTimeout = setTimeout;
}
