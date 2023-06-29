import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-calificaciones-alum',
  templateUrl: './calificaciones-alum.component.html',
  styleUrls: ['./calificaciones-alum.component.css']
})

export class CalificacionesAlumComponent {
  @Input() califica!: number;
  @Output() calificaClick:EventEmitter<string> = new EventEmitter();
  // starWidth!: number;
  puntosCal!: number;

  ngOnChanges():void{
    this.puntosCal = this.califica*76/10;
  }
  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }
}
