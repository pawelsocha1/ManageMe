import { Injectable } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private localStorageKey = 'functionalities';
  private functionalities: Functionality[] = [];
  private taskStatusSubject = new BehaviorSubject<string>('');

  taskStatus$ = this.taskStatusSubject.asObservable();

  constructor() {
    const storedFunctionalities = localStorage.getItem(this.localStorageKey);
    if (storedFunctionalities) {
      this.functionalities = JSON.parse(storedFunctionalities);
    }
  }

  createFunctionality(functionality: Functionality): void {
    this.functionalities.push(functionality);
    this.saveFunctionalitiesToLocalStorage();
  }
  
  updateFunctionality(updatedFunctionality: Functionality): void {
    const index = this.functionalities.findIndex(f => f.functionalityId === updatedFunctionality.functionalityId);
    if (index !== -1) {
      this.functionalities[index] = updatedFunctionality;
      this.saveFunctionalitiesToLocalStorage();
    }
  }

  deleteFunctionality(functionalityId: number): void {
    const index = this.functionalities.findIndex(f => f.functionalityId === functionalityId);
    if (index !== -1) {
      this.functionalities.splice(index, 1);
      this.saveFunctionalitiesToLocalStorage();
    }
  }

  getFunctionalityById(id: number): Functionality | undefined {
    return this.functionalities.find(func => func.functionalityId === id);
  }

  addTaskToFunctionality(functionalityId: number, task: Task): void {
    const functionality = this.getFunctionalityById(functionalityId);
    if (functionality) {
      functionality.tasks.push(task);
    }
  }

  private saveFunctionalitiesToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.functionalities));
  }

  getFunctionalities(): Observable<Functionality[]> {
    return of(this.functionalities);
  }

  getTasksForFunctionality(functionalityId: number): Observable<Task[]> {
    const functionality = this.getFunctionalityById(functionalityId);
    if (functionality) {
      return of(functionality.tasks);
    } else {
      return of([]);
    }
  }

  createTask(functionalityId: number, task: Task): void {
    const functionality = this.getFunctionalityById(functionalityId);
    if (functionality) {
      functionality.tasks.push(task);
      this.saveFunctionalitiesToLocalStorage();
    }
  }
}
