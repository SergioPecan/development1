import { Component } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User} from "../../entity/user.entity";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ruc= "";
  password= "";

  constructor(private userService: UserService) {}
  login(){

  }

}
