import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Games } from '../interfaces/games';
import { GameService } from '../services/games';
import { Cart } from '../services/cart';
import { SessionManagement } from '../services/session-management';

@Component({
  selector: 'app-detalles-juego',
  templateUrl: './detalles-juego.html',
  styleUrls: ['./detalles-juego.css'],
    imports: [CommonModule]
})export class DetallesJuegoComponent implements OnInit{

  constructor(private router:Router, private route: ActivatedRoute, private games_service:GameService, private cd: ChangeDetectorRef, private cart_service:Cart, private session_management:SessionManagement){}
  
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

  addToCart(game_id:string|undefined){
    if(game_id!=undefined){
      this.cart_service.addGameToCart(game_id);
      alert("Game added to cart successfully");
    }
  }

  buyGame(game_id:string|undefined){
    if(game_id!=undefined){
      this.cart_service.addGameToCart(game_id);
      this.router.navigate(['cart']);
    }
  }
}