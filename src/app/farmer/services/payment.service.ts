import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Payment} from "../model/payment.entity";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:2000/payments';

  constructor(private http: HttpClient) { }

  getPaymentData() {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  addPayment(payment: Payment) {
    return this.http.post<Payment>(this.apiUrl, payment);
  }
}
