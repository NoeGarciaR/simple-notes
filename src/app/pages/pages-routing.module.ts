import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Internal Pages Components
 */
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
/**
 * Internar Render Pages
 */
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path:'', component: PagesComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'archive', component: ArchiveComponent },
    { path:'**', redirectTo: 'home' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }