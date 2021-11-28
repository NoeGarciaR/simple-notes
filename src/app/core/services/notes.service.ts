import { Injectable } from '@angular/core';
/**
 * Firebase Modules and compat
 */
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

import { NoteInterface } from 'src/app/shared/interfaces/note';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor( public afs: AngularFirestore) {
  }

  addNote(note: NoteInterface): Observable<any> {
    let itemsCollection = this.afs.collection<NoteInterface>(environment.path_colection);
    return from(itemsCollection.add(note));
  }
}
