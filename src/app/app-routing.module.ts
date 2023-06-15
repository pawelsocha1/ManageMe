import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from 'src/app/edit-project/edit-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import {EditFunctionalityComponent} from './edit-functionality/edit-functionality.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'create-functionality', component: CreateFunctionalityComponent },
  { path: 'edit-functionality/:id', component: EditFunctionalityComponent },
  { path: 'functionality-list', component: FunctionalityListComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'functionality-details/:functionalityId', component: FunctionalityDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
