import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { User} from "../../model/user.entity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ruc= "";
  password= "";
  Islogin = false;

  constructor(private userService: AuthService, private _snackBar: MatSnackBar, private router: Router){}
  login(){
    const user: User = {
      IsAdmin: false,
      id: 0,
      email: '',
      password: this.password,
      phone: '',
      ruc: this.ruc,
      token: ''
    };



      this.userService.login(user.ruc,user.password).subscribe(
        users => {
          if (users.length > 0) {
            // Inicio de sesión exitoso
            this._snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
              duration: 2000,
              panelClass: ['login-snackbar-success']

            });
            this.Islogin = true;
            if (users[0].IsAdmin) {
              this.router.navigate(['/admin']); // Redirige a los administradores al tablero de administración
            } else {
              this.router.navigate(['/user']); // Redirige a los usuarios no administradores al tablero de usuario
            }

            console.log('Inicio de sesión exitoso', users[0]);
          } else {
            // Inicio de sesión fallido
            this._snackBar.open('RUC o contraseña incorrectos', 'Cerrar', {
              duration: 20000,
              panelClass: ['login-snackbar-error']
            });
            console.error('RUC o contraseña incorrectos');
          }

        },
        error => {
          // Aquí puedes manejar los errores
          console.error('Hubo un error al iniciar sesión', error);
        }
      );





  }




}
