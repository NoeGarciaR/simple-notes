import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Component
 */
import { AddItemModalComponent } from './add-item-modal.component';
/**
 * Bootstrap Modules
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * Internal Components Module
 */
import { NoteFormModule } from '../note-form/note-form.module';
import { NotesService } from 'src/app/core/services/notes.service';



@NgModule({
  declarations: [
    AddItemModalComponent
  ],
  exports: [
    AddItemModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NoteFormModule
  ],
  providers: [
    NotesService
  ]
})
export class AddItemModalModule { }
