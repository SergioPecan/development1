import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './public/pages/home/home.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { TeamComponent } from './public/pages/team/team.component';
import { PricingComponent } from './public/pages/pricing/pricing.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import {NgOptimizedImage} from "@angular/common";
import { SmoothScrollService } from './public/services/smooth-scroll.service';
import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';
import { HomepageComponent } from './public/pages/homepage/homepage.component'; // Importa el servicio
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesListComponent } from './teams/pages/employees-list/employees-list.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { AddEmployeeComponent } from './teams/pages/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    LoginComponent,
    SingupComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    EmployeesListComponent,
    AddEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatButton
  ],
  providers: [SmoothScrollService], // Añade el servicio a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
