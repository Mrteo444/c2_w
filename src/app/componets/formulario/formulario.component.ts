import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  servicio=inject(PeliculasService)


  id: any
  titulo: any
  valoracion: any
  Nopiniones: any
  
  imagen:any


  guardar(formulario: any) {
    alert("guardado");
    this.servicio.postPeli(formulario.value).subscribe({
      next: (response) => {
        console.log('Datos guardados con éxito', response);
      },
      error: (error) => {
        console.error('Error al guardar los datos', error);
      }
    });
    this.borrar()
    location.href = 'peliculas'



  }
  borrar() {
    this.id = '';
    this.titulo = '';
    this.valoracion = '';
    this.Nopiniones = '';
  
    this.imagen = '';
  }

}
