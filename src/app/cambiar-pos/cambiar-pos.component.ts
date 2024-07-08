import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cambiar-pos',
  templateUrl: './cambiar-pos.component.html',
  styleUrl: './cambiar-pos.component.scss'
})

export class CambiarPosComponent {


  @Input() Peso:number=0 ;
  @Output() pesoActualizado : EventEmitter<number> = new EventEmitter(); 

  constructor(){}

  aumentar(){
    this.Peso++;
    this.pesoActualizado.emit(this.Peso);
  }

  decrementar(){
    this.Peso--;
    this.pesoActualizado.emit(this.Peso);
  }

}
