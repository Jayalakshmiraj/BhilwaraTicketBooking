import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import CustomerService from '../customer.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  customer={name:"",password:"",address:"",email:"",phone:""};
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit() {}
  loginIn(customer){
  console.log(customer)
    this.customerService.addRemoteCustomer(this.customer).
    subscribe(()=> this.router.navigate(['./login']));
  }

}
