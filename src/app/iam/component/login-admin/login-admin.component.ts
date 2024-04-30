import { Component } from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  username: string = '';
  password: string = '';


  constructor(
    public snackBarRef: MatSnackBarRef<LoginAdminComponent>,
    private userService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  login(): void {

    const admin = {
      username: this.username,
      password: this.password
    }
    this.userService.LoginAdmin(admin.username, admin.password).subscribe(
    admin => {
      if(admin.length>0){
        this._snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
          duration: 2000,
        });
        this.userService.loggedIn = true;
        this.userService.currentAdminSubject.next(admin[0]);
        this.router.navigate(['/admin']);
        console.log('Inicio de sesión exitoso', admin[0]);
        }
      else {
        this._snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
          duration: 2000,
        });

      }
    }
      );
  }



}
