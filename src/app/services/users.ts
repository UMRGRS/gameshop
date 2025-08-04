import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, CollectionReference, DocumentReference, updateDoc } from '@angular/fire/firestore';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users_collection: CollectionReference<Users>;
  
  constructor(private firestore: Firestore) {
    this.users_collection = collection(this.firestore, 'users') as CollectionReference<Users>;
  }

  async createUser(uid:string, name:string, email:string): Promise<Users> {
    const game_doc_ref = doc(this.users_collection, uid); // custom-id

    const data = {
        uid: uid,
        name: name,
        email: email,
        owned_games: 0,
        completed_games: 0,
        about: "A great bio is not something I can actually write so you're stuck with this one",
        user_games: []
    }

    await setDoc(game_doc_ref, data);

    return data;
  }

  async getUser(user_id: string): Promise<Users | null> {
    const user_doc_ref = doc(this.users_collection.firestore, `users/${user_id}`) as DocumentReference<Users>;
    const userSnap = await getDoc(user_doc_ref);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null; // User not found
    }
  }

  async updateUserGames(user_id: string, games:Array<string>){
    const user_doc_ref = doc(this.users_collection.firestore, `users/${user_id}`) as DocumentReference<Users>;

    const last_user = await this.getUser(user_id);

    const last_user_games = last_user?.user_games!=null ? last_user?.user_games : []
  
    const user_games = [...games, ...last_user_games]

    await updateDoc(user_doc_ref, {user_games:user_games});

    const update_user = await this.getUser(user_id);

    return update_user!;
  }

  async updateUser(user_id: string, new_name:string){
    const user_doc_ref = doc(this.users_collection.firestore, `users/${user_id}`) as DocumentReference<Users>;

    await updateDoc(user_doc_ref, {name :new_name});

    const update_user = await this.getUser(user_id);

    return update_user!;
  }
}