import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import CustomerService from '../customer.service'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  customer:any ={};
  password:any= {};

  constructor(private router:Router,private customerService :CustomerService ) { } 
  
  ngOnInit() {}
  reset(){
    this.customerService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{ this.password=customer; this.password=this.password.result; alert("This is your password :" +this.password[0].password); });
  
  }
}
