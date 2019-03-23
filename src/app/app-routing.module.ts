import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PasswordComponent} from './password/password.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookingComponent} from './booking/booking.component';
import {SeatComponent} from './seat/seat.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'password',component:PasswordComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'booking',component:BookingComponent},
  {path:'seat',component:SeatComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
