import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordComponent } from './password/password.component';
import { ListComponent } from './list/list.component';
import {AddListComponent } from './add.list/add.list.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { SubmitPaymentComponent } from './submit.payment/submit.payment.component';
import { DonePaymentComponent } from './done.payment/done.payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'password',component:PasswordComponent},
  {path:'list',component:ListComponent},
  {path:'add-list',component:AddListComponent},
  {path:'booking/:id',component:BookingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'submit-payment',component:SubmitPaymentComponent },
  {path:'done-payment',component:DonePaymentComponent },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
