import { Component, Input, OnInit } from '@angular/core';
/**
 * Boostrap Modal Service
 */
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from 'src/app/core/services/notes.service';
/**
 * Note interface
 */
import { NoteInterface } from 'src/app/shared/interfaces/note';
/**
 * Const Swal Defined
 */
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  /**
   * @memberof AddItemModalComponent
   * @property color
   * @type { string }
   * @default '#80ADD0'
   */ 
  @Input() color: string = '#80ADD0';
  /**
   * @memberof AddItemModalComponent
   * @method constructor
   * @params activeModal { NgbActiveModa }, noteService { NotesService }
   * @returns { void }
   */
  constructor(public activeModal: NgbActiveModal, public noteService: NotesService) { }
  /**
   * @memberof AddItemModalComponent
   * @method ngOnInit
   * @params { void }
   * @returns { void }
   */
  ngOnInit(): void {
  }
  /**
   * @memberof AddItemModalComponent
   * @method createNote
   * @param $event { NoteInterface }
   * @returns { void }
   * @description 
   * Create new Note in to FireStore
   */
  createNote( $event: NoteInterface ): void {
    this.noteService.addNote($event).subscribe( () => {
      this.activeModal.close();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The note has been created',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
