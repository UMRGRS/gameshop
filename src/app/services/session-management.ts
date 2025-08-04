import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class SessionManagement {
  private authStatus = new BehaviorSubject<boolean>(this.loadSession());

  public isAuthenticated$ = this.authStatus.asObservable();

  private loadSession(): boolean {
    // Check for token or session storage flag
    return localStorage.getItem('session_active') != null;
  }

  setAuthStatus(user: Users, status: boolean): void {
    this.authStatus.next(status);
    localStorage.setItem('session_active', JSON.stringify(user)); // persist
  }

  resetAuthStatus(): void {
    this.authStatus.next(false);
    localStorage.removeItem('session_active');
  }

  isAuthenticated(): boolean {
    return this.authStatus.value;
  }

  isAuthenticatedAndIsAdmin(): boolean {
    const user = this.getUserData();
    return this.authStatus.value && user.isAdmin;
  }

  isAuthenticatedAndIsMod(): boolean {
    const user = this.getUserData();
    return this.authStatus.value && user.isMod;
  }

  getUserData():Users{
    return JSON.parse(localStorage.getItem('session_active')!) as Users;
  }

}

