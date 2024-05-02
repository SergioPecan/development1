import {Component} from '@angular/core';
import {WeatherService} from "../../services/weather.service";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  myweather: any;
  temperature: number = 0;
  sensation: number = 0;
  humidity1: number = 0;
  pressure1: number = 0;
  summary: string = '';
  iconurl: string = '';
  city: string = 'Lima';
  units: string = 'metric';

  constructor(private weatherservice: WeatherService) {
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
