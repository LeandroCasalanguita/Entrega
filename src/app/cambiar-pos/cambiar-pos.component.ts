import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cambiar-pos',
  templateUrl: './cambiar-pos.component.html',
  styleUrl: './cambiar-pos.component.scss'
})

export class CambiarPosComponent {

  @Input() Peso: number = 0;

  @Output() 
  PesoChange : EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  aumentar():void {
    this.Peso++;
    this.PesoChange.emit(this.Peso);
  }

  decrementar():void {
    this.Peso--;
    this.PesoChange.emit(this.Peso);
  }

}
