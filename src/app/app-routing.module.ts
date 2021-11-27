import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { ArchiveComponent } from './components/archive/archive.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'archive', component: ArchiveComponent },
  { path:'**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
