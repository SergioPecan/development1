import {Component } from '@angular/core';
import { Crop} from "../../model/crop.entity";
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
  id:number = 0;
  code:string = '';
  currency:string = '';
  value:number = 0;
  register() {

    const crop: Crop = {
      id: this.id,
      code: this.code,
      currency: this.currency,
      value: this.value
    };


    //agregar subscribe
    this.cropservice.createcrop(crop).subscribe(response => {

        this.snack.open('Crop created correctly', 'Dismiss', {
          duration: 2000,
          panelClass: ['login-snackbar-success']
        });

        this.router.navigate(['/crop']);
        console.log('Crop created correctly', response);

      },

      error => {

        console.log('There was a mistake when creating this crop, try again later', error);

      }
    );

  }




}
