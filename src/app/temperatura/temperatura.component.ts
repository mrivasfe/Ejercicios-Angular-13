import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
})
export class TemperaturaComponent implements OnInit {
  constructor() {}
  temp:number = 22;
  
  ngOnInit() {}

  //funciones
  incrementarTemperatura(){
    this.temp++;
  }
  decrementarTemperatura(){
    this.temp--;
  }
  resetTemperatura(){
    this.temp = 22;
  }
}


