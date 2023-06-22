import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AuthGuard } from './services/auth.guard';
import { TaskDetailsComponent } from './task-details/task-details.component';


const appRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'create-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
  { path: 'edit-project/:id', component: EditProjectComponent, canActivate: [AuthGuard] },
  { path: 'create-functionality', component: CreateFunctionalityComponent, canActivate: [AuthGuard] },
  { path: 'edit-functionality/:id', component: EditFunctionalityComponent, canActivate: [AuthGuard] },
  { path: 'functionality-list', component: FunctionalityListComponent, canActivate: [AuthGuard] },
  { path: 'create-task', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: 'task-list', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'edit-task/:id', component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: 'functionality-details/:functionalityId', component: FunctionalityDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'task-details/:taskId', component: TaskDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/task-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
