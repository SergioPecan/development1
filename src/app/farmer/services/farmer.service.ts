import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) {
    //DB='http://localhost:3000';
  }
  getdata():Observable<any[]>{
    return this.http.get<any[]>('https://localhost:3000');
  }
}
