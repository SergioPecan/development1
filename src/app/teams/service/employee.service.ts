import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee.entity";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/employees';
  constructor(private http: HttpClient) {}

  getEmployees(){
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number){
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  getEmployeeByIdDocument(idDocument: string){
    return this.http.get<Employee>(`${this.baseUrl}/${idDocument}`);
  }

  getEmployeeByFullName(fullName: string){
    return this.http.get<Employee>(`${this.baseUrl}/${fullName}`);
  }

  createEmployee(employee: Employee){
    const body = {
      idDocument: employee.idDocument,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      workPosition: employee.workPosition,
      salary: employee.salary,
      phone: employee.phone,
      age: employee.age,
      photoUrl: employee.photoUrl,
    };
    return this.http.post<Employee>(this.baseUrl, body);
  }

  updateEmployee(id: number, employee: Employee){
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee,)
  }

  deleteEmployee(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
