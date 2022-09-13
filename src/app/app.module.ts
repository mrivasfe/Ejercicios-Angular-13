import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { LocationComponent } from './location/location.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { ClimaComponent } from './clima/clima.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TopbannerComponent, LocationComponent, TemperaturaComponent, ClimaComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

//EJERICIO 1:

//1) Crearos una cuenta de github (https://github.com/) -> sign up

//2) Luego vamos https://stackblitz.com/ y click on Sign in con vuestra cuenta de github

//3) vais a https://stackblitz.com/edit/mdoctor-angular-monocomponent-sample-1 (está en el chat)

//4) Pulsais el button Fork

//5) Modificais el título como os guste más (arriba al lado de la foto)

//6) Vais a vuestra foto arriba del todo a la derecha del todo -> click

//7) Dashboard, si aparece el proyecto está bien compiado

//9:35 - 9:40
