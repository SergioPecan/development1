import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../services/data.service';
import { Notification } from '../../../consultant/models/notification.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataSource = new MatTableDataSource<Notification>();
  displayedColumns: string[] = ['transmitter', 'receiver', 'messages'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNotification().subscribe(notification => {
      this.dataSource.data = notification;
    });
  }
}

