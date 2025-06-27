import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-inside-header',
  imports: [],
  templateUrl: './inside-header.html',
  styleUrl: './inside-header.css'
})
export class InsideHeader {
  constructor(private auth_service:AuthService , private router: Router, private cart_service:CartService){}
  
    logout(){
      this.cart_service.removeCart();
      this.auth_service.logout();
      this.router.navigate([''])
    }
    
    toLibrary(){
      this.router.navigate(['library'])
    }

    toCart(){
    this.router.navigate(['cart'])
    }
}
