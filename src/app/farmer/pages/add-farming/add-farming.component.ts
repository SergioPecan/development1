import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FarmerService } from '../../services/farmer.service';

@Component({
  selector: 'app-add-farming',
  templateUrl: './add-farming.component.html',
  styleUrls: ['./add-farming.component.css']
})
export class AddFarmingComponent {
  ruc = '';
  email = '';
  phone: number = 0;
  socialReason = '';

  constructor(private farmerService: FarmerService, formBuilder: FormBuilder) {}

  register() {
    const farming = {
      ruc: this.ruc,
      email: { email: this.email },
      phone: { phone: this.phone },
      socialReason: { socialReason: this.socialReason }
    };

    this.farmerService.createFarming(farming)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(farming);
          console.error(error);
        }
      )
  }
}
