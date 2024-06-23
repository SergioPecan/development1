import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesOrderEntity } from '../model/sales-order.entity';
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private baseUrl = 'https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/SalesOrder';

  constructor() { }
}
