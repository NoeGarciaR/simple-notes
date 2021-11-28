import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';
import { NoteInterface } from 'src/app/shared/interfaces/note';
/**
 * Const Swal Defined
 */
 import Swal from "sweetalert2";
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  /**
  * @memberof ArchiveComponent
  * @property notes
  * @type NoteInterface { array }
  * @default []
  * @description save notes, response to NotesService
  */ 
  notes: NoteInterface[] = [];
  /**  
  * @memberof ArchiveComponent
  * @method constructor
  * @param inyect noteService { NotesService }
  * @returns { void }
  * @description 
  * Initialice this.notes and order response to NoteService
  */
  constructor( private noteService: NotesService ) { }
  /**
  * @memberof ArchiveComponent
  * @method ngOnInit
  * @param { void }
  * @returns { void }
  * @description 
  * Initialice this.notes and order response to NoteService
  */
  ngOnInit(): void {
    this.noteService.getInactiveNotes().subscribe( (notes: NoteInterface[]) => {
      this.notes = notes.sort(this.noteService.oderByDate);
    });
   }
  /**
  * @memberof ArchiveComponent
  * @method updateNote
  * @param { void }
  * @returns { void }
  * @description 
  * Update to Selected Note
  */
   updateNote( $event: NoteInterface ): void {
    this.noteService.updateNote($event).subscribe( () => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The note has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    } );
  }
  /**
   * @memberof HomeComponent
   * @method deteteNote
   * @param { void }
   * @returns { void }
   * @description 
   * Delete to Selected Note and onfirm delete
   */
  deteteNote( $event: NoteInterface ): void {
    Swal.fire({
      title: 'Are you sure to delete this note?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.noteService.deleteNote($event).subscribe(  );
        Swal.fire(
          'Deleted!',
          'Your note has been deleted.',
          'success'
        )
      }
    });
  }

}
