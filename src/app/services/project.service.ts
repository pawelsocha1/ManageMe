import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  private currentProject: Project | null = null;

  constructor() {
    this.projects = []; 
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getCurrentProject(): Project | null {
    return this.currentProject;
  }

  setCurrentProject(project: Project): void {
    this.currentProject = project;
  }

  createProject(project: Project): void {
    this.projects.push(project);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.projectId === project.projectId);
    if (index !== -1) {
      this.projects[index] = project;
    }
  }

  deleteProject(projectId: string) {
    const index = this.projects.findIndex(p => p.projectId === projectId);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

}

