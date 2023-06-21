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

  constructor(
    private formBuilder: FormBuilder,
    private functionalityService: FunctionalityService,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      functionalityId: ['', Validators.required]
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
    if (this.taskForm.valid) {
      const newTask = new Task(
        this.taskService.getNewTaskId(),
        this.taskForm.value.name,
        this.taskForm.value.description,
        this.taskForm.value.status,
        this.taskForm.value.functionalityId
      );
      const functionalityId = this.taskForm.value.functionalityId;
      console.log('Creating task for functionalityId:', functionalityId); // Dodaj ten wydruk konsoli
      this.functionalityService.addTaskToFunctionality(functionalityId, newTask);
  
      this.taskService.createTask(newTask);
    }
  }
  
}
