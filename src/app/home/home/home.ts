import { Component } from '@angular/core';
import { HomeCarrousel } from "../home-carrousel/home-carrousel";
import { Sections } from "../sections/sections";

@Component({
  selector: 'app-home',
  imports: [HomeCarrousel, Sections],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
