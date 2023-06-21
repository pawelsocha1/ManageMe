import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(taskId)
      .subscribe({
        next: (task: Task | undefined) => {
          if (task) {
            this.task = task;
          } else {
            // Handle the case when the task with the given ID is not found
          }
        },
        error: (error: any) => {
          // Handle the error, e.g., display an error message
        }
      });
  }
}  
  
        
  

