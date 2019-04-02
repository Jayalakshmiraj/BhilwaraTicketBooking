import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
bookings = [];
  constructor(private http: HttpClient) { }
  private bookingUrl = 'http://localhost:3000/api/booking';

  getRemoteCustomers(): Observable<[any]>{
  	return this.http.get<[any]>(this.bookingUrl); 		
 }

addRemoteBooking(booking): Observable<any>{
  return this.http.post(this.bookingUrl, booking);
}
}
