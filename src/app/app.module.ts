import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { CreateFunctionalityComponent } from './create-functionality/create-functionality.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterByStatusPipe } from './filter-by-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CreateFunctionalityComponent,
    FunctionalityListComponent,
    CreateTaskComponent,
    TaskListComponent,
    FunctionalityDetailsComponent,
    EditFunctionalityComponent,
    EditTaskComponent,
    FilterByStatusPipe
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
