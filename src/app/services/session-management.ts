import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionManagement {
  private authStatus = new BehaviorSubject<boolean>(this.loadSession());

  public isAuthenticated$ = this.authStatus.asObservable();

  private loadSession(): boolean {
    // Check for token or session storage flag
    return localStorage.getItem('session_active') === 'true';
  }

  setAuthStatus(status: boolean): void {
    this.authStatus.next(status);
    localStorage.setItem('session_active', String(status)); // persist
  }

  // Optional helper
  isAuthenticated(): boolean {
    return this.authStatus.value;
  }
}

