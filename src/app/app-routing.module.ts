import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { AddComponent } from './components/add/add.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [
  { path:'add', component: AddComponent },
  { path:'archive', component: ArchiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
