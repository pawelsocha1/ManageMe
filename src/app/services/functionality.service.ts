import { Injectable } from '@angular/core';
import { Functionality } from '../models/functionality.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private localStorageKey = 'functionalities';
  private functionalities: Functionality[] = [];

  constructor() {
    const storedFunctionalities = localStorage.getItem(this.localStorageKey);
    if (storedFunctionalities) {
      this.functionalities = JSON.parse(storedFunctionalities);
    }
  }

  getFunctionalities(): Functionality[] {
    return this.functionalities;
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

  private saveFunctionalitiesToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.functionalities));
  }
}
