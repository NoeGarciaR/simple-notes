/**
 * Angualar Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Internal Modules and Defined component
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**
 * Import ngBoostrap
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * Sweet Alert Modules
 */
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
/**
 * Enviroment
 */
import { environment } from 'src/environments/environment';
/**
 * Shared Modules
 */
import { NavbarModule } from './shared/navbar/navbar.module';
/**
 * Pages Modules
 */
import { PagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /** Router Main */
    AppRoutingModule,
    /** Shared Modules */
    NavbarModule,
    /** Pages Module */
    PagesModule,
    /** BoostrapModules */
    NgbModule,
    /** Firebase Modules */
    AngularFireModule.initializeApp(environment.firebaseConfig),
    /** SweetAlert2Module  */
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
