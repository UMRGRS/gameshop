import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameData } from '../../interfaces/game-data';


@Component({
  selector: 'app-sections-card',
  imports: [CommonModule],
  templateUrl: './sections-card.html',
  styleUrl: './sections-card.css'
})
export class SectionsCard {

@Input({required:true}) game_data:GameData | undefined;

}


