import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import CustomerService from '../customer.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
customer={name:"",password:"",address:"",email:"",phone:""}
customers=[];
  constructor(private router:Router
    ,private alertController: AlertController,
    private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getRemoteCustomers().
    subscribe((result) => {this.customers = result;});
  }
 login(customer){
for(var i=0;i<this.customers.length;i++)
{
  if((customer.email==this.customers[i].email) && (customer.password==this.customers[i].password)){
    this.router.navigate(['list']);
    break;
  }
}
 }
  createAccount(){
    this.router.navigate(['registration'])
  }
}
