import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { FunctionalityService } from '../services/functionality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.taskId);
    this.tasks = this.taskService.getTasks();
  }

  editTask(taskIndex: number) {
    const taskId = this.tasks[taskIndex].taskId;
    this.router.navigate(['/edit-task', taskId]);
  }
}
