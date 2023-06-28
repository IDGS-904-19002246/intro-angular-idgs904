import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  value = 'clear me';
  num1!:number;
  num2!:number;

  resultado!:number;
  operacionSeleccionada:string = 'sumar';
  tipoOperaciones=[
    'sumar',
    'restar',
    'multiplicar',
    'dividir'
  ];
  calcular(){
    switch(this.operacionSeleccionada){
      case 'sumar':this.resultado = this.num1+this.num2;
        break;
    }
  }

}
