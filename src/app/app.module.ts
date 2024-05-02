import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './public/pages/home/home.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { TeamComponent } from './public/pages/team/team.component';
import { PricingComponent } from './public/pages/pricing/pricing.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import { NgOptimizedImage} from "@angular/common";
import { SmoothScrollService } from './public/services/smooth-scroll.service';
import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { HomeappComponent } from './farmer/pages/homeapp/homeapp.component';
import { FinanceComponent } from './farmer/pages/finance/finance.component';
import { CropComponent } from './farmer/pages/crop/crop.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import { CalendarComponent } from './farmer/pages/calendar/calendar.component';
import {MatCard,MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { NewCropComponent } from './farmer/pages/new-crop/new-crop.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AddEmployeeComponent} from "./teams/pages/add-employee/add-employee.component";
import {EmployeeInformationComponent} from "./teams/pages/employee-information/employee-information.component";
import {EmployeesAndTeamsComponent} from "./teams/pages/employees-and-teams/employees-and-teams.component";
import {EmployeesListComponent} from "./teams/pages/employees-list/employees-list.component";

// Importa el servicio

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
    HomeappComponent,
    FinanceComponent,
    CropComponent,
    CalendarComponent,
    NewCropComponent,
    AddEmployeeComponent,
    EmployeeInformationComponent,
    EmployeesAndTeamsComponent,
    EmployeesListComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatToolbar,
    MatAnchor,
    MatCard,
    MatSnackBarModule
  ],
  providers: [SmoothScrollService, provideAnimationsAsync('noop'), provideAnimationsAsync()], // Añade el servicio a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
