import { DocumentReference } from '@angular/fire/firestore';
import { Games } from './games';

export interface Users {
    uid: string,
    name:string,
    email: string,
    owned_games:number,
    completed_games:number,
    about:string,
    user_games: Array<DocumentReference<Games>>
}
