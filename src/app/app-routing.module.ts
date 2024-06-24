import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {HomeappComponent} from "./farmer/pages/homeapp/homeapp.component";
import {CropComponent} from "./farmer/pages/crop/crop.component";
import {NewCropComponent} from "./farmer/pages/new-crop/new-crop.component";
import {CalendarComponent} from "./farmer/pages/calendar/calendar.component";
import {EmployeesListComponent} from "./teams/pages/employees-list/employees-list.component";
import {AddEmployeeComponent} from "./teams/pages/add-employee/add-employee.component";
import {EmployeesAndTeamsComponent} from "./teams/pages/employees-and-teams/employees-and-teams.component";
import {BoardAdminComponent} from "./iam/component/board-admin/board-admin.component";
import {AuthUserGuard} from "./iam/service/auth.guard";
import { AddFarmerProductComponent } from './sales/pages/add-farmer-product/add-farmer-product.component';
import { AddSalesComponent } from './sales/pages/add-sales/add-sales.component';
import { FarmerProductInformationComponent } from './sales/pages/farmer-product-information/farmer-product-information.component';
import { SalesInformationComponent } from './sales/pages/sales-information/sales-information.component';
import { SalesOrderListComponent } from './sales/pages/sales-order-list/sales-order-list.component';


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
  {path:'homepage/sales/add-farmer-product',component:AddFarmerProductComponent},
  {path:'homepage/sales/add-sales',component:AddSalesComponent},
  {path:'homepage/sales/farmer-product-information',component:FarmerProductInformationComponent},
  {path:'homepage/sales/sales-information',component:SalesInformationComponent},
  {path: 'homepage/sales/sales-order-list/:Id',component:SalesOrderListComponent },
  {path:'homepage/employee',component:EmployeesListComponent},
  {path:'homepage/employee/add-employee',component:AddEmployeeComponent},
  {path:'homepage/employee/employee-and-teams',component:EmployeesAndTeamsComponent},
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'create-admin', component: CreateAdminComponent },
      { path: 'create-user', component: CreateUserComponent }
    ] },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
