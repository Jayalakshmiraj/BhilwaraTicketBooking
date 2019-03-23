import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 username="";
 password="";
  constructor(private router:Router,public alertController: AlertController) { }

  ngOnInit() {}
  login(){
    if(this.username == this.password){
      this.router.navigate(['dashboard'])
    }
    else if(this.username==="" && this.password===""){
      this.emptyAlert();
    }
   
    else{
    this.presentAlert();
    }
   
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'login Failed',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async emptyAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'enter your username && password',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  createAccount(){
    this.router.navigate(['register'])
  }
}
