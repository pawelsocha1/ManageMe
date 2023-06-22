import { Component } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../services/functionality.service';

@Component({
  selector: 'app-create-functionality',
  templateUrl: './create-functionality.component.html',
  styleUrls: ['./create-functionality.component.css']
})
export class CreateFunctionalityComponent {
  functionality: Functionality = {
    functionalityId: 0,
    name: '',
    description: '',
    status: 'TODO',
    priority: 'ŚREDNI',
    tasks: [],
    creationDate: new Date(),
    startDate: undefined
  };

  constructor(private functionalityService: FunctionalityService) { }

  createFunctionality(): void {
    this.functionalityService.createFunctionality(this.functionality);
    this.functionality = {
      functionalityId: this.functionality.functionalityId + 1,
      name: '',
      description: '',
      status: 'TODO',
      priority: 'ŚREDNI',
      tasks: [],
      creationDate: new Date(),
      startDate: undefined
    };
  }
}
