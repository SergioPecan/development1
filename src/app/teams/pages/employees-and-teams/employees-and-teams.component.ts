import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees-and-teams',
  templateUrl: './employees-and-teams.component.html',
  styleUrl: './employees-and-teams.component.css'
})
export class EmployeesAndTeamsComponent {
  employees: Employee[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Employee[]>('http://localhost:3000/employees').subscribe(data => {
      this.employees = data;
    })
  }
}
