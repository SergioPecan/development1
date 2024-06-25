import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        },
        error => {
        console.error(error);
        }
      );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(() => {
        this.getEmployees();
      },
          error => {
        console.error(error);
      }
    );
  }
}
