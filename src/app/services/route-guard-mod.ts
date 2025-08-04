import { Injectable } from '@angular/core';
import { SessionManagement } from './session-management';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardMod {

  constructor(private session_service:SessionManagement, private router:Router) { }

    canActivate():boolean{
    if(this.session_service.isAuthenticatedAndIsMod()){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
