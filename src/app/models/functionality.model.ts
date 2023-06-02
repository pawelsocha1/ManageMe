export class Functionality {
    public functionalityId: number;
    public name: string;
    public description: string;
 
    constructor(
      functionalityId: number,
      name: string,
      description: string,
    ) {
      this.functionalityId = functionalityId;
      this.name = name;
      this.description = description;
    }
  }
  