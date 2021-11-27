import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Components
 */
import { ArchiveComponent } from './archive.component';



@NgModule({
  declarations: [
    ArchiveComponent
  ],
  exports: [
    ArchiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArchiveModule { }
