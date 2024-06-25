// auth.service.ts
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Admin } from '../model/admin.entity';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  loggedUser = false;
  admin: any = null; // Almacena los detalles del administrador
  user: any = null; // Almacena los detalles del usuario
  private apiUrl = 'https://agroges-9e1d75102c63.herokuapp.com:2000/api/v1/';
  currentAdminSubject: BehaviorSubject<Admin | null> = new BehaviorSubject<Admin | null>(null);
  currentAdmin = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  login(ruc: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}user?ruc=${ruc}&password=${password}`)
      .pipe(tap(user => {
        this.loggedUser = true;
        this.user = user; // Almacena los detalles del usuario

      }));
  }

  LoginAdmin(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}admin?username=${username}&password=${password}`)
      .pipe(tap(admin => {
        this.loggedIn = true;
        this.admin = admin;
        this.currentAdminSubject.next(admin);// Almacena los detalles del administrador
      }));
  }

  isLoggedIn(): boolean {
    console.log('AuthService#isLoggedIn called, returning:', this.loggedIn);
    return this.loggedIn;
  }

  IsloggedUser(): boolean {
    console.log('AuthService#isLoggedIn called, returning:', this.loggedUser);
    return this.loggedUser;
  }

  getCurrentUser(): any {
    return this.loggedUser ? this.user : null; // Devuelve los detalles del usuario actual
  }



  getCurrentAdmin():  Observable<Admin | null> {
    return this.currentAdmin;
  }
  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}admin/${admin.id}`, admin)
      .pipe(tap(updatedAdmin => {
        this.admin = updatedAdmin;
        this.currentAdminSubject.next(updatedAdmin);
      }));
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}user`);
  }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}admins`);
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}user/${id}`);
  }


  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}admins`, admin);
  }



  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}admins/${id}`);
  }



}

