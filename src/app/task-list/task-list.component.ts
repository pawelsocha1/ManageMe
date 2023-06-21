import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private unsubscribe$ = new Subject<void>();
  private taskDeletedSubscription!: Subscription;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
    this.taskDeletedSubscription = this.taskService.taskDeleted$.subscribe((taskId: number) => {
      this.updateTaskListAfterDelete(taskId);
    });
  }

  ngOnDestroy(): void {
    this.taskDeletedSubscription.unsubscribe();
  }

 

  editTask(taskId: number): void {
    this.router.navigate(['/edit-task', taskId]);
  }


  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  navigateToTaskDetails(taskId: number): void {
    this.router.navigate(['/task-details', taskId]);
  }
  
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.taskId);
  }

  filterByStatus(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  private handleTaskDeleted(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.taskId !== taskId);
  }

  private updateTaskListAfterDelete(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.taskId !== taskId);
  }
  
}
