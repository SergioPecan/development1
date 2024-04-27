// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1/usuarios'; // Ajusta esto a la URL de tu API

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }
  login(ruc: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?ruc=${ruc}&password=${password}`);
  }


}

