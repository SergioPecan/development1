import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import {crop} from '../model/crop.entity'


@Injectable({
  providedIn: 'root'
})


export class CropService{
  crop:any = null;

  private apiUrl = 'http://localhost:3000/api/v1/';

  currentCropSubject:BehaviorSubject<crop | null> = new BehaviorSubject<crop | null>(null);
  currentCrop=this.currentCropSubject.asObservable();
  constructor(private http: HttpClient) {};
  getCrop():  Observable<crop[]> {
    return this.http.get<crop[]>(`${this.apiUrl}crop`);
  };

}
