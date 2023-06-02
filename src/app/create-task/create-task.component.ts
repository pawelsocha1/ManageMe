import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  task: Task = {
    taskId: 0,
    name: '',
    description: ''
  };

  constructor(private taskService: TaskService) { }

  createTask(): void {
    this.taskService.createTask(this.task);
    this.task = {
      taskId:  this.task.taskId + 1,
      name: '',
      description: ''
    };
  }
}

