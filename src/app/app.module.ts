import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectService } from 'src/app/services/project.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
