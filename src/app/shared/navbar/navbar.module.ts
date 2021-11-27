import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Components
 */
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import {  NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddItemModalModule } from 'src/app/components/add-item-modal/add-item-modal.module';



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
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    AddItemModalModule,
    NgbCollapseModule
  ]
})
export class NavbarModule { }
