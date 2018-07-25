import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Weekendtrip } from './weekendtrip';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ShowtripsService {
  baseURL = 'http://localhost:3000/weekendTrips';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Weekendtrip[]> {
    return this.http.get<Weekendtrip[]>(this.baseURL);
  }
}
