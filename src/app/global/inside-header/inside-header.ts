import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CartService } from '../../services/cart-service';
import { SessionManagement } from '../../services/session-management';

@Component({
  selector: 'app-inside-header',
  imports: [RouterLink],
  templateUrl: './inside-header.html',
  styleUrl: './inside-header.css'
})
export class InsideHeader implements OnInit{
  constructor(private auth_service:AuthService , private router: Router, private cart_service:CartService,  private cd: ChangeDetectorRef, private session_management: SessionManagement){}

  isAdmin:boolean = false;
  isModerator:boolean = false;
  
  logout(){
    this.cart_service.removeCart();
    this.auth_service.logout();
    this.router.navigate([''])
  }

  ngOnInit() {
    this.isAdmin = this.session_management.isAuthenticatedAndIsAdmin();
    this.isModerator = this.session_management.isAuthenticatedAndIsMod();
    this.cd.detectChanges();
  }
}
