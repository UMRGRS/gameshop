import { Component, Input } from '@angular/core';
import { Games } from '../../interfaces/games';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input({ required: true })
  game_data!: Games;
}