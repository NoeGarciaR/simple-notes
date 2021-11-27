import { Injectable } from '@angular/core';
import { collection as collectionFirebase , collectionData, Firestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  item$: any;

  constructor( firestore: Firestore ) {
    const collection = collectionFirebase( firestore, environment.path_colection);
    this.item$ = collectionData(collection);
  }
}
