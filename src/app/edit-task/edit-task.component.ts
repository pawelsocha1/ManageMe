import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  task: Task | undefined;
  taskStatus: string = '';
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    this.editForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      status: new FormControl(),
      priority: new FormControl(),
      estimatedTime: new FormControl(), // Add estimatedTime form control
      startDate: new FormControl(), // Add startDate form control
      endDate: new FormControl() // Add endDate form control
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
      this.taskService.getTaskById(this.taskId).subscribe((task: Task | undefined) => {
        this.task = task;
        if (this.task) {
          this.editForm.patchValue({
            name: this.task.name,
            description: this.task.description,
            status: this.task.status,
            priority: this.task.priority,
            estimatedTime: this.task.estimatedTime, // Patch estimatedTime value
            startDate: this.task.startDate, // Patch startDate value
            endDate: this.task.endDate // Patch endDate value
          });
        }
      });
    });
  }

  updateTask(): void {
    if (this.task && this.editForm.valid) {
      const updatedTask: Task = {
        ...this.task,
        name: this.editForm.value.name,
        description: this.editForm.value.description,
        status: this.editForm.value.status,
        priority: this.editForm.value.priority,
        estimatedTime: this.editForm.value.estimatedTime,
        startDate: this.editForm.value.status === 'DOING' ? new Date() : this.task.startDate,
        endDate: this.editForm.value.status === 'DONE' ? new Date() : this.task.endDate
      };
      this.taskService.updateTask(updatedTask);
      this.router.navigate(['/task-list']);
    }
  }
}
