import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, CollectionReference, DocumentReference, query, where, getDocs } from '@angular/fire/firestore';
import { Games } from '../interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games_collection: CollectionReference<Games>;

  constructor(private firestore: Firestore) {
    this.games_collection = collection(this.firestore, 'games') as CollectionReference<Games>;
  }

  async createGame(data: Omit<Games, 'reference'>): Promise<void> {
    const game_doc_ref = doc(this.games_collection); // Auto-ID

    await setDoc(game_doc_ref, data);
  }

  async getGame(game_id: string): Promise<Games | null> {
    const game_ref = doc(this.firestore, 'games', game_id);
    
    const game_snap = await getDoc(game_ref);
    if (game_snap.exists()) {
      return {
        ...game_snap.data(),
        reference: game_ref.id
      } as Games
    } else {
      return null; // Game not found
    }
  }

  async getFeaturedGames(): Promise<Array<Games> | null> {
    const q = query(collection(this.firestore, 'games'), where("featured", "==", true));

    const query_snapshot = await getDocs(q);

    if (!query_snapshot.empty) {
    const games: Games[] = query_snapshot.docs.map(doc_snap => {
      const data = doc_snap.data() as Omit<Games, 'reference'>;
      return {
        ...data,
        reference: doc_snap.ref.id,
      } as Games
    });

    return games;
    } else {
      return null;
    }
  }

  async getBestSellingGames(): Promise<Array<Games> | null> {
    const q = query(collection(this.firestore, 'games'), where("best_selling", "==", true));

    const query_snapshot = await getDocs(q);

    if (!query_snapshot.empty) {
    const games: Games[] = query_snapshot.docs.map(doc_snap => {
      const data = doc_snap.data() as Omit<Games, 'reference'>;
      return {
        ...data,
        reference: doc_snap.ref.id,
      } as Games
    });

    return games;
    } else {
      return null;
    }
  }

  async getNewGames(): Promise<Array<Games> | null> {
    const q = query(collection(this.firestore, 'games'), where("new", "==", true));

    const query_snapshot = await getDocs(q);

    if (!query_snapshot.empty) {
    const games: Games[] = query_snapshot.docs.map(doc_snap => {
      const data = doc_snap.data() as Omit<Games, 'reference'>;
      return {
        ...data,
        reference: doc_snap.ref.id,
      } as Games
    });

    return games;
    } else {
      return null;
    }
  }
}