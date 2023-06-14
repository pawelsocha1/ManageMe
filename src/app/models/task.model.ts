export class Task {
  public taskId: number;
  public name: string;
  public description: string;
  public status: 'TODO' | 'DOING' | 'DONE';
  public functionalityId: number;

  constructor(
    taskId: number,
    name: string,
    description: string,
    status: 'TODO' | 'DOING' | 'DONE',
    functionalityId: number
    
  ) {
    this.taskId = taskId;
    this.name = name;
    this.description = description;
    this.status = status;
    this.functionalityId = functionalityId;
  }
}
