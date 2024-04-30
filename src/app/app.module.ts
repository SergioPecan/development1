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
import { EmployeeComponent } from './farmer/pages/employee/employee.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import { CalendarComponent } from './farmer/pages/calendar/calendar.component';
import {MatCard} from "@angular/material/card";
import { NewCropComponent } from './farmer/pages/new-crop/new-crop.component';


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
    EmployeeComponent,
    CalendarComponent,
    NewCropComponent,


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
  ],
  providers: [SmoothScrollService], // Añade el servicio a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
