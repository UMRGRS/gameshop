import { Component } from '@angular/core';
import { SectionsCard } from "../sections-card/sections-card";
import { GameData } from '../../interfaces/game-data';

@Component({
  selector: 'app-sections',
  imports: [SectionsCard],
  templateUrl: './sections.html',
  styleUrl: './sections.css'
})
export class Sections {
best_selling_games: GameData[] = [
    {
      id: 1,
      name: 'Assassin\'s Creed Valhalla',
      price: 59.99,
      image: 'image_1.jpg',
      description: 'No description'
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      price: 49.99,
      image: 'image_2.jpg',
      description: 'No description'
    },
    {
      id: 3,
      name: 'FIFA 24',
      price: 69.99,
      image: 'image_3.jpg',
      description: 'No description'
    }
  ];

new_games: GameData[] = [
    {
      id: 1,
      name: 'Dune: Awakening',
      price: 39.99,
      image: 'image_1.jpg',
      description: 'No description'
    },
    {
      id: 2,
      name: 'Shadowverse: Worlds Beyond',
      price: 10.99,
      image: 'image_2.jpg',
      description: 'No description'
    },
    {
      id: 3,
      name: 'Soulstone Survivors',
      price: 7.99,
      image: 'image_3.jpg',
      description: 'No description'
    }
  ];
}
