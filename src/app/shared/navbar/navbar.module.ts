import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Components
 */
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import {  NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    FontAwesomeModule
  ]
})
export class NavbarModule { }
