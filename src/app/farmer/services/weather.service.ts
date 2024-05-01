import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    constructor(private http:HttpClient) {

    }
    getweather(city:string,units:string){
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=af4774df2d5d1ee1b3c7b2e37518639b&units='+units)

    }

}
