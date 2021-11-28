import { Injectable } from '@angular/core';
/**
 * Firebase Modules and compat
 */
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { NoteInterface } from 'src/app/shared/interfaces/note';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor( public afs: AngularFirestore) {
  }

  addNote(note: NoteInterface) {
    let itemsCollection = this.afs.collection<NoteInterface>(environment.path_colection);
    itemsCollection.add(note).then( resp => console.log(resp) );
  }
}
