import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MoviesService {
  movies=[];
  
  private movieUrl = 'http://localhost:3000/api/movies';
  private movie1Url = 'http://localhost:3000/api/booking';
  

  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[any]>{
    return this.http.get<[any]>(this.movieUrl); 		
  }
  getRemoteMovieById(id):Observable<any>{
    return this.http.get(this.movie1Url + "/" +id);
  }
}
