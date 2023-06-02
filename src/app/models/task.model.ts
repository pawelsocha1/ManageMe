export class Task {
    public taskId: number;
    public name: string;
    public description: string;

    constructor(
      taskId: number,
      name: string,
      description: string,

    ) {
      this.taskId = taskId;
      this.name = name;
      this.description = description;
    }
  }
  