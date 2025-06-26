import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Games } from '../../interfaces/games';
import { GameService } from '../../services/games';

@Component({
  selector: 'app-home-carrousel',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-carrousel.html',
  styleUrl: './home-carrousel.css'
})
export class HomeCarrousel implements OnInit{
  
  constructor(private games_service:GameService, private cd: ChangeDetectorRef){}

  top_games: Games[] | null = [];

  async ngOnInit() {
    this.top_games = await this.games_service.getFeaturedGames();
    this.cd.detectChanges();
  }
  
}

