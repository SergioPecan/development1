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
import { MatFormFieldModule } from '@angular/material/form-field';
import { CropComponent } from './farmer/pages/crop/crop.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import { CalendarComponent } from './farmer/pages/calendar/calendar.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { NewCropComponent } from './farmer/pages/new-crop/new-crop.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AddEmployeeComponent} from "./teams/pages/add-employee/add-employee.component";
import {EmployeeInformationComponent} from "./teams/pages/employee-information/employee-information.component";
import { MatCardModule } from '@angular/material/card';
import {EmployeesListComponent} from "./teams/pages/employees-list/employees-list.component";
import {BoardAdminComponent} from "./iam/component/board-admin/board-admin.component";
import {CreateAdminComponent} from "./iam/component/create-admin/create-admin.component";
import {AdminProfileComponent} from "./iam/component/profile/profile.component";
import {UserComponent} from "./iam/component/user/user.component";
import {LoginAdminComponent} from "./iam/component/login-admin/login-admin.component";
import {CreateUserComponent} from "./iam/component/create-user/create-user.component";
import { AddFarmerProductComponent } from './sales/pages/add-farmer-product/add-farmer-product.component';
import { AddSalesComponent } from './sales/pages/add-sales/add-sales.component';
import { FarmerProductInformationComponent } from './sales/pages/farmer-product-information/farmer-product-information.component';
import { SalesInformationComponent } from './sales/pages/sales-information/sales-information.component';
import { SalesOrderListComponent } from './sales/pages/sales-order-list/sales-order-list.component';
import {MatInputModule} from "@angular/material/input";

import {Farming} from "./farmer/model/farming.entity";
import { AddFarmingComponent } from './farmer/pages/add-farming/add-farming.component';
import { FarmingInformationComponent } from './farmer/pages/farming-information/farming-information.component';
import {
  MatCell, MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";
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
    CropComponent,
    CalendarComponent,
    NewCropComponent,
    AddEmployeeComponent,
    EmployeeInformationComponent,
    EmployeesListComponent,
    UserComponent,
    BoardAdminComponent,
    CreateAdminComponent,
    AdminProfileComponent,
    LoginAdminComponent,
    CreateUserComponent,
    AddFarmerProductComponent,
    AddSalesComponent,
    FarmerProductInformationComponent,
    SalesInformationComponent,
    SalesOrderListComponent,

    AddFarmingComponent,
      FarmingInformationComponent






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
    MatSnackBarModule,
    MatFormFieldModule,  // añade esta línea
    MatInputModule,
    MatButton,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatCardModule,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    MatCellDef,
    MatTableModule,
  ],
  providers: [SmoothScrollService, provideAnimationsAsync('noop'), provideAnimationsAsync()], // Añade el servicio a los proveedores
  bootstrap: [AppComponent]
})
export class AppModule { }
