import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service'
import{Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
movies=[];
  constructor(private moviesService:MoviesService,private router:Router) { }

  
    ngOnInit() {
      this.moviesService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    
  }
  select(id){
this.router.navigate(['booking/'+id])
  }
  slideDidLoad(slides){
    slides.startAutoplay();
      }
    
    
}
