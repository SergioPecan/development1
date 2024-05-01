import {Component } from '@angular/core';
import { Crop } from "../../entity/crop.entity";
import { CropService } from "../../services/crop.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-crop',
  templateUrl: './new-crop.component.html',
  styleUrl: './new-crop.component.css'
})
export class NewCropComponent {

  constructor(private cropservice: CropService, private snack: MatSnackBar, private router: Router) {
  }

  id = 0;
  code = '';
  area = 0;
  product = '';
  localization = '';
  status = '';
  cost = 0;
  profit = 0;
  ruc = 0;

  register() {


    const crop: Crop = {
      id: 0,
      code: this.code,
      area: this.area,
      product: this.product,
      localization: this.localization,
      status: this.status,
      cost: this.cost,
      profit: this.profit,
      ruc: this.ruc
    };


    //agregar subscribe
    this.cropservice.createcrop(crop).subscribe(response => {

        this.snack.open('Crop created correctly', 'Dismiss', {
          duration: 2000,
          panelClass: ['login-snackbar-success']
        });

        this.router.navigate(['/homeapp']);
        console.log('Crop created correctly', response);

      },

      error => {

        console.log('There was a mistake when creating this crop, try again later', error);

      }
    );

  }




}
