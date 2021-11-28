import { Injectable } from '@angular/core';
/**
 * RXJS Elements
 */
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Firebase Modules and compat
 */
import { AngularFirestore } from '@angular/fire/compat/firestore';
/**
 * Note Interface
 */
import { NoteInterface } from 'src/app/shared/interfaces/note';
/**
 * Enviroment
 */
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  /**
   * @memberof NotesService
   * @method constructor
   * @param afs {AngularFirestore}
   * @returns { void }
   * @description 
   * inyect AngularFirestore to afs
   */
  constructor( public afs: AngularFirestore) {
  }
  /**
   * @memberof NotesService
   * @method constructor
   * @param note: { NoteInterface }
   * @returns Observable { any }
   * @description 
   * Add new Note to Firestore
   * Return observable
   */
  addNote(note: NoteInterface): Observable<any> {
    let itemsCollection = this.afs.collection<NoteInterface>(environment.path_colection);
    return from(itemsCollection.add(note));
  }
  /**
   * @memberof NotesService
   * @method updateNote
   * @param note: { NoteInterface }
   * @returns Observable { any }
   * @description 
   * Update Note to Firestore
   * Return observable
   */
   updateNote(note: NoteInterface): Observable<any> {
    let itemsCollection = this.afs.collection<NoteInterface>(environment.path_colection);
    /** Clone object note */
    let _note = {
      ...note
    }
    /** Delete property id */
    delete _note.id;
    /** Update date of note */
    _note.date = new Date().getTime();
    // @ts-ignore
    return from(itemsCollection.doc(note.id).update(_note));
  }
  /**
   * @memberof NotesService
   * @method getActiveNotes
   * @param { void }
   * @returns Observable { NoteInterface[] }
   * @description 
   * Get notes not archived
   */
  getActiveNotes(): Observable<NoteInterface[]> {
    return this.afs.collection<NoteInterface>(environment.path_colection
      ,res => res.where('archived', '==', false)
      ).snapshotChanges().pipe(
      map(actions => actions.map( note => {
        const data = note.payload.doc.data() as NoteInterface;
        const id = note.payload.doc.id;
        return { id, ...data};
      }
      ))
    )
  }
  /**
   * @memberof NotesService
   * @method getInactiveNotes
   * @param { void }
   * @returns Observable { NoteInterface[] }
   * @description 
   * Get notes are archived
   */
  getInactiveNotes(): Observable<NoteInterface[]> {
    return this.afs.collection<NoteInterface>(environment.path_colection
      ,res => res.where('archived', '==', true)
      ).snapshotChanges().pipe(
      map(actions => actions.map( note => {
        const data = note.payload.doc.data() as NoteInterface;
        const id = note.payload.doc.id;
        return { id, ...data};
      }
      ))
    )
  }
  /**
   * @memberof NotesService
   * @method oderByDate
   * @param x { NoteInterface }, y { NoteInterface }
   * @returns number
   * @description 
   * order by decs array
   */
  oderByDate(x: NoteInterface, y: NoteInterface): number {
    return (x.date > y.date)? -1 : (x.date < y.date)? 1 :  0;
  }
}
