import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Email {
  email: string;
}

interface Phone {
  phone: number;
}

interface SocialReason {
  socialReason: string;
}

interface Farming {
  ruc: string;
  email: Email;
  phone: Phone;
  socialReason: SocialReason;
}

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private baseUrl = 'https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/farming/ruc';

  constructor(private http:HttpClient) {
  }

  createFarming(farming: Farming): Observable<any> {
    const url = `${this.baseUrl}/create`;
    return this.http.post<any>(url, farming);
  }

  // Método para obtener todos los farming
  getAllFarming() {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Método para obtener un farming por su ID
  getFarmingById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }
}
