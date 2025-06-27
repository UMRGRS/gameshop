import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart_key:string = 'cart';

  addGameToCart(game_id:string): void{
    var cart:Array<string> = localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem(this.cart_key)!) : [];

    cart.push(game_id);

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));
  }

  deleteGameFromCart(game_id:string): void{
    var cart:Array<string> = localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem(this.cart_key)!) : [];

    const updated_cart= cart.filter(item => item !== game_id);

    localStorage.setItem('cart', JSON.stringify(updated_cart));

    console.log(localStorage.getItem('cart'));
  }
  
}
