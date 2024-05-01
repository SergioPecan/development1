import { Component } from '@angular/core';
import {Payment} from "../../model/payment.entity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Collection} from "../../model/collection.entity";

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  payments: Payment[] = [];
  collections: Collection[] = []
  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Payment[]>('http://localhost:3000/payments').subscribe(data => {
      this.payments = data;
    })

    this.http.get<Collection[]>('http://localhost:3000/collections').subscribe(data => {
      this.payments = data;
    })
  }
}
