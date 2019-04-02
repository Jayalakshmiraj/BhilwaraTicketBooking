import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service'
import BookingService from '../booking.service'
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private route:ActivatedRoute,private moviesService: MoviesService, private router: Router, private bookingService: BookingService) { }
id:number;
private sub:any;
movie:any={};
  
ngOnInit() {
  this.sub =this.route.params.subscribe(params => {
    this.id = +params['id'];
  
    this.moviesService.getRemoteMovieById(this.id).subscribe((movie)=>
    {
      this.movie =movie;
     console.log(movie);
    })
  
  })
}

  doPayment(){
    this.router.navigate(['/payment']);
  }

  offersPage(){
    this.router.navigate(['/offers']);
  }

  // bookTicket(booking){
  //   this.bookingService.addRemoteBooking(this.booking).
  //   subscribe(() => this.router.navigate(['/payment']));

  // }
}


