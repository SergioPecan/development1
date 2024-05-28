// monitoring.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Companie } from "../../models/companies.model";

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  companies: Companie[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
}
