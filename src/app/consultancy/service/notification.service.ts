import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NotificationEntity} from "../model/notification.entity";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  apiUrl = 'Http://LocalHost:3000';
  constructor(private http:HttpClient){  }
  createnotification(noti:NotificationEntity){
    return this.http.post<NotificationEntity>(this.apiUrl,noti);
  }
}





