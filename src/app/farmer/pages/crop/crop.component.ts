import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Crop} from "../../model/crop.entity";
import {Product} from "../../model/product.entity";
// Definición de la interfaz Cultivo

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  private urlcrops ='https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/crop';
  private urlprod='https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/product';
  crops: Crop[] = []; // Arreglo para almacenar los datos del crop
  products:Product[]=[];


  constructor(private http: HttpClient) {
    this.http.get<Crop[]>(this.urlcrops).subscribe(data => {
      this.crops = data; //

    });

    this.http.get<Product[]>(this.urlprod).subscribe(data => {
      this.products = data; //

    });

  }

  protected readonly Product = Product;
}

