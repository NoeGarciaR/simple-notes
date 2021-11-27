import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Components
 */
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
