import { Component } from '@angular/core';
import {  ColDef } from 'ag-grid-community';
import { Observable, map } from 'rxjs';
import { Xcelservice} from '../../services/xcelservice.service';
import { department } from '../../models/department';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public paginationPageSize = 5;  
  public columnDefs: ColDef[] = [
    {headerName:"ID", field: 'id'},
    {headerName:"NAME", field: 'name'},
    {headerName:"STATUS", field: 'status' }
  ];
 
 public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  public rowData$!: Observable<any[]>;
 
  constructor(
    private xcelservice: Xcelservice      
) { 

 this.rowData$! = this.xcelservice.getAll_departments()
    .pipe(map((response) => {
    let department = response as department;
    console.log(department);
    console.log(department.data.rows);
      return department.data.rows;
  }));


}




}

