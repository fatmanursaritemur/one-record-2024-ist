import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard-search-operation',
  templateUrl: './company-qrs-operation.component.html',
  styleUrls: ['./company-qrs-operation.component.scss']
})
export class CompanyQrsOperationComponent {
  @Output() makeDelay = new EventEmitter();

  startEmit() {
    this.makeDelay.emit();
  }
}
