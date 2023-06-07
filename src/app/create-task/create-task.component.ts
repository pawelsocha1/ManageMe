import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  task: Task = {
    taskId: 0,
    name: '',
    description: '',
    status: 'TODO'
  };

  createTask(): void {
    this.taskAdded.emit(this.task);
    this.task = {
      taskId: 0,
      name: '',
      description: '',
      status: 'TODO'
    };
  }
}
