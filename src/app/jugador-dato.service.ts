import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from './jugadores/Jugador';

const URL = 'https://66884d970bc7155dc01b0ca2.mockapi.io/jugadores';

@Injectable({
  providedIn: 'root'
})

export class JugadorDatoService {

  constructor(private http: HttpClient) { }

  listar (): Observable <Jugador[]>{
    return this.http.get<Jugador[]>(URL);
  }

  

}
