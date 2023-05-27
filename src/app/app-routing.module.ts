import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from 'src/app/edit-project/edit-project.component';

const routes: Routes = [
  { path: 'edit-project/:id', component: EditProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
