import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  servicio=inject(LoginService)

  
  email:any
  password:any

  usuario:any

  registro(usuario:NgForm){
    this.servicio.postRegisstrar(usuario.value).subscribe()
     window.location.href='login'

  }

}
