import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectId: string;
  projectForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.projectId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    const project: Project | undefined = this.projectService.getProjects().find(p => p.projectId === this.projectId);
    if (project) {
      this.projectForm.patchValue({
        name: project.name,
        description: project.description
      });
    }
  }

  updateProject() {
    if (this.projectForm.valid) {
      const updatedProject: Project = {
        projectId: this.projectId,
        name: this.projectForm.value.name,
        description: this.projectForm.value.description,
      };
      this.projectService.updateProject(updatedProject);
      this.router.navigate(['/projects']);
    }
  }
}