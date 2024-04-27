import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginAdminComponent } from '../component/login-admin/login-admin.component';
import { Router } from '@angular/router';
import {LoginComponent} from "../pages/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = this.authService.isLoggedIn();
    console.log('AuthGuard#canActivate called, isLoggedIn:', isLoggedIn);
    if (isLoggedIn) {
      return true;
    } else {
      this.snackBar.openFromComponent(LoginAdminComponent);
      return false;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
  };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = this.authService.IsloggedUser()
    console.log('AuthGuard#canActivate called, isLoggedIn:', isLoggedIn);
    if (isLoggedIn) {
      return true;
    } else {

      this.router.navigate(['/login']);

      return false;
    }
  }

}
