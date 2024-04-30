import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CropEntity} from "../../entity/crop.entity";

// Definición de la interfaz Cultivo

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  crops: CropEntity[] = []; // Arreglo para almacenar los datos del crop

  constructor(private http: HttpClient) {
    this.http.get<CropEntity[]>('http://localhost:3000/cultivosf').subscribe(data => {
      this.crops = data; //
    });
  }
}

