import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  url:string = 'https://www.clipartmax.com/png/middle/129-1298625_vector-image-of-weather-forecast-color-symbol-for-sunny-weather-symbols.png';
  constructor() { }

  ngOnInit() {
  }

}