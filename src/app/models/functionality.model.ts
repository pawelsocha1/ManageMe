import { Task } from "./task.model";


export class Functionality {
    public functionalityId: number;
    public name: string;
    public description: string;
    tasks: Task[];
 
    constructor(
      functionalityId: number,
      name: string,
      description: string,
      tasks: Task[]
    ) {
      this.functionalityId = functionalityId;
      this.name = name;
      this.description = description;
      this.tasks = tasks;
    }
  }
  