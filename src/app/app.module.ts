import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Import ngBoostrap
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * Shared Modules
 */
import { NavbarModule } from './shared/navbar/navbar.module';
/**
 * Components Modules
 */
import { ArchiveModule } from './components/archive/archive.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /** Shared Modules */
    NavbarModule,
    /** Components Modules */
    ArchiveModule,
    HomeModule,
    /** BoostrapModules */
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
