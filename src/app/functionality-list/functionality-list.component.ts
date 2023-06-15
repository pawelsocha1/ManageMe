import { Component, OnInit } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../services/functionality.service';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.css']
})
export class FunctionalityListComponent implements OnInit {
  functionalities: Functionality[] = [];

  constructor(private functionalityService: FunctionalityService, private router: Router) { }

  ngOnInit(): void {
    this.getFunctionalities();
  }

  
  
  getFunctionalities(): void {
    this.functionalityService.getFunctionalities()
      .subscribe((functionalities: Functionality[]) => {
        this.functionalities = functionalities;
      });
  }


  
  editFunctionality(functionalityId: number) {
    this.router.navigate(['/edit-functionality', functionalityId]);
  }

  navigateToFunctionalityDetails(functionality: Functionality) {
    this.router.navigate(['/functionality-details', functionality.functionalityId]);
  }
  
  

  deleteFunctionality(functionalityId: number): void {
    this.functionalityService.deleteFunctionality(functionalityId);
  }

}
