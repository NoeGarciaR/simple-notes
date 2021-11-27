import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Component
 */
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
