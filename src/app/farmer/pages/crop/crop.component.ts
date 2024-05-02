import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Crop} from "../../model/crop.entity";

// Definición de la interfaz Cultivo

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  private urlcrops ='http://localhost:3000/cropst';
  crops: Crop[] = []; // Arreglo para almacenar los datos del crop


  constructor(private http: HttpClient) {
    this.http.get<Crop[]>(this.urlcrops).subscribe(data => {
      this.crops = data; //

    });

  }
}

