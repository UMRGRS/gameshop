import { Component, ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

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
  
  constructor(private auth_service:AuthService, private cd: ChangeDetectorRef){}

  async onSubmitLogin(){
    if(this.login_form.valid){
      const response = await this.auth_service.loginWithEmailPassword(this.login_form.value.email!, this.login_form.value.password!);
      if(response.error!=null){
        this.login_error = response.error;
        this.cd.detectChanges();
      }else{
        window.location.reload();
      }
    } 
  }

  async onSubmitSignup(){
    if(this.signup_form.valid){
      const response = await this.auth_service.signupWithEmailPassword(this.signup_form.value.name!, this.signup_form.value.email!, this.signup_form.value.password!);
      if(response.error!=null){
        this.signup_error = response.error;
        this.cd.detectChanges();
      }else{
        window.location.reload();
      }
    }
  }
}

