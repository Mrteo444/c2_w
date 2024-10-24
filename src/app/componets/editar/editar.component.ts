import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../../service/peliculas.service';
import { ActivatedRoute, RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'] // Corrección aquí (styleUrls)
})
export class EditarComponent {
  servicio = inject(PeliculasService);
  ruta = inject(ActivatedRoute);

  id: any;
  titulo: any;
  valoracion: any;
  opiniones: any;
  imagen: any;

  ngOnInit() {
    this.ruta.params.subscribe(parametro => {
      this.servicio.getPeli(parametro['idpeli']).subscribe(p => {
        // Asegúrate que estas claves sean correctas
        this.id = p.id; // Esto depende de cómo tu API devuelve los datos
        this.titulo = p.titulo;
        this.valoracion = p.valoracion;
        this.opiniones = p.opiniones;
        this.imagen = p.imagen;
      });
    });
  }

  editar(formulario: any) {
    console.log('Formulario enviado:', formulario.value);
    this.servicio.putPeli(formulario.value).subscribe(() => {
      location.href = 'peliculas'; 
    }, error => {
      console.error('Error al actualizar la película:', error);
    });
  }
}
