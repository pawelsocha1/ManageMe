import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(projectId: string) {
    const projectIndex = this.projects.findIndex((p) => p.projectId === projectId);

    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
    }
  }

  editProject(projectId: string) {
    const project = this.projects.find((p) => p.projectId === projectId);

    if (project) {
      this.router.navigate(['/edit-project', project.projectId]);
    }
  }
}
