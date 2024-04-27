import { Component } from '@angular/core';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrl: './homeapp.component.css'
})
export class HomeappComponent{
  options2=
    [ {path:'/app/farmer/pages/crop',title:'Crops'},
      {path:'/app/farmer/pages/employee',title: 'Employees'},
      {path:'/app/farmer/pages/finance',title:'Finances'}
    ]

}


