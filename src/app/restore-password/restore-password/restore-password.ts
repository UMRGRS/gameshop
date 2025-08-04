import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-restore-password',
  imports: [ReactiveFormsModule],
  templateUrl: './restore-password.html',
  styleUrl: './restore-password.css'
})
export class RestorePassword {
  reset_error:string|null = null;

  success = false;

  constructor(private auth_service:AuthService, private cd: ChangeDetectorRef){}

  reset_form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  async onSubmitResetForm(){
    if(this.reset_form.valid){
      const response = await this.auth_service.resetPassword(this.reset_form.value.email!);
      if(response.error!=null){
        this.reset_error = response.error;
        this.cd.detectChanges();
      }else{ 
        this.success = true 
        this.cd.detectChanges();
      }
    } 
  }

}
