import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Games } from '../../interfaces/games';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sections-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './sections-card.html',
  styleUrl: './sections-card.css'
})
export class SectionsCard {
  @Input({ required: true })
  game_data!: Games;
}


