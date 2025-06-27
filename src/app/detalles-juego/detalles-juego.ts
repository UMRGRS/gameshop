import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Games } from '../interfaces/games';
import { GameService } from '../services/games';

@Component({
  selector: 'app-detalles-juego',
  templateUrl: './detalles-juego.html',
  styleUrls: ['./detalles-juego.css'],
    imports: [CommonModule, RouterLink]
})export class DetallesJuegoComponent implements OnInit{

  constructor(private router:Router, private route: ActivatedRoute, private games_service:GameService, private cd: ChangeDetectorRef){}
  
  game_data: Games | null = null;
  id:string|null = null;

  async ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.cd.detectChanges();

    if(this.id == null){
      this.router.navigate(['']);
    }else{
      this.game_data = await this.games_service.getGame(this.id);
      this.cd.detectChanges();
    }
  }
}