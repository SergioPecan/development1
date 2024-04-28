import { Component, OnInit } from '@angular/core';
import {CropEntity} from "../../entity/crop.entity";


@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  cropc:CropEntity;

  constructor() {
    this.cropc=new CropEntity()
  }

}
