import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
      this.task = this.taskService.getTaskById(this.taskId);
      console.log(this.taskId);
    });
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks', this.taskId]);
    }
  }
}
