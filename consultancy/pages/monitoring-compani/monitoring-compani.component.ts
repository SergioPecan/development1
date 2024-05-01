import {Component, OnInit} from '@angular/core';
import {Crop} from "../../model/crop.entity";
import {CropService} from "../../service/crop.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../iam/service/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {NotificationEntity} from "../../model/notification.entity";

@Component({
  selector: 'app-monitoring-compani',
  templateUrl: './monitoring-compani.component.html',
  styleUrl: './monitoring-compani.component.css'
})
export class MonitoringCompaniComponent implements OnInit {
  ngOnInit(): void{}
  crop:Crop[]=[];
  constructor(private cropservice:CropService){}
}

export class NotificationComponent {
  constructor (private notificationservice: NotificationService,private snack:MatSnackBar, private router:Router) {}

  transmitter= '';
  receiver= '';
  message='';
  register():void  {

    const noti: NotificationEntity={
      transmitter:this.transmitter,
      receiver:this.receiver,
      message:this.message


    };
    this.notificationservice.createnotification(noti).subscribe(response => {

      this.snack.open('Notification created correctly', 'Dismiss', {
        duration: 2000,
        panelClass: ['notification-snackbar-success']
      });

      this.router.navigate(['/home']);//el routing a la vista general
      console.log('Notification created correctly', response);
    },

      error=>{
        console.log('There was an error, try again ',error)

        }
    );
  }
}
