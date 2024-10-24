import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { TablaComponent } from "../tabla/tabla.component";

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  cerrar(){
    localStorage.removeItem('login')
    window.location.href='login'

  }

}
