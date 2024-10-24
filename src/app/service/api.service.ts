import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  private API_SERIES='https://jritsqmet.github.io/web-api/peliculas3.json#'

  getPeliculas():Observable<any>{
    return this.http.get(this.API_SERIES);
   
  }
}
