import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherService} from "../../services/weather.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrl: './homeapp.component.css'
})
export class HomeappComponent{
  myweather: any;
  temperature:number=0;
  sensation:number=0;
  humidity1:number=0;
  pressure1:number=0;

  constructor(private weatherservice: WeatherService) {

  }
  ngOnInit():void{
    this.weatherservice.getweather().subscribe({
      next:(res)=>{
        console.log(res);
        this.myweather=res;
        console.log(this.myweather);
        this.temperature=this.myweather.main.temp;
        this.sensation=this.myweather.main.feels_like;
        this.humidity1=this.myweather.main.humidity;
        this.pressure1=this.myweather.main.pressure;

      },
      error:(error)=> console.log(error.messsage),
      complete:() =>console.log('Api llamada correctamente')
    })

  }








  options2=
    [ {path:'/app/farmer/pages/crop',title:'Crops'},
      {path:'/app/farmer/pages/employee',title: 'Employees'},
      {path:'/app/farmer/pages/finance',title:'Finances'}
    ]

}


