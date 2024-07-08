import { Component, OnInit } from '@angular/core';
import { EquipoGestService } from '../equipo-gest.service';
import { JugadorDatoService } from '../jugador-dato.service';
import { Jugador } from './Jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})

export class JugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  

  constructor(private equipo: EquipoGestService, private jugadorService: JugadorDatoService) {}

  ngOnInit(): void {
    this.jugadorService.listar().subscribe(jugadores => this.jugadores = jugadores);
  }

  actualizarJugador(jugador: Jugador): void {
    this.equipo.agregarJugador(jugador);
  }
}