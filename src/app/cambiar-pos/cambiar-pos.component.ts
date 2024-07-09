import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cambiar-pos',
  templateUrl: './cambiar-pos.component.html',
  styleUrl: './cambiar-pos.component.scss'
})

export class CambiarPosComponent {

  @Input() Peso: number = 0;

  @Output() pesoChange : EventEmitter<number> = new EventEmitter();

  constructor() {}

  aumentar():void {
    this.Peso++;
    this.pesoChange.emit(this.Peso);
    console.log(this.Peso);
  }

  decrementar():void {
    this.Peso--;
    this.pesoChange.emit(this.Peso);
  }

}
