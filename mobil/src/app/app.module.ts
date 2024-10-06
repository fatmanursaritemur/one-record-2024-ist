import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StepsModule} from 'primeng/steps';
import {StepperComponent} from './component/stepper/stepper.component';
import {ConfirmComponent} from './component/confirm/confirm.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {OperationComponent} from './component/operation/operation.component';
import {FreightForwarderComponent} from './component/freight-forwarder/freight-forwarder.component';
import {CustomerComponent} from './component/customer/customer.component';
import {DockModule} from 'primeng/dock';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MenubarModule} from 'primeng/menubar';
import {BookingComponent} from './component/booking/booking.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from 'primeng/carousel';
import {CarouselComponent} from './component/carousel/carousel.component';
import {TagModule} from 'primeng/tag';
import {CargoStatusService} from './service/cargoStatusService';
import {PickListModule} from 'primeng/picklist';
import {DragDropModule} from 'primeng/dragdrop';
import {DividerModule} from 'primeng/divider';
import {BookingCreateUpdateComponent} from './component/booking/booking-create-update/booking-create-update.component';
import {MessageService} from 'primeng/api';
import {DatePipe} from '@angular/common';
import {WidectOperationComponent} from "./component/widect-operation/widect-operation.component";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {FileUploadModule} from "primeng/fileupload";
import { PieceDetailComponent } from './component/widect-operation/piece-detail/piece-detail.component';
import {DialogModule} from "primeng/dialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { MapComponent } from './component/map/map.component';
import { CompanyOperationComponent } from './component/company-operation/company-operation.component';
import {StepperModule} from "primeng/stepper";
import { CompanyQrsOperationComponent } from './component/company-qrs-operation/company-qrs-operation.component';
import { CompanyQwsOperationComponent } from './component/company-qws-operation/company-qws-operation.component';
import { CompanyCargoOperationComponent } from './component/company-cargo-operation/company-cargo-operation.component';
import { CompanySuccesComponent } from './component/company-succes/company-succes.component';
import { AircraftLoadingComponent } from './component/aircraft-loading/aircraft-loading.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ConfirmComponent,
    OperationComponent,
    FreightForwarderComponent,
    CustomerComponent,
    BookingComponent,
    CarouselComponent,
    BookingCreateUpdateComponent,
    WidectOperationComponent,
    PieceDetailComponent,
    MapComponent,
    CompanyOperationComponent,
    CompanyQrsOperationComponent,
    CompanyQwsOperationComponent,
    CompanyCargoOperationComponent,
    CompanySuccesComponent,
    AircraftLoadingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StepsModule,
    ButtonModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    DockModule,
    RadioButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    ToastModule,
    CarouselModule,
    TagModule,
    PickListModule,
    DragDropModule,
    DividerModule,
    MultiSelectModule,
    SliderModule,
    FileUploadModule,
    DialogModule,
    ProgressSpinnerModule,
    StepperModule, ButtonModule,
  ],
    providers: [CargoStatusService, MessageService, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
