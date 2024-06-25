import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {EmployeeService} from "../../service/employee.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService, formBuilder: FormBuilder) {}
  id = 0;
  idDocument = '';
  firstName = '';
  lastName = '';
  email = '';
  workPosition = '';
  salary = 0;
  phone = '';
  age = 0;
  photoUrl = 'assets/Images/UserIcon.png';

  register() {

    const employee: Employee = {
      id : this.id,
      idDocument: this.idDocument,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      workPosition: this.workPosition,
      salary: this.salary,
      phone: this.phone,
      age: this.age,
      photoUrl: this.photoUrl,
    };

    this.employeeService.createEmployee(employee)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(employee);
          console.error(error);
        }
      )
  }
}
