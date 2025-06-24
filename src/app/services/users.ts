import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users_collection: CollectionReference<Users>;
  
  constructor(private firestore: Firestore) {
    this.users_collection = collection(this.firestore, 'users') as CollectionReference<Users>;
  }

  async createUser(data: Users): Promise<void> {
    const game_doc_ref = doc(this.users_collection, data.uid); // custom-id

    await setDoc(game_doc_ref, data);
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
}