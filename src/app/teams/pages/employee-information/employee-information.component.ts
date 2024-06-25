import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee.entity";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrl: './employee-information.component.css'
})
export class EmployeeInformationComponent implements OnInit{
  employees: Employee[] = [];
  editingEmployeeId: number | null = null;
  editingEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, ) { }

  ngOnInit(): void {
    this.getEmployees();
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

  startEditing(employee: Employee) {
    this.editingEmployeeId = employee.id;
    this.editingEmployee = {...employee};
  }

  acceptChanges() {
    if (this.editingEmployeeId) {
      this.updateEmployee(this.editingEmployee);
    }
    this.editingEmployeeId = null;
    this.editingEmployee = new Employee();
  }

  updateEmployee(employee: Employee){
    this.employeeService.updateEmployee(employee.id, employee)
      .subscribe(updatedEmployee => {
          const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
          if (index !== -1) {
            this.employees[index] = updatedEmployee;
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}
