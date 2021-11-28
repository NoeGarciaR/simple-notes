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
 * Firebase
 */
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
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
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    // provideFirebaseApp(() => initializeApp( environment.firebaseConfig )),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
