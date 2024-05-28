import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../../services/data.service";
import {Contract} from "../../models/contract.model";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.css'
})
export class ContractsComponent implements OnInit{
 contracts: Contract[] = [];
  constructor(private dataService :DataService) {}

  ngOnInit() {
    this.dataService.getContracts().subscribe(contract => {
      this.contracts = contract;
    });
  }
}


