import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project.model';
import { ProjectService } from 'src/services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[]=[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project);
    // Dodaj odpowiedni kod obsługujący usunięcie projektu
  }
}
