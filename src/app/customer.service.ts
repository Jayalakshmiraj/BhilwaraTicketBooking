import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers=[];
  private customerUrl = 'http://localhost:3000/api/customers';
  private authrUrl = 'http://localhost:3000/api/authenticate';
  constructor(private http: HttpClient) { }

  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
 }
 addRemoteCustomer(customer): Observable<any>{
  return this.http.post(this.customerUrl,customer);
 }
 getRemoteCustomerPassword(phone): Observable<[]>
 {
  return this.http.get<[]>(this.authrUrl+'/'+phone);
 }
}
