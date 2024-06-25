export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email : string;
  idDocument: string;
  workPosition: string;
  salary: number;
  phone: string;
  age: number;
  photoUrl: string;

  constructor() {
    this.id = 0;
    this.idDocument = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.workPosition = "";
    this.salary = 0;
    this.phone = "";
    this.age = 0;
    this.photoUrl = "assets/Images/UserIcon.png";
  }
}
