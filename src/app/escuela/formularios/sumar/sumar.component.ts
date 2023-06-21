import { Component } from '@angular/core';
// material.angular.io
// ng add @angular/material
// Yes
// Indigo/Pink
// Yes
// Include and enable animations

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent {
  num1 = '';
  num2 = '';
  res:number = 0;

  sumar(){
    this.res = parseInt(this.num1) + parseInt(this.num2);
  }

}
