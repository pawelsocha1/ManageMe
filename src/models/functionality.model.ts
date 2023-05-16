export class Functionality {
    public name: string;
    public description: string;
    public priority: number;
    public project: string; 
    public owner: string; 
    public state: string; 
  
    constructor(
      name: string,
      description: string,
      priority: number,
      project: string,
      owner: string,
      state: string
    ) {
      this.name = name;
      this.description = description;
      this.priority = priority;
      this.project = project;
      this.owner = owner;
      this.state = state;
    }
  }
  