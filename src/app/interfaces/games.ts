import { DocumentReference } from '@angular/fire/firestore';

export interface Games {
    reference: DocumentReference<Games>
    name:string,
    images: Array<String>
    desc: string,
    reviews: number,
    reviews_type: string,
    price: number,
    about: string,
    req_min: string,
    req_rec: string
    featured: boolean,
    best_selling: boolean
    new: boolean
}
