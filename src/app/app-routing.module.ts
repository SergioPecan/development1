import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './public/pages/homepage/homepage.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SingupComponent } from './iam/pages/singup/singup.component';
import { BoardAdminComponent } from './iam/component/board-admin/board-admin.component';
import { ProfileComponent } from './iam/component/profile/profile.component';
import { CreateAdminComponent } from './iam/component/create-admin/create-admin.component';
import { UserComponent } from './iam/component/user/user.component';
import { AuthGuard } from './iam/service/auth.guard'; // Importa el guardia de ruta
import {AuthUserGuard} from "./iam/service/auth.guard";
const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SingupComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthUserGuard]},
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard] }, // Añade el guardia de ruta aquí
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
