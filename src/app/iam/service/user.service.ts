// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios'; // Ajusta esto a la URL de tu API

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }
}

