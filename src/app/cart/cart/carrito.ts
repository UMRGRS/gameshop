import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../../interfaces/cart';
import { CartService } from '../../services/cart-service';
import { UserService } from '../../services/users';
import { SessionManagement } from '../../services/session-management';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit{
  cart_items: Cart[] = [];

  payment_loading:boolean = false;

  constructor(private cart_service:CartService, private cd: ChangeDetectorRef, private users_service:UserService, private session_management:SessionManagement, private router:Router){}

  ngOnInit(): void {
    this.cart_items = this.cart_service.getCompleteCart();
    this.cd.detectChanges();
  }

  removeItem(item_id: string): void {
    this.cart_items = this.cart_items.filter(item => item.id !== item_id);
    this.cart_service.updateCart(this.cart_items);
  }

  updateQuantity(item_id: string, quantity: number): void {
    const item = this.cart_items.find(item => item.id === item_id);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
    this.cart_service.updateCart(this.cart_items);
  }

  getSubtotal(): number {
    return this.cart_items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTaxes(): number {
    return this.getSubtotal() * 0.16; // 16% IVA
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTaxes();
  }

  async proceedToPayment() {
    this.payment_loading = true;
    this.cd.detectChanges();
    const user = this.session_management.getUserData();
    const update_user = await this.users_service.updateUserGames(user.uid, this.cart_items.map((item) => item.id));
    this.session_management.setAuthStatus(update_user, true);
    this.cart_service.removeCart();
    this.router.navigate(['library']);
  }
}