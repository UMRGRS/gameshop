import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Header } from "./global/header/header";
import { Footer } from "./global/footer/footer";
import { SessionManagement } from './services/session-management';
import { InsideHeader } from "./global/inside-header/inside-header";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, InsideHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'gameshop';
  is_session_active:boolean = false;
  private authSubscription?: Subscription;

  constructor(private session_management:SessionManagement){}

  ngOnInit(): void {
    this.authSubscription = this.session_management.isAuthenticated$
      .subscribe(status => {
        this.is_session_active = status;
      });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
