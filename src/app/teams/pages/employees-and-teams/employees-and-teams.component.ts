import { Component } from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Crop} from "../../../farmer/model/crop.entity";

@Component({
  selector: 'app-employees-and-teams',
  templateUrl: './employees-and-teams.component.html',
  styleUrl: './employees-and-teams.component.css'
})
export class EmployeesAndTeamsComponent {
  employees: Employee[] = [];
  crops: Crop[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Employee[]>('http://localhost:3200/employees').subscribe(data => {
      this.employees = data;
    })
    this.http.get<Crop[]>('http://localhost:3200/crops').subscribe(data => {
      this.crops = data; //
    });
  }
}
