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



@NgModule({
  declarations: [
    NoteFormComponent
  ],
  exports: [
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NoteFormModule { }
