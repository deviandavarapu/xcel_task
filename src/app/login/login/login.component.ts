import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Xcelservice} from '../../services/xcelservice.service';
import {loginresponse} from '../../models/loginresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private xcelservice: Xcelservice      
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true; 
    if (this.form.invalid) {
        return;
    }
    this.xcelservice.login(this.form.controls['username'].value, this.form.controls['password'].value)    
    .subscribe( {  
      next: (v) => {//success part
    
      let loginresponse = v as loginresponse;
      this.xcelservice.setToken(loginresponse.accessToken);   
      this.router.navigate(['/dashboard']);
    },
      error: (e) => console.error(e),//error part
      complete: () => console.info('complete')//complete part
    });  
}
}