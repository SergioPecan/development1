import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {HomeappComponent} from "./farmer/pages/homeapp/homeapp.component";
import {CropComponent} from "./farmer/pages/crop/crop.component";
import {NewCropComponent} from "./farmer/pages/new-crop/new-crop.component";
import {CalendarComponent} from "./farmer/pages/calendar/calendar.component";
import {FinanceComponent} from "./farmer/pages/finance/finance.component";
import {EmployeesListComponent} from "./teams/pages/employees-list/employees-list.component";
import {AddEmployeeComponent} from "./teams/pages/add-employee/add-employee.component";
import {EmployeesAndTeamsComponent} from "./teams/pages/employees-and-teams/employees-and-teams.component";


const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomepageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SingupComponent},

  {path:'homepage', component:HomeappComponent},
  {path:'homepage/crop', component:CropComponent},

  {path:'homepage/crop/new-crop',component:NewCropComponent},
  {path:'homepage/crop/calendar',component: CalendarComponent},

  {path:'homepage/finance',component:FinanceComponent},

  {path:'homepage/employee',component:EmployeesListComponent},
  {path:'homepage/employee/new-employee',component:AddEmployeeComponent},
  {path:'homepage/employee/employee-and-tems',component:EmployeesAndTeamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
