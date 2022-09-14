import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title: string = 'Weather APP';
  temp: number = 22;
  
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

