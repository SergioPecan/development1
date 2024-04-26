import { Component } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User} from "../../model/user.entity";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ruc= "";
  password= "";

  constructor(private userService: UserService, private _snackBar: MatSnackBar){}
  login(){
    const user: User = {
      id: 0,
      email: '',
      password: this.password,
      phone: '',
      ruc: this.ruc
    };


      this.userService.login(user.ruc,user.password).subscribe(
        users => {
          if (users.length > 0) {
            // Inicio de sesión exitoso
            this._snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
              duration: 2000,
              panelClass: ['login-snackbar-success']
            });

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
