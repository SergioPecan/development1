import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {HomeappComponent} from "./farmer/pages/homeapp/homeapp.component";
import {CropComponent} from "./farmer/pages/crop/crop.component";
import {NewCropComponent} from "./farmer/pages/new-crop/new-crop.component";
import {CalendarComponent} from "./farmer/pages/calendar/calendar.component";

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SingupComponent},

  { path:'homepage', component:HomeappComponent},
  { path:'homepage/crop', component:CropComponent},
  {path:'homepage/crop/new-crop',component:NewCropComponent},
  {path:'homepage/crop/calendar',component: CalendarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
