import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { Functionality } from '../models/functionality.model';
import { TaskService } from '../services/task.service';
import { FunctionalityService } from '../services/functionality.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = {
    taskId: 0,
    name: '',
    description: '',
    status: "TODO",
    functionalityId: 0
  };
  functionalities: Functionality[] = [];
  selectedFunctionalityId: number = 0;

  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(
    private taskService: TaskService,
    private functionalityService: FunctionalityService
  ) {}

  ngOnInit(): void {
    this.functionalities = this.functionalityService.getFunctionalities();
  }

  createTask(): void {
    const newTask: Task = {
      taskId: this.taskService.getNewTaskId(),
      name: this.task.name,
      description: this.task.description,
      status: this.task.status,
      functionalityId: this.selectedFunctionalityId
    };

    this.taskService.createTask(newTask);
    this.taskAdded.emit(newTask);

    this.task = {
      taskId: 0,
      name: '',
      description: '',
      status: 'TODO',
      functionalityId: 0
    };
    this.selectedFunctionalityId = 0;
  }

  getFunctionalityName(functionalityId: number): string {
    const functionality = this.functionalities.find(f => f.functionalityId === functionalityId);
    return functionality ? functionality.name : '';
  }
  
}
