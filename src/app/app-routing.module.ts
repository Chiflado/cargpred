import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ContractDatabaseComponent } from './pages/contracts/contract-database/contract-database.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { ControllingComponent } from './pages/controlling/controlling.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ProjektsComponent } from './pages/movements/projekts/projekts.component';
import { TasksComponent } from './pages/planning/tasks/tasks.component';
import { TrackingComponent } from './pages/movements/tracking/tracking.component';
import { TrainMovementsComponent } from './pages/movements/train-movements/train-movements.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { ControllingPageComponent } from './pages/controlling/controlling-page/controlling-page.component';
import { InvoiceControllingComponent } from './pages/controlling/invoice-controlling/invoice-controlling.component';
import { ProjektControllingComponent } from './pages/controlling/projekt-controlling/projekt-controlling.component';
import { SapComponent } from './pages/billing/sap/sap.component';
import { CustomInvoiceComponent } from './pages/billing/custom-invoice/custom-invoice.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: StartingPageComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: 'controlling', component: ControllingComponent },
    { path: 'movements', component: MovementsComponent },
    { path: 'planning', component: PlanningComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'contract-database', component: ContractDatabaseComponent },
    { path: 'train-movements', component: TrainMovementsComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'projekts', component: ProjektsComponent },
    { path: 'controlling-page', component: ControllingPageComponent },
    { path: 'invoice-controlling', component: InvoiceControllingComponent },
    { path: 'projekt-controlling', component: ProjektControllingComponent},
    { path: 'sap', component: SapComponent },
    { path: 'custom-invoices', component: CustomInvoiceComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
