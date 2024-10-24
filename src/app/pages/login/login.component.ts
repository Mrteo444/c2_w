import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio=inject(LoginService)

  email:any
  password:any



  login(usuario:any){
    this.servicio.postLogin(usuario.value).subscribe(u=>{
      if(u.accessToken !=''){
        localStorage.setItem('login','true')
        window.location.href='peliculas'

      }
    })


  }

}
