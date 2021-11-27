import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Declared Component
 */
import { PagesComponent } from './pages.component';
/**
 * Pages routing
 */
import { PagesRoutingModule } from './pages-routing.module';
/**
 * Internal Declared Components
 */
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';



@NgModule({
  declarations: [
    /** Component Main */
    PagesComponent,
    /** Declared internal pages */
    HomeComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    /** Mai Pages Routin Module */
    PagesRoutingModule
  ]
})
export class PagesModule { }
