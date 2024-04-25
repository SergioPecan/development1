import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { TeamComponent } from './public/pages/team/team.component';
import { PricingComponent } from './public/pages/pricing/pricing.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from "./iam/pages/singup/singup.component";

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
