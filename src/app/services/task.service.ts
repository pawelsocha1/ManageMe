import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';
  private tasks: Task[] = [];
  private taskIdCounter: number = 1;
  private taskStatusSubject = new BehaviorSubject<string>('');

  taskStatus$ = this.taskStatusSubject.asObservable();
  private taskDeletedSubject = new BehaviorSubject<number>(0);

  taskDeleted$ = this.taskDeletedSubject.asObservable();

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

  getTaskById(id: number): Observable<Task | undefined> {
    const task = this.tasks.find((task) => task.taskId === id);
    return of(task);
  }
  
  

  createTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.taskId === updatedTask.taskId);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((task) => task.taskId === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
      this.taskDeletedSubject.next(taskId);
    }
  }
  

  private loadTasksFromLocalStorage(): void {
    const tasksData = localStorage.getItem(this.localStorageKey);
    if (tasksData) {
      this.tasks = JSON.parse(tasksData);
      this.taskIdCounter = this.tasks.length + 1; 
    }
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  updateTaskStatus(status: string): void {
    this.taskStatusSubject.next(status);
  }
}
