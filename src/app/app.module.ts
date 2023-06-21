import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterByStatusPipe } from './filter-by-status.pipe';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserPanelComponent } from './user-panel.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    CreateProjectComponent,
    EditProjectComponent,
    CreateFunctionalityComponent,
    FunctionalityListComponent,
    CreateTaskComponent,
    TaskListComponent,
    FunctionalityDetailsComponent,
    EditFunctionalityComponent,
    EditTaskComponent,
    FilterByStatusPipe,
    LoginFormComponent,
    RegistrationFormComponent,
    UserPanelComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
