import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Collection} from "../model/collection.entity";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private apiUrl = 'http://localhost:3000/collections';

  constructor(private http: HttpClient) { }

  getCollectionData() {
    return this.http.get<Collection[]>(this.apiUrl);
  }

}
