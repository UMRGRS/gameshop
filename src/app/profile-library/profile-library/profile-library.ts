import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

import { Card } from "../card/card";
import { SessionManagement } from '../../services/session-management';
import { Users } from '../../interfaces/users';
import { Games } from '../../interfaces/games';
import { GameService } from '../../services/games';
import { UserService } from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-library',
  imports: [Card, ReactiveFormsModule],
  templateUrl: './profile-library.html',
  styleUrl: './profile-library.css'
})
export class ProfileLibrary implements OnInit{
  user:Users|null = null;

  owned_games: Array<Games> = [];

  show_change_name: boolean = false;

  name_form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private session_management:SessionManagement, private cd: ChangeDetectorRef, private games_service:GameService, private users_service:UserService, private router:Router){}

  async ngOnInit() {
    this.user = this.session_management.getUserData();
    this.owned_games = await this.games_service.getGamesList(this.user.user_games);
    console.log(this.owned_games);
    this.cd.detectChanges();
  }

  toggleChangeName(){
    this.show_change_name = !this.show_change_name;
  }

  async updateUserName(){
    if(this.name_form.valid){
      const user = this.session_management.getUserData();
      const update_user = await this.users_service.updateUser(user.uid, this.name_form.value.name!);
      this.session_management.setAuthStatus(update_user, true);
      window.location.reload();
    }
  }
}
