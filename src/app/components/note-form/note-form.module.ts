/**
 * Angular Modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class NoteFormModule { }
