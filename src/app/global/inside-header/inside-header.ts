import { Component } from '@angular/core';
import { SessionManagement } from '../../services/session-management';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-header',
  imports: [],
  templateUrl: './inside-header.html',
  styleUrl: './inside-header.css'
})
export class InsideHeader {
  constructor(private session_management:SessionManagement, private router: Router){}
  
    logout(){
      this.session_management.setAuthStatus(false);
      this.router.navigate([''])
    }
    
    toLibrary(){
      this.router.navigate(['library'])
    }

    toCart(){
    this.router.navigate(['cart'])
    }
}
