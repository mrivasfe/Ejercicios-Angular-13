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

//EJERCICIO 2:

// 1) Convertimos este componente (app.component.ts) en
// un componente multi-arcivho (creamos y rellenamos los archivos de template y de css) OJO: cambia los atributos
// del decorador

//2) Creamos el archivo app.component.html (vista/template)

//3) Copiamos el contenido (sin las comillas exteriores) del atributo template dentro del arhivo html

//4) Creamos ahora el archivo app.component.css (copiamos el contenido del atributo styles, sin las comillas exteriores, dentro de este archivo)

//5) Cambiar el atributo template -> templateUrl: "app.component.html"

//6) Cambiamos el atributo styles -> styleUrls:
