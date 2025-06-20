import { Component } from '@angular/core';
import { DetallesJuegoComponent } from '../detalles-juego/detalles-juego';

@Component({
  selector: 'app-home',
  imports: [DetallesJuegoComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
