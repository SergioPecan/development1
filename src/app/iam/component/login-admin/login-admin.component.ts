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
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  login(): void {
    if (this.authService.LoginAdmin(this.username, this.password)) {
      this.authService.loggedIn = true;
      this.router.navigate(['/admin']);


      this.snackBarRef.dismiss();
    } else {
      this._snackBar.open('usuario o contraseña incorrectos', 'Cerrar', {
        duration: 20000,
        panelClass: ['login-snackbar-error']
      });
    }
  }
}
