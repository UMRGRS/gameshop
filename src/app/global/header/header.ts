import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';


import { SessionManagement } from '../../services/session-management';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  login_error:string|null = null;
  signup_error: string|null = null;

  login_form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  signup_form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor(private router:Router, private auth_service:AuthService, private cd: ChangeDetectorRef){}

  onSubmitLogin(){
    if(this.login_form.valid){
      console.warn(this.login_form.value);
    } 
  }

  async onSubmitSignup(){
    if(this.signup_form.valid){
      const response = await this.auth_service.signupWithEmailPassword(this.signup_form.value.name!, this.signup_form.value.email!, this.signup_form.value.password!);
      if(response.error!=null){
        this.signup_error = response.error;
        this.cd.detectChanges();
      }else{
        this.router.navigate(['']);
      }
    }
  }

  //login(){
  //  this.session_management.setAuthStatus(true);
  //  this.router.navigate([''])
  //}

  
}

