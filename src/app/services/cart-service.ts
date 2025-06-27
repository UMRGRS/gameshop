import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addGameToCart(game: Cart): void {
    const cart: Array<{ id: string, quantity: number }> = 
      localStorage.getItem('cart') != null 
        ? JSON.parse(localStorage.getItem('cart')!) 
        : [];

    const existing_item = cart.find(item => item.id === game.id);

    if (existing_item) {
      existing_item.quantity += 1;
    } else {
      cart.push(game);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));
  }

  deleteGameFromCart(game: Cart): void {
    const cart: Array<{ id: string, quantity: number }> = 
      localStorage.getItem('cart') != null 
        ? JSON.parse(localStorage.getItem('cart')!) 
        : [];

    const index = cart.findIndex(item => item.id === game.id);

    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1); // Remove item if quantity reaches 0
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));
  }
  
  getCompleteCart(){
    return localStorage.getItem('cart')!= null ? JSON.parse(localStorage.getItem('cart')!):[];
  }

  updateCart(cart:Array<Cart>){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeCart(){
    localStorage.removeItem('cart');
  }
}
