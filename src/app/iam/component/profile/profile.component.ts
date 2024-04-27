import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Admin } from '../../model/admin.entity';


@Component({
  selector: 'admin-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  currentAdmin: Admin = {id: 0, username: '', password: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentAdmin().subscribe(admin => {
      if (admin) {
        this.currentAdmin = admin;
      }
    });
  }

  updateAdmin(username: string, password: string): void {
    const updatedAdmin: Admin = {
      ...this.currentAdmin,
      username: username,
      password: password
    };

    this.authService.updateAdmin(updatedAdmin).subscribe(admin => {
      this.currentAdmin = admin;
    });
  }
}

