import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Functionality } from '../models/functionality.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  private currentProject: Project | null = null;

  constructor() {
    const projectsFromStorage = localStorage.getItem('projects');
    if (projectsFromStorage) {
      this.projects = JSON.parse(projectsFromStorage);
    } else {
      this.projects = [];
    }
  }

  getProjects(): Project[] {
    return this.projects;
  }

  saveProjectsToStorage(): void {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  createProject(project: Project): void {
    this.projects.push(project);
    this.saveProjectsToStorage();
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.projectId === project.projectId);
    if (index !== -1) {
      this.projects[index] = project;
      this.saveProjectsToStorage();
    }
  }

  deleteProject(projectId: string): void {
    const index = this.projects.findIndex(p => p.projectId === projectId);
    if (index !== -1) {
      this.projects.splice(index, 1);
      this.saveProjectsToStorage();
    }
  }

}