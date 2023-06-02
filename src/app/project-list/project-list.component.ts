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

  deleteProject(projectIndex: number) {
    if (projectIndex !== -1) {
      const deletedProject = this.projects.splice(projectIndex, 1)[0];
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }

  editProject(projectId: string) {
    this.router.navigate(['/edit-project', projectId]);
  }

  
}
