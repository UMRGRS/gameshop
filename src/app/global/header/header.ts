import { Component } from '@angular/core';
import { SessionManagement } from '../../services/session-management';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private session_management:SessionManagement, private router:Router){}

  login(){
    this.session_management.setAuthStatus(true);
    this.router.navigate([''])
  }

  toCart(){
    this.router.navigate(['cart'])
  }
}
