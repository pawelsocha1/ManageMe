export class Task {
  public taskId: number;
  public name: string;
  public description: string;
  public status: 'TODO' | 'DOING' | 'DONE';
  public priority: 'NISKI' | 'ŚREDNI' | 'WYSOKI';
  public functionalityId: number;
  

  constructor(
    taskId: number,
    name: string,
    description: string,
    status: 'TODO' | 'DOING' | 'DONE',
    priority: 'NISKI' | 'ŚREDNI' | 'WYSOKI',
    functionalityId: number
    
  ) {
    this.taskId = taskId;
    this.name = name;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.functionalityId = functionalityId;
  }
}
