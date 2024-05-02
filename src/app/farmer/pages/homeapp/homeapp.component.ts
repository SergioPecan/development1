import { Component } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {Crop} from "../../entity/crop.entity";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrl: './homeapp.component.css'
})
export class HomeappComponent {
  myweather: any;
  temperature: number = 0;
  sensation: number = 0;
  humidity1: number = 0;
  pressure1: number = 0;
  summary: string = '';
  iconurl: string = '';
  city: string = 'Lima';
  units: string = 'metric';

  crops: Crop[] = [];
  first=this.crops.length > 0 ? this.crops[0] : null;

  constructor(private weatherservice: WeatherService, private http: HttpClient) {
    this.http.get<Crop[]>('http://localhost:3000/cropst').subscribe(data => {
      this.crops = data; //
    });
  }


  ngOnInit(): void {
    this.weatherservice.getweather(this.city, this.units).subscribe({
      next: (res) => {
        console.log(res);

        this.myweather = res;
        console.log(this.myweather);
        this.temperature = this.myweather.main.temp;
        this.sensation = this.myweather.main.feels_like;
        this.humidity1 = this.myweather.main.humidity;
        this.pressure1 = this.myweather.main.pressure;
        this.summary = this.myweather.weather[0].main;

        this.iconurl = 'https://openweathermap.org/img/wn/' + this.myweather.weather[0].icon + '@2x.png';


      },
      error: (error) => console.log(error.messsage),
      complete: () => console.log('Api llamada correctamente')
    })

  }

}





