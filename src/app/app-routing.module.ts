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
import {BoardAdminComponent} from "./iam/component/board-admin/board-admin.component";
import {AuthUserGuard} from "./iam/service/auth.guard";
import { UserComponent } from './iam/component/user/user.component';


import { AdminProfileComponent } from './iam/component/profile/profile.component';
import { CreateAdminComponent } from './iam/component/create-admin/create-admin.component';

import { AuthGuard } from './iam/service/auth.guard'; // Importa el guardia de ruta

import {CreateUserComponent} from "./iam/component/create-user/create-user.component";
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
  {path:'homepage/employee/employee-and-teams',component:EmployeesAndTeamsComponent},
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'create-admin', component: CreateAdminComponent },
      { path: 'create-user', component: CreateUserComponent }
    ] },
  { path: '**', redirectTo: 'home' },

  {path:'ick',component:AddEmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
