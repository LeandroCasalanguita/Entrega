import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoGestService } from '../equipo-gest.service';
import { Jugador } from '../jugadores/Jugador';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent {

  equipo$ : Observable<Jugador []>;

  constructor(private equipo: EquipoGestService){

   this.equipo$ = equipo.listaJugadores.asObservable();

  }

  eliminar(jugador: Jugador):void{
    this.equipo.eliminarJugador(jugador);
  }
}
