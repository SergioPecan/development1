import {Component, OnInit} from '@angular/core';
import { Admin } from '../../model/admin.entity';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.css'
})
export class CreateAdminComponent implements OnInit {
  admins: Admin[] = [];
  showCreateForm = false;
  selectedAdmin: Admin | null = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.authService.getAdmins().subscribe(admins => {
      this.admins = admins;
    });
  }

  createAdmin(username: string, password: string): void {
    const newAdmin: Admin = {id: 0, username: username, password: password};

    this.authService.createAdmin(newAdmin).subscribe(admin => {
      this.admins.push(admin);
    });
  }

  updateAdmin(id: number, username: string, password: string): void {
    const updatedAdmin: Admin = {id: id, username: username, password: password};

    this.authService.updateAdmin(updatedAdmin).subscribe(admin => {
      this.admins = this.admins.map(a => a.id === id ? admin : a);
    });
  }

  deleteAdmin(id: number): void {
    this.authService.deleteAdmin(id).subscribe(() => {
      this.admins = this.admins.filter(admin => admin.id !== id);
    });
  }
  selectAdmin(admin: Admin): void {
    this.selectedAdmin = admin;
  }
}
