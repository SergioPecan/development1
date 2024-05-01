import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private employeeService: Employee) {}

  name = '';
  lastName = '';
  id_ = '';
  dni = '';
  charge = '';
  age = 0;
  salary = 0;
}
