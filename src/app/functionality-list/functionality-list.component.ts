import { Component, OnInit } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../services/functionality.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.css']
})
export class FunctionalityListComponent implements OnInit {
  functionalities: Functionality[] = [];

  constructor(private functionalityService: FunctionalityService) { }

  ngOnInit(): void {
    this.getFunctionalities();
  }

  getFunctionalities(): void {
    this.functionalities = this.functionalityService.getFunctionalities();
  }

  editFunctionality(functionality: Functionality): void {
    this.functionalityService.updateFunctionality(functionality);
  }

  deleteFunctionality(functionalityId: number): void {
    this.functionalityService.deleteFunctionality(functionalityId);
  }
}
