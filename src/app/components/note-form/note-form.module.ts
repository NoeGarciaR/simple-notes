/**
 * Angular Modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * Declared Component
 */
import { NoteFormComponent } from './note-form.component';
/**
 * External Modules
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NoteFormComponent
  ],
  exports: [
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class NoteFormModule { }
