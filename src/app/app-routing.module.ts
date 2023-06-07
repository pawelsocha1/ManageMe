import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from 'src/app/edit-project/edit-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';



const routes: Routes = [
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'create-functionality', component: CreateFunctionalityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
