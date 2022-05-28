import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coffee } from '../model/coffee.model';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }


  getCoffeeList$(size: number): Observable<Coffee[]> {
    const url = `https://random-data-api.com/api/coffee/random_coffee${this.getSizeQueryString(size)}`;
    return this.http.get<Coffee[]>(url)
  }

  private getSizeQueryString(size: number): string {
    return (size && size > 0) ? `?size=${size}` : ''
  }
}
