import {Component} from '@angular/core';
import {FlightPlanningService, Planning} from "../../service/flight-planning.service";

@Component({
  selector: 'app-flight-planning',
  templateUrl: './flight-planning.component.html',
  styleUrls: ['./flight-planning.component.scss']
})
export class FlightPlanningComponent {
  ops1571: Planning[] = [];
  ops2571: Planning[] = [];
  ops11071: Planning[] = [];
  ops21071: Planning[] = [];
  ops11453: Planning[] = [];
  ops1_11453: Planning[] = [];
  ops21453: Planning[] = [];
  ops31453: Planning[] = [];

  step1 = false;
  step2 = false;
  step3 = false;

  constructor(flightPlanningService: FlightPlanningService) {
    this.ops1571 = flightPlanningService.getFlight571().ops1;
    this.ops2571 = flightPlanningService.getFlight571().ops2;

    this.ops11071 = flightPlanningService.getFlight1071().ops1;
    this.ops21071 = flightPlanningService.getFlight1071().ops2;

    this.ops11453 = flightPlanningService.getFlight1453().ops1;
    this.ops1_11453 = flightPlanningService.getFlight1453().ops1_1;
    this.ops21453 = flightPlanningService.getFlight1453().ops2;
    this.ops31453 = flightPlanningService.getFlight1453().ops3;
  }

  isOtherOpen(event: any): void {
    if (event === 1) {
      this.step1 = !this.step1;
      this.step2 = false;
      this.step3 = false;
    } else if (event === 2) {
      this.step1 = false;
      this.step2 = !this.step2;
      this.step3 = false;
    } else if (event === 3) {
      this.step1 = false;
      this.step2 = false;
      this.step3 = !this.step3;
    }
  }

  dateDiffInHours(a: any, b: any): number {
    const milliDiff: number = Math.abs(a.getTime() - b.getTime());
    const totalSeconds = Math.floor(milliDiff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    return Math.floor(totalMinutes / 60);
  }
}
