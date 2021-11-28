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

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  @Input() color: string = 'Sin Color';

  constructor(public activeModal: NgbActiveModal, public noteService: NotesService) { }

  ngOnInit(): void {
  }

  createNote( $event: NoteInterface ) {
    this.noteService.addNote($event).subscribe( response => {
      this.activeModal.close();
    });
  }

}
