import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OperationComponent} from './component/operation/operation.component';
import {FreightForwarderComponent} from './component/freight-forwarder/freight-forwarder.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import {BookingCreateUpdateComponent} from "./component/booking/booking-create-update/booking-create-update.component";
import {WidectOperationComponent} from "./component/widect-operation/widect-operation.component";
import {MapComponent} from './component/map/map.component';
import {OneCoreComponent} from "./component/one-core/one-core.component";
import {LoadingAirplaneComponent} from "./component/one-core/loading-airplane/loading-airplane.component";
import {FileOcrComponent} from "./component/one-core/file-ocr/file-ocr.component";
import {AgreementComponent} from "./component/one-core/agreement/agreement.component";
import {FlightPlanningComponent} from "./component/flight-planning/flight-planning.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'find', component: FreightForwarderComponent},
  {path: 'operation', component: OperationComponent},
  {path: 'find/detail', component: CarouselComponent},
  {path: 'booking', component: BookingCreateUpdateComponent},
  {path: 'widect-operation', component: WidectOperationComponent},
  {path: 'map', component: MapComponent},
  {path: 'one-core', component: OneCoreComponent},
  {path: 'app-loading-airplane', component: LoadingAirplaneComponent},
  {path: 'file-ocr', component: FileOcrComponent},
  {path: 'agreement', component: AgreementComponent},
  {path: 'flight-planning', component: FlightPlanningComponent},
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
