import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityService } from '../services/functionality.service';
import { Task } from '../models/task.model';
import { Functionality } from '../models/functionality.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.css']
})
export class FunctionalityDetailsComponent implements OnInit {
  functionality: Functionality | undefined;
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private functionalityService: FunctionalityService
  ) {}

  ngOnInit() {
    this.getFunctionality();
  }

  getFunctionality(): void {
    const id = Number(this.route.snapshot.paramMap.get('functionalityId'));
    this.functionalityService.getFunctionalities()
      .pipe(
        tap((functionalities: Functionality[]) => {
          this.functionality = functionalities.find(func => func.functionalityId === id);
          console.log('Selected functionality:', this.functionality);
        })
      )
      .subscribe(() => {
        this.getTasksForFunctionality(); 

      });
  }

  getTasksForFunctionality(): void {
    console.log(this.functionality?.functionalityId)
    if (this.functionality) {
      this.functionalityService.getTasksForFunctionality(this.functionality.functionalityId)
        .subscribe((tasks: Task[]) => {
          this.tasks = tasks;
          console.log('Tasks for functionality:', this.tasks);
        });
    }
  }
}
