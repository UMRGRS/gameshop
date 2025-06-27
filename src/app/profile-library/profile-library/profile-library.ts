import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Card } from "../card/card";
import { SessionManagement } from '../../services/session-management';
import { Users } from '../../interfaces/users';
import { Games } from '../../interfaces/games';
import { GameService } from '../../services/games';


@Component({
  selector: 'app-profile-library',
  imports: [Card],
  templateUrl: './profile-library.html',
  styleUrl: './profile-library.css'
})
export class ProfileLibrary implements OnInit{
  user:Users|null = null;

  owned_games: Array<Games> = [];

  constructor(private session_management:SessionManagement, private cd: ChangeDetectorRef, private games_service:GameService){}

  async ngOnInit() {
    this.user = this.session_management.getUserData();
    this.owned_games = await this.games_service.getGamesList(this.user.user_games);
    console.log(this.owned_games);
    this.cd.detectChanges();
  }
}
