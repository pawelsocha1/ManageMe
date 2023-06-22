import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Functionality } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { FunctionalityService } from '../services/functionality.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  functionalities: Functionality[] = [];
  task: Task = {
    taskId: 0,
    name: '',
    description: '',
    functionalityId: 0,
    estimatedTime: 0,
    status: 'TODO',
    priority: 'NISKI',
    createdDate: new Date(),
    startDate: undefined,
    endDate: undefined
  };
  constructor(
    private formBuilder: FormBuilder,
    private functionalityService: FunctionalityService,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      functionalityId: ['', Validators.required],
      priority: ['', Validators.required],
      estimatedTime: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getFunctionalities();
  }

  getFunctionalities() {
    this.functionalityService.getFunctionalities()
      .subscribe((functionalities: Functionality[]) => {
        this.functionalities = functionalities;
      });
  }

  createTask() {
    this.task.createdDate = new Date();

    if (this.task.status === 'DOING') {
      this.task.startDate = new Date(); 
    } else if (this.task.status === 'DONE') {
      this.task.endDate = new Date(); 
    }
    if (this.taskForm.valid) {
      const newTask = new Task(
        this.taskService.getNewTaskId(),
        this.taskForm.value.name,
        this.taskForm.value.description,
        this.taskForm.value.status,
        this.taskForm.value.priority,
        this.taskForm.value.functionalityId,
        this.taskForm.value.estimatedTime,
        this.task.createdDate,
      );
      const functionalityId = this.taskForm.value.functionalityId;
      console.log('Creating task for functionalityId:', functionalityId); 
      this.functionalityService.addTaskToFunctionality(functionalityId, newTask);
  
      this.taskService.createTask(newTask);
    }
  }
  
}
