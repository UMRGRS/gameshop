import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Games } from '../interfaces/games';
import { GameService } from '../services/games';
import { CartService } from '../services/cart-service';
import { SessionManagement } from '../services/session-management';

@Component({
  selector: 'app-detalles-juego',
  templateUrl: './detalles-juego.html',
  styleUrls: ['./detalles-juego.css'],
    imports: [CommonModule]
})export class DetallesJuegoComponent implements OnInit{

  constructor(private router:Router, private route: ActivatedRoute, private games_service:GameService, private cd: ChangeDetectorRef, private cart_service:CartService, private session_management:SessionManagement){}
  
  game_data: Games | null = null;
  id:string|null = null;
  disable_buttons:boolean = true;

  async ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.disable_buttons = !this.session_management.isAuthenticated();
    this.cd.detectChanges();

    if(this.id == null){
      this.router.navigate(['']);
    }else{
      this.game_data = await this.games_service.getGame(this.id);
      this.cd.detectChanges();
    }
  }

  addToCart(game_data:Games){
    if(game_data!=undefined){
      this.cart_service.addGameToCart({id:game_data.reference, name:game_data.name, image:game_data.images[0], price:game_data.price, quantity:1});
      alert("Game: " + this.game_data?.name + " added to cart");
    }
  }

  buyGame(game_data:Games){
    if(game_data!=undefined){
      this.cart_service.addGameToCart({id:game_data.reference, name:game_data.name, image:game_data.images[0], price:game_data.price, quantity:1});
      this.router.navigate(['cart']);
    }
  }
}