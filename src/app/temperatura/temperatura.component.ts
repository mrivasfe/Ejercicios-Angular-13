import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
})
export class TemperaturaComponent implements OnInit {
  constructor() {}

  @Input() temp: number;

  ngOnInit() {}
  
  @Output() riseTempEvent = new EventEmitter(); //creacion de evento propio
  @Output() downTempEvent = new EventEmitter();
  @Output() resetTempEvent = new EventEmitter();

  /*
  riseTempInvoke() {  //Llamador de evento
    this.riseTempEvent.emit();
  }

  downTempInvoke() {
    this.downTempEvent.emit();
  }
  
  resetTempInvoke() {
    this.resetTempEvent.emit();
  }
  */

  @Output() tempChange = new EventEmitter<number>();

  riseTempInvoke() {  //Llamador de evento para incrementar
    this.tempChange.emit(this.temp + 1);
  }

  downTempInvoke() {  //Llamador de evento para decrementar
    this.tempChange.emit(this.temp - 1);
  }
  //var = variable global
  //let = variable local en la funcion
  updateTempInvoke(param: string) {   //Funcion update enlazada a ngModelChange
    let paramNumber: number = +param;
    this.tempChange.emit(paramNumber);
  }
}
