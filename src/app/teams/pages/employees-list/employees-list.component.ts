import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  employees: Employee[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Employee[]>('http://localhost:3200/employees').subscribe(data => {
      this.employees = data;
    })
  }
}
