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

  //funciones
  @Output() riseTempEvent = new EventEmitter(); //creacion de evento propio
  @Output() downTempEvent = new EventEmitter();
  @Output() resetTempEvent = new EventEmitter();

  riseTempInvoke() {  //Llamador de evento
    this.riseTempEvent.emit();
  }

  downTempInvoke() {
    this.downTempEvent.emit();
  }

  resetTempInvoke() {
    this.resetTempEvent.emit();
  }
}
