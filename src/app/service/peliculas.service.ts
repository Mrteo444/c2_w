import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor(private http:HttpClient) { }

  private API_PELI=" http://localhost:3000/pelis"

  postPeli(peli:JSON):Observable<any>{
    return this.http.post(this.API_PELI,peli);
  }

  ////eliinar drop 

  dropPeli(id:string):Observable<any>{
    return this.http.delete(`${this.API_PELI}/${id}`);
  }

  ///editar 


  putPeli(peli:any):Observable<any>{
    return this.http.put(`${this.API_PELI}/${peli.id}`,peli);
  }

  
  ///leer una solo paersona get 

  getPeli(id:string):Observable<any>{

    return this.http.get(this.API_PELI+"/"+id)
  }


  //leees datos get 
  getLPelis():Observable<any>{
    return this.http.get(this. API_PELI);
  }

}
