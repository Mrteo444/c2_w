import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  peliculas: any[] = [];

  constructor(private servicio: ApiService) {}

  ngOnInit() {
    this.servicio.getPeliculas().subscribe(pelis => {
      this.peliculas = pelis.peliculas; // Accede a la propiedad "peliculas" del JSON
    });
  }
}


