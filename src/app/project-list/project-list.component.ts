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

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.projectId);
    this.projects = this.projectService.getProjects();
  }

  editProject(projectId: string) {
    this.router.navigate(['/edit-project', projectId]);
  }
}
