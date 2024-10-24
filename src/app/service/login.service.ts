import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  

  //post logiarse 
  private API_LOGIN='http://localhost:3000/login'

  postLogin(user:JSON):Observable<any>{
    return this.http.post(this.API_LOGIN,user);
  }


  postLogin1(user: JSON): Observable<any> {
    return this.http.post(this.API_LOGIN, user).pipe(
      tap((response: any) => {
        localStorage.setItem('login', 'true');
        localStorage.setItem('role', response.role);  // role viene de la respuesta
      })
    );
  }
   /// putregistro 

   private API_REGISTRO='http://localhost:3000/users'

   postRegisstrar(user:JSON):Observable<any>{
     return this.http.post(this.API_REGISTRO,user);
   }


   //// suasuario get 
   getuusuario(id:string):Observable<any>{
    return this.http.get(this.API_LOGIN+"/"+id)
   }
}
