import { Component, OnInit } from '@angular/core';
import {FarmerService} from "../../services/farmer.service";

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
  datos: any[]=[];

  constructor(private dataservice: FarmerService) {}

  ngOnInit(): void {
    this.dataservice.getdata().subscribe(data => {
      this.datos = data;
    });
  }
}
