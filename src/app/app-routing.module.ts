import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from 'src/app/edit-project/edit-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import {EditFunctionalityComponent} from './edit-functionality/edit-functionality.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';



const routes: Routes = [
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'create-functionality', component: CreateFunctionalityComponent },
  { path: '', redirectTo: '/functionalities', pathMatch: 'full' },
  { path: 'functionalities', component: FunctionalityListComponent },
  { path: 'functionalities/:id', component: FunctionalityDetailsComponent },
  { path: 'edit-functionality/:id', component: EditFunctionalityComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'tasks/:id', component: EditTaskComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
