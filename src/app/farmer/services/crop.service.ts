import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CropEntity } from "../entity/crop.entity";

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http: HttpClient) { }

  getcrops(): Observable<CropEntity[]> {
    return this.http.get<CropEntity[]>('http://localhost:3000/cultivosf');
  }
}
