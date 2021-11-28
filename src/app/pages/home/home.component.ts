import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';
import { NoteInterface } from 'src/app/shared/interfaces/note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * @memberof HomeComponent
   * @property notes
   * @type NoteInterface { array }
   * @default []
   * @description save notes, response to NotesService
   */ 
  notes: NoteInterface[] = [];
  /**
   * @memberof HomeComponent
   * @method constructor
   * @param inyect noteService { NotesService }
   * @returns { void }
   * @description 
   * Initialice this.notes and order response to NoteService
   */
  constructor( private noteService: NotesService ) { }
  /**
   * @memberof HomeComponent
   * @method ngOnInit
   * @param { void }
   * @returns { void }
   * @description 
   * Initialice this.notes and order response to NoteService
   */
  ngOnInit(): void {
    this.noteService.getActiveNotes().subscribe( (notes: NoteInterface[]) => {
      this.notes = notes.sort(this.noteService.oderByDate);
    });
  }
 /**
   * @memberof HomeComponent
   * @method updateNote
   * @param { void }
   * @returns { void }
   * @description 
   * Update to Selected Note
   */
  updateNote( $event: NoteInterface ) {
    console.table($event);
  }
}
