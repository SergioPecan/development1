
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  ruc?: string;
  title = 'AgroGes';
  options = [{ path: '/home', title: 'Home'},
    {path: '/login', title: 'Login'},
    {path: '/signup', title: 'Signup'},
    {path: '/profile', title: 'Profile'},
    {path: '/admin', title: 'Admin'},
    {path: '/mod', title: 'Moderator'},
{path: '/user', title: 'User'},

  ]
  constructor() { }

  logout(): void {

    window.location.reload();
  }



}
