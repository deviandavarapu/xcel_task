import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  
  imports: [
    DashboardRoutingModule,
    CommonModule,
    AgGridModule
  ]
})
export class DashboardModule { }


