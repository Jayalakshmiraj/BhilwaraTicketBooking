import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  moviesArray = [
    {
      id: 0,
      name: 'Aram',
      image: 'assets/aram.jpg',
      badge: '100'
    },
    {
      id: 1,
      name: '2.0',
      image: 'assets/2.0.jpg',
      badge: '100'
    },
    {
      id: 2,
      name: 'Captain Marvel',
      image: 'assets/captain.jpg',
      badge: '22'
    },
    {
      id: 3,
      name: 'Kesari',
      image: 'assets/kesari.png',
      badge: '80'
    }
  ];

  searchText;

  constructor(private router: Router) { }

  ngOnInit() { }
  bookTicket() {
    this.router.navigate(['./booking'])
  }

  searchMovie() {
    if (this.searchMovie) {
      return this.moviesArray.filter((item) => {
        return item.name.toLowerCase().indexOf(this.searchText) > -1;
      });
    }
    else {
      return this.moviesArray;
    }
  }
  slideDidLoad(slides){
    slides.startAutoplay();
      }
    
}
