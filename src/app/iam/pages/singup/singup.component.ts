import { Component } from '@angular/core';
import { User} from "../../model/user.entity";
import { AuthService } from "../../service/auth.service";
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private userService: AuthService) {}


  email = '';
  password = '';
  phone = '';
  ruc = '';
  confirmPassword = '';
  register() {
  const user: User = {
    id: 0,
    email: this.email,
    password: this.password,
    phone: this.phone,
    ruc: this.ruc,
    IsAdmin: false,
    token: ''
  };




    this.userService.createUser(user).subscribe(
      response => {
        // Aquí puedes manejar la respuesta del servidor
        console.log('Usuario creado con éxito', response);
      },
      error => {
        // Aquí puedes manejar los errores
        console.error('Hubo un error al crear el usuario', error);
      }
    );
  }




}
