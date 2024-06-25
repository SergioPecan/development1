import {Component, OnInit} from '@angular/core';
import {FarmerService} from "../../services/farmer.service";

@Component({
  selector: 'app-farming-information',
  templateUrl: './farming-information.component.html',
  styleUrl: './farming-information.component.css'
})
export class FarmingInformationComponent implements OnInit {
  farmingList: any[] = [];
  displayedColumns: string[] = ['ruc', 'email', 'phone', 'socialReason'];

  constructor(private farmerService: FarmerService) { }

  ngOnInit(): void {
    this.farmerService.getAllFarming().subscribe(
      data => {
        this.farmingList = data;
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
