import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee.entity";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3200/employees';

  constructor(private http: HttpClient) {}

  getEmployeeData(){
    return this.http.get<Employee[]>(this.apiUrl)
  }

  createEmployee(employee: Employee){
    return this.http.post<Employee>(this.apiUrl, employee);
  }
}
