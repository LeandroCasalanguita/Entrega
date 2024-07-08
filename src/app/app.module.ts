import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { CambiarPosComponent } from './cambiar-pos/cambiar-pos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    ContactoComponent,
    InicioComponent,
    JugadorEquipoComponent,
    JugadoresComponent,
    CambiarPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
