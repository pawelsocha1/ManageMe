export class Task {
    public name: string;
    public description: string;
    public priority: number;
    public functionality: string; 
    public estimatedTime: number;
    public state: string; 
    public addDate: Date;
    public startDate: Date | null;
    public endDate: Date | null;
    public assignedUser: string | null; 
  
    constructor(
      name: string,
      description: string,
      priority: number,
      functionality: string,
      estimatedTime: number,
      state: string,
      addDate: Date,
      startDate: Date | null,
      endDate: Date | null,
      assignedUser: string | null
    ) {
      this.name = name;
      this.description = description;
      this.priority = priority;
      this.functionality = functionality;
      this.estimatedTime = estimatedTime;
      this.state = state;
      this.addDate = addDate;
      this.startDate = startDate;
      this.endDate = endDate;
      this.assignedUser = assignedUser;
    }
  }
  