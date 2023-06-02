export class Project {
  public projectId: string;
  public name: string;
  public description: string;
  
  

  constructor(projectId: string, name: string, description: string) {
    this.projectId = projectId;
    this.name = name;
    this.description = description;
  }
}
