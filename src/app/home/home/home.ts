import { Component } from '@angular/core';
import { HomeCarrousel } from "../home-carrousel/home-carrousel";

@Component({
  selector: 'app-home',
  imports: [HomeCarrousel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
