import { Component } from '@angular/core';
import { ProfileLibrary } from "../profile-library/profile-library";

@Component({
  selector: 'app-home',
  imports: [ProfileLibrary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
