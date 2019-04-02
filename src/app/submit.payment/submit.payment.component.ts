import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-submit.payment',
  templateUrl: './submit.payment.component.html',
  styleUrls: ['./submit.payment.component.scss'],
})
export class SubmitPaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  submit(){
    this.router.navigate(['done-payment']);
  }

}
