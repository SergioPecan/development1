
import { Component } from '@angular/core';
import { SmoothScrollService } from './public/services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgroGes';
  options = [{ path: '/home', title: 'Home'},
    {path: '/login', title: 'Login'},
    {path: '/signup', title: 'Signup'},
  ]




}
