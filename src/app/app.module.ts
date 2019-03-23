import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PasswordComponent} from './password/password.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookingComponent} from './booking/booking.component';
import {SeatComponent} from './seat/seat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,PasswordComponent,DashboardComponent,BookingComponent,SeatComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
