import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent
 
  ],
  imports: [
    LoginRoutingModule,
    CommonModule ,
    ReactiveFormsModule
 
  ]
})
export class LoginModule { }
