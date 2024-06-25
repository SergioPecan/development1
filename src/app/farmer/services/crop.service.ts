import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Crop} from "../model/crop.entity";

@Injectable({
  providedIn: 'root'
})
export class CropService {
  private urlcrops ='https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/api/v1/crop';


  constructor(private http: HttpClient) { }
  //C
  createcrop(crop:Crop){
    return this.http.post<Crop>(this.urlcrops,crop);

  }
  // R

   getcrops(): Observable<Crop[]> {
      return this.http.get<Crop[]>(this.urlcrops);
  }
  // U

  // D

  deletecrop(code:string):Observable<void>{
    return this.http.delete<void>(`${this.urlcrops}${code}`);
  }

}
