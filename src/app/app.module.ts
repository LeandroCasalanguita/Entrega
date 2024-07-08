import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CambiarPosComponent } from './cambiar-pos/cambiar-pos.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    EquipoComponent,
    JugadorEquipoComponent,
    ContactoComponent,
    InicioComponent,
    CambiarPosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
