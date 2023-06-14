import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    private localStorageKey = 'tasks';
    private tasks: Task[] = [];
    private taskIdCounter: number = 1;

    constructor() {
        this.loadTasksFromLocalStorage();
      }
    
      getTasks(): Task[] {
        return this.tasks;
      }

      getNewTaskId(): number {
        const newTaskId = this.taskIdCounter;
        this.taskIdCounter++;
        return newTaskId;
      }
    

  createTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedtask: Task): void {
    const index = this.tasks.findIndex(f => f.taskId === updatedtask.taskId);
    if (index !== -1) {
      this.tasks[index] = updatedtask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex(f => f.taskId === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    }
  }

  private loadTasksFromLocalStorage(): void {
    const tasksData = localStorage.getItem(this.localStorageKey);
    if (tasksData) {
      this.tasks = JSON.parse(tasksData);
    }
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }
}
