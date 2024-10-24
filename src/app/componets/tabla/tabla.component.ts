import { Component, inject } from '@angular/core';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { RouterLink } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servico=inject(PeliculasService)

  pelicula:any


  ngOnInit(){
    this.servico.getLPelis().subscribe(p=>{
      this.pelicula=p
    })
  }

  eliminar(id:string){
    this.servico.dropPeli(id).subscribe()
    location.href='pelis'

  }

}
