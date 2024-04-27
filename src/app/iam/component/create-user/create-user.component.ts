import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.entity";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  users: User[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  deleteUser(id: number): void {
    this.authService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

}
