import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jugador } from './jugadores/Jugador';
import { JugadoresComponent } from './jugadores/jugadores.component';



@Injectable({
  providedIn: 'root'
})


export class EquipoGestService {

  private maxPorEquipo = 11;
  private _listaJugadores : Jugador [] = [];

  listaJugadores: BehaviorSubject<Jugador[]> = new BehaviorSubject(this._listaJugadores);

  jugadores : JugadoresComponent | undefined;

  constructor() { }

  agregarJugador(jugador: Jugador) {

    let item : Jugador | undefined = this._listaJugadores.find((v1) => v1.Nombre == jugador.Nombre);

    if(!item && this._listaJugadores.length<this.maxPorEquipo){
      this._listaJugadores.push({... jugador}); 
    }
    this.listaJugadores.next(this._listaJugadores);
  } 

  eliminarJugador(jugador: Jugador) {
    this._listaJugadores = this._listaJugadores.filter(v1 => v1.Nombre != jugador.Nombre);
    this.listaJugadores.next(this._listaJugadores);
  }
}
