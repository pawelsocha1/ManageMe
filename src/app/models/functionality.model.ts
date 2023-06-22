import { Task } from "./task.model";


export class Functionality {
    public functionalityId: number;
    public name: string;
    public description: string;
    status: 'TODO' | 'DOING' | 'DONE';
    priority: 'NISKI' | 'ŚREDNI' | 'WYSOKI';
    tasks: Task[];
    creationDate: Date;
    startDate?: Date;
 
    constructor(
      functionalityId: number,
      name: string,
      description: string,
      status: 'TODO' | 'DOING' | 'DONE',
      priority: 'NISKI' | 'ŚREDNI' | 'WYSOKI',
      tasks: Task[],
    ) {
      this.functionalityId = functionalityId;
      this.name = name;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.tasks = tasks;
      this.creationDate = new Date();
      this.startDate = undefined;
    }
  }
  