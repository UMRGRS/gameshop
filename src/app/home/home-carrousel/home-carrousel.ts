import { Component } from '@angular/core';
import { GameData } from '../../interfaces/game-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-carrousel',
  imports: [CommonModule],
  templateUrl: './home-carrousel.html',
  styleUrl: './home-carrousel.css'
})
export class HomeCarrousel {
top_games: GameData[] = [
    {
      id: 1,
      name: 'Deltarune',
      price: 29.99,
      image: 'test_img.png',
      description: 'Dive into the parallel story to UNDERTALE! Fight or spare your way through action-packed battles as you explore a mysterious world alongside an endearing cast of new and familiar characters. Chapters 1-4 will be available at launch, with more planned as free updates!'
    },
    {
      id: 2,
      name: 'Ark survival ascended',
      price: 40.99,
      image: 'test_img_2.png',
      description: 'ARK is reimagined from the ground-up into the next-generation of video game technology with Unreal Engine 5! Form a tribe, tame & breed hundreds of unique dinosaurs and primeval creatures, explore, craft, build, and fight your way to the top of the food-chain. Your new world awaits! '
    },
    {
      id: 3,
      name: 'Path of exile',
      price: 10.99,
      image: 'test_img_3.png',
      description: 'You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Path of Exile is an online Action RPG set in a dark fantasy world. '
    }
  ];
}

