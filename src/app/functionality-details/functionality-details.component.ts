import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../services/functionality.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.css']
})
export class FunctionalityDetailsComponent implements OnInit {
  functionalityId!: number;
  functionality: Functionality | undefined;
  selectedFunctionalityIndex: number | undefined;
  functionalities: Functionality[] = [];

  constructor(
    private route: ActivatedRoute,
    private functionalityService: FunctionalityService
  ) {}

  onTaskAdded(task: Task): void {
    if (this.selectedFunctionalityIndex !== undefined) {
      this.functionalities[this.selectedFunctionalityIndex].tasks.push(task);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.functionalityId = id;
        this.functionalities = this.functionalityService.getFunctionalities();
        this.functionality = this.functionalityService.getFunctionalityById(this.functionalityId);
      }
    });
  }
}
