import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';

const routes: Routes = [
  { path: '',redirectTo: '',pathMatch: 'full'},
  { path: '', component: InicioComponent },
  { path: 'jugadores', component: JugadorEquipoComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
