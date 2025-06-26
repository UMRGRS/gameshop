import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SectionsCard } from "../sections-card/sections-card";
import { GameService } from '../../services/games';
import { Games } from '../../interfaces/games';

@Component({
  selector: 'app-sections',
  imports: [SectionsCard],
  templateUrl: './sections.html',
  styleUrl: './sections.css'
})
export class Sections implements OnInit{

  constructor(private games_service:GameService, private cd: ChangeDetectorRef){}

  best_selling_games: Games[] | null= [];

  new_games: Games[] | null = [];

  async ngOnInit() {
    this.best_selling_games = await this.games_service.getBestSellingGames();
    this.new_games = await this.games_service.getNewGames();
    this.cd.detectChanges();
  }
}
