import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {HomeappComponent} from "./farmer/pages/homeapp/homeapp.component";
import {CropComponent} from "./farmer/pages/crop/crop.component";
import {FinanceComponent} from "./farmer/pages/finance/finance.component";

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SingupComponent},
  //{ path: '**', redirectTo: 'home'},
  { path:'homeapp', component:HomeappComponent},
  { path:'crop', component:CropComponent},
  { path: 'finance', component: FinanceComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
