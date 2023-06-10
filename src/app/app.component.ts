import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';
  duplicaValor(valor:number):number{
    return valor*2
  }

  Alumno={
    matricula:1234,
    nombre:'Juan',
    fechaNacimiento: new Date()
  };
}
