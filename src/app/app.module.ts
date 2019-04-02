import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule }    from '@angular/common/http';

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

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegistrationComponent,AddListComponent,PasswordComponent,ListComponent,BookingComponent,PaymentComponent,SubmitPaymentComponent,DonePaymentComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
