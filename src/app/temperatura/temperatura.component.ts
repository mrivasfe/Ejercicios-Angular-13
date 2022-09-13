import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
})
export class TemperaturaComponent implements OnInit {
  constructor() {}
  temp = '22';
  ngOnInit() {}

  //funciones
  resetTemperatura(){
    this.temp = "-";
  }
}


