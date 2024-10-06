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
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {WidectOperationComponent} from "./component/widect-operation/widect-operation.component";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {FileUploadModule} from "primeng/fileupload";
import {PieceDetailComponent} from './component/widect-operation/piece-detail/piece-detail.component';
import {DialogModule} from "primeng/dialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MapComponent} from './component/map/map.component';
import {OneCoreComponent} from './component/one-core/one-core.component';
import {BadgeModule} from "primeng/badge";
import {LoadingAirplaneComponent} from './component/one-core/loading-airplane/loading-airplane.component';
import {OneCoreCompleteComponent} from './component/one-core/one-core-complete/one-core-complete.component';
import {FileOcrComponent} from './component/one-core/file-ocr/file-ocr.component';
import {AgreementComponent} from './component/one-core/agreement/agreement.component';
import {AgreementTableComponent} from './component/one-core/agreement-table/agreement-table.component';
import {FlightPlanningComponent} from './component/flight-planning/flight-planning.component';
import {AvatarModule} from "primeng/avatar";
import {AgreementHeaderComponent} from "./component/agreement-header/agreement-header.component";
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {
  CompanyQrsOperationComponent
} from "./component/dashboard/dashboard-search-operation/company-qrs-operation.component";
import {TkPieComponent} from "./component/dashboard/tk-pie/tk-pie.component";
import {OtherPieComponent} from "./component/dashboard/other-pie/other-pie.component";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";

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
    OneCoreComponent,
    LoadingAirplaneComponent,
    OneCoreCompleteComponent,
    FileOcrComponent,
    AgreementComponent,
    AgreementTableComponent,
    FlightPlanningComponent,
    AgreementComponent,
    AgreementHeaderComponent,
    DashboardComponent,
    CompanyQrsOperationComponent,
    TkPieComponent,
    OtherPieComponent
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
    BadgeModule,
    AvatarModule,
    NgOptimizedImage,
    VgControlsModule,
    VgBufferingModule,
    VgCoreModule,
    VgOverlayPlayModule,
  ],
  providers: [CargoStatusService, MessageService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
