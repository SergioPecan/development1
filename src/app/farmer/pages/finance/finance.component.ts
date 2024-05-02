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
  private urlfinance='http://localhost:2000/payments';
  payments: Payment[] = [];
  collections: Collection[] = []
  constructor(private http: HttpClient, private router: Router) {
    this.http.get<Payment[]>(this.urlfinance).subscribe(data => {
      this.payments = data;
    })

    this.http.get<Collection[]>(this.urlfinance).subscribe(data => {
      this.payments = data;
    })
  }
}
