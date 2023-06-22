import { Injectable } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable, map, of, switchMap, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private localStorageKey = 'functionalities';
  private functionalities: Functionality[] = [];
  private selectedFunctionalitySubject = new BehaviorSubject<Functionality | undefined>(undefined);
  


  selectedFunctionality$ = this.selectedFunctionalitySubject.asObservable();

  constructor() {
    
    this.loadFunctionalitiesFromLocalStorage();
  }

  createFunctionality(functionality: Functionality): void {
    functionality.functionalityId = this.generateUniqueFunctionalityId();
    this.functionalities.push(functionality);
    this.saveFunctionalitiesToLocalStorage();
  }
  
  private generateUniqueFunctionalityId(): number {
    const timestamp = new Date().getTime();
    return timestamp;
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

  getFunctionalityById(id: number): Observable<Functionality | undefined> {
    return this.getFunctionalities().pipe(
      map((functionalities: Functionality[]) => {
        return functionalities.find(func => func.functionalityId === id);
      })
    );
  }
  

  setSelectedFunctionality(functionality: Functionality): void {
    this.selectedFunctionalitySubject.next(functionality);
  }

  addTaskToFunctionality(functionalityId: number, task: Task): void {
    const functionality = this.functionalities.find(func => func.functionalityId === functionalityId);
    if (functionality) {
      functionality.tasks.push(task);
      console.log('Tasks after adding:', functionality.tasks); 
      this.saveFunctionalitiesToLocalStorage();
    }
  }
  
  
  

  private loadFunctionalitiesFromLocalStorage(): void {
    const storedFunctionalities = localStorage.getItem(this.localStorageKey);
    if (storedFunctionalities) {
      this.functionalities = JSON.parse(storedFunctionalities).map((func: Functionality) => {
        if (!func.tasks) {
          func.tasks = [];
        }
        return func;
      });
      console.log('Loaded functionalities:', this.functionalities);
    } else {
      console.log('No functionalities found in localStorage');
    }
  }
  
  
  
  private saveFunctionalitiesToLocalStorage(): void {
    const serializedFunctionalities = JSON.stringify(this.functionalities);
    localStorage.setItem(this.localStorageKey, serializedFunctionalities);
  }
  

  getFunctionalities(): Observable<Functionality[]> {
    return of(this.functionalities).pipe(
      tap((functionalities: Functionality[]) => {
        functionalities.forEach(func => {
          if (!func.tasks) {
            func.tasks = [];
          }
        });
      })
    );
  }
  

  getTasksForFunctionality(functionalityId: number): Observable<Task[]> {
    return this.getFunctionalities().pipe(
      map((functionalities: Functionality[]) => {
        const functionality = functionalities.find(func => func.functionalityId === functionalityId);
        return functionality ? functionality.tasks : [];
      })
    );
  }
  
  
  
}
  

