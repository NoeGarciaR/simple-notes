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
  ]
})
export class AddItemModalModule { }
