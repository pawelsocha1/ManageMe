// delete-project.component.ts

import { Component, Input } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-project',
  template: `
    <button (click)="deleteProject()">Delete</button>
  `
})
export class DeleteProjectComponent {
  @Input() projectId!: string;

  constructor(private projectService: ProjectService, private router: Router) {}

  deleteProject() {
    if (this.projectId) {
      this.projectService.deleteProject(this.projectId);
      this.router.navigate(['/projects']);
    }
  }
}
