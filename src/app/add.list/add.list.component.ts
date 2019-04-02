import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add.list',
  templateUrl: './add.list.component.html',
  styleUrls: ['./add.list.component.scss'],
})
export class AddListComponent implements OnInit {

  
  movies = {name:'', year:'', image_url:'', production_house:'', rating:'', type:'',language:'',date:''};
  constructor(private movieService: MoviesService, private router: Router) { }
  ngOnInit() {}
 
}
