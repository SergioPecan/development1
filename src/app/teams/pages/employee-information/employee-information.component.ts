import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Crop} from "../../../farmer/model/crop.entity";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrl: './employee-information.component.css'
})
export class EmployeeInformationComponent {
  employees: Employee[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Employee[]>('http://localhost:3000/employees').subscribe(data => {
      this.employees = data;
    })
  }
}
