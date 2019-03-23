import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  theatres = [
    {
      name : "Forum Mall",
     
      address : "Outer ring road, Madiwala",
      mobile:9897654321
     
    },
    {
      name : "IMAX",
      address : "Near shell petrol bunk, Bommanahalli",
      mobile:9897654321

    },
    {
      name : "INOX",
      address : "Outer ring road, Marathahalli",
      mobile:9897654321

    }
  ];

  navigateToSeatSelection(){

  }


  constructor(private router:Router) { }

  ngOnInit() {}
  seatShow(){
    this.router.navigate(['seat'])
  }
}
