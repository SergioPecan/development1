import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../../consultant/models/notification.model';
import { Companie } from '../models/companies.model';
import { Contract} from "../models/contract.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/notification`);
  }

  getCompanies(): Observable<Companie[]> {
    return this.http.get<Companie[]>(`${this.baseUrl}/companies`);
  }

  getContracts(): Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.baseUrl}/contracts`);

  }

}
