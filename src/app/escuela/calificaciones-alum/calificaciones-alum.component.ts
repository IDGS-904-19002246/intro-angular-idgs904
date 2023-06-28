import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calificaciones-alum',
  templateUrl: './calificaciones-alum.component.html',
  styleUrls: ['./calificaciones-alum.component.css']
})

export class CalificacionesAlumComponent {
  @Input() califica!: number;
  starWidth!: number;

  ngChange():void{
    this.starWidth = this.califica*76/10;
  }
}
