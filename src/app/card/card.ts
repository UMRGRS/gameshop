import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() gameTitle!: string;
  @Input() gameArt!: string;
  @Input() gameDescription!: string;
  constructor(){ }

}