import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { ArchiveComponent } from './components/archive/archive.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

const routes: Routes = [
  { path:'note-form', component: NoteFormComponent },
  { path:'archive', component: ArchiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
