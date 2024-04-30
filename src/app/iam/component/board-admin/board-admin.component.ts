import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Admin} from "../../model/admin.entity";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  currentAdmin: Admin | null = null;
  constructor(private authService: AuthService) { } // Inyecta el servicio de autenticación
  ngOnInit(): void {
    this.authService.getCurrentAdmin().subscribe(admin => {
      this.currentAdmin = admin;
      console.log(admin)
    });
  }

}
