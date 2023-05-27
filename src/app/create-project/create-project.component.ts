import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createProject() {
    if (this.projectForm.invalid) {
      return;
    }

    const project: Project = {
      projectId: this.projectForm.value.projectId,
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
    };

    this.projectService.createProject(project);
  }
}
