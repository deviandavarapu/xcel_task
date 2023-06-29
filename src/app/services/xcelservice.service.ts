import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from '../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class Xcelservice {

  private header = {'Content-Type': 'application/json' };
  private headerwithtoken = {'Content-Type': 'application/json','Authorization':'Bearer key' };

  constructor(
    private router: Router,
    private http: HttpClient
  ) { } 

login(username: string, password: string): Observable<any> {

  let req = {"username":username,"password":password};

  return this.http.post(`${environment.apiUrl}/test/auth/login`, req, { headers: this.header });
}
setToken(token?:string){



localStorage.setItem('token',token!);

}
getAll_departments() {
  this.headerwithtoken.Authorization = localStorage.getItem('token')!;
  return this.http.get(`${environment.apiUrl}/admin/department/list`, { headers: this.headerwithtoken });
}












}
