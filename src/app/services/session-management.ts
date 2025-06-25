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
    localStorage.removeItem('session_active'); // persist
  }

  // Optional helper
  isAuthenticated(): boolean {
    console.log(this.authStatus.value);
    return this.authStatus.value;
  }
}

