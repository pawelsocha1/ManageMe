export class User {
    public login: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public role: string;
  
    constructor(login: string, password: string, firstName: string, lastName: string, role: string) {
      this.login = login;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
    }
  }
  