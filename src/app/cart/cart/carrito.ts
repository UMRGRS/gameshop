// carrito.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Assassin\'s Creed Valhalla',
      price: 59.99,
      image: 'assets/images/game1.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      price: 49.99,
      image: 'assets/images/game2.jpg',
      quantity: 1
    },
    {
      id: 3,
      name: 'FIFA 24',
      price: 69.99,
      image: 'assets/images/game3.jpg',
      quantity: 1
    }
  ];

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTaxes(): number {
    return this.getSubtotal() * 0.16; // 16% IVA
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTaxes();
  }

  continueShopping(): void {
    // Navegar de vuelta a la tienda
    console.log('Continuar comprando...');
  }

  proceedToPayment(): void {
    // Proceder al pago
    console.log('Proceder al pago...');
  }
}