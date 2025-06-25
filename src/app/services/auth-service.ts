// auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { UserService } from './users';
import { FirebaseError } from 'firebase/app';
import { SessionManagement } from './session-management';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private constructor(private auth: Auth, private user_service: UserService, private session_management: SessionManagement){}

  private _loginWithEmailPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  private _signupWithEmailPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

 async signupWithEmailPassword(name:string, email: string, password: string){
  try{
    const user_credential = await this._signupWithEmailPassword(email, password);

    const user = user_credential.user;
    
    await updateProfile(user, {displayName:name})

    const user_data = await this.user_service.createUser(user.uid , name, email);

    this.session_management.setAuthStatus(user_data, true);

    return {user:user, error:null};
  }catch(error){
    return {user:null, error:this.getSignupErrorMessage(error)} ;
  }
 }

 async loginWithEmailPassword(){

 }

 private getSignupErrorMessage(error: unknown): string {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          return 'This email address is already in use.';
        case 'auth/invalid-email':
          return 'The email address is not valid.';
        case 'auth/operation-not-allowed':
          return 'Email/password accounts are not enabled.';
        case 'auth/weak-password':
          return 'The password is too weak. Try using a stronger password.';
        default:
          return 'An unknown error occurred. Please try again.';
      }
    } else {
      return 'An unexpected error occurred.';
    } 
  }

}
