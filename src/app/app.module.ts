import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanningComponent } from './pages/planning/planning.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ControllingComponent } from './pages/controlling/controlling.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './pages/planning/tasks/tasks.component';
import { ContractDatabaseComponent } from './pages/contracts/contract-database/contract-database.component';
import { TrainMovementsComponent } from './pages/movements/train-movements/train-movements.component';
import { TrackingComponent } from './pages/movements/tracking/tracking.component';
import { ProjektsComponent } from './pages/movements/projekts/projekts.component';
import { ControllingPageComponent } from './pages/controlling/controlling-page/controlling-page.component';
import { InvoiceControllingComponent } from './pages/controlling/invoice-controlling/invoice-controlling.component';
import { ProjektControllingComponent } from './pages/controlling/projekt-controlling/projekt-controlling.component';
import { SapComponent } from './pages/billing/sap/sap.component';
import { CustomInvoiceComponent } from './pages/billing/custom-invoice/custom-invoice.component';
import { TableComponent } from './layout/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavbarComponent,
    StartingPageComponent,
    PlanningComponent,
    ContractsComponent,
    MovementsComponent,
    BillingComponent,
    ControllingComponent,
    UnderConstructionComponent,
    TasksComponent,
    ContractDatabaseComponent,
    TrainMovementsComponent,
    TrackingComponent,
    ProjektsComponent,
    ControllingPageComponent,
    InvoiceControllingComponent,
    ProjektControllingComponent,
    SapComponent,
    CustomInvoiceComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
