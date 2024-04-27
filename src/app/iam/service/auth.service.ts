// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn= false; // Añade esta línea
  loggedUser = false;
  private apiUrl = 'http://localhost:3000/api/v1/'; // Ajusta esto a la URL de tu API

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }
  login(ruc: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}usuarios?ruc=${ruc}&password=${password}`).pipe( tap(() => this.loggedUser = true) // Añade esta línea
    );
  }
  LoginAdmin(username: string, password: string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}admin?username=${username}&password=${password}`).pipe( tap(() => this.loggedIn = true));
  }
  isLoggedIn(): boolean {
    console.log('AuthService#isLoggedIn called, returning:', this.loggedIn);
    return this.loggedIn;
  }
  IsloggedUser(): boolean {
    console.log('AuthService#isLoggedIn called, returning:', this.loggedUser);
    return this.loggedUser;
  }


}

