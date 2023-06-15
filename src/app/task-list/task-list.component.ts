import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }
  
  

  editTask(taskId: number): void {
    this.router.navigate(['/edit-task', taskId]);
  }

  navigateToTaskDetails(task: Task): void {
    this.router.navigate(['/task-details', task.taskId]);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.taskId);
  }

  filterByStatus(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }
}
