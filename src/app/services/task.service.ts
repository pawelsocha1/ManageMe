import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';
  private tasks: Task[] = [];
  private taskIdCounter: number = 1;
  private taskStatusSubject = new BehaviorSubject<string>('');

  taskStatus$ = this.taskStatusSubject.asObservable();

  updateTaskStatus(status: string) {
    this.taskStatusSubject.next(status);
  }

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  getTasks(): Observable<Task[]> {
    return new Observable<Task[]>((observer) => {
      observer.next(this.tasks);
      observer.complete();
    });
  }

  getNewTaskId(): number {
    const newTaskId = this.taskIdCounter;
    this.taskIdCounter++;
    return newTaskId;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.taskId === id);
  }

  createTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedtask: Task): void {
    const index = this.tasks.findIndex((f) => f.taskId === updatedtask.taskId);
    if (index !== -1) {
      this.tasks[index] = updatedtask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((f) => f.taskId === taskId);
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
