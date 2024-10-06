import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OperationComponent} from './component/operation/operation.component';
import {FreightForwarderComponent} from './component/freight-forwarder/freight-forwarder.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import {BookingCreateUpdateComponent} from "./component/booking/booking-create-update/booking-create-update.component";
import {WidectOperationComponent} from "./component/widect-operation/widect-operation.component";
import {MapComponent} from './component/map/map.component';
import {CompanyOperationComponent} from "./component/company-operation/company-operation.component";
import {CompanyQrsOperationComponent} from "./component/company-qrs-operation/company-qrs-operation.component";
import {CompanyQwsOperationComponent} from "./component/company-qws-operation/company-qws-operation.component";
import {CompanyCargoOperationComponent} from "./component/company-cargo-operation/company-cargo-operation.component";
import {CompanySuccesComponent} from "./component/company-succes/company-succes.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'find', component: FreightForwarderComponent},
  {path: 'operation', component: OperationComponent},
  {path: 'find/detail', component: CarouselComponent},
  {path: 'booking', component: BookingCreateUpdateComponent},
  {path: 'widect-operation', component: WidectOperationComponent},
  {path: 'company-operation', component: CompanyOperationComponent},
  {path: 'company-qrs-operation', component: CompanyQrsOperationComponent},
  {path: 'company-qws-operation', component: CompanyQwsOperationComponent},
  {path: 'company-cargo-operation', component: CompanyCargoOperationComponent},
  {path: 'company-success', component: CompanySuccesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
