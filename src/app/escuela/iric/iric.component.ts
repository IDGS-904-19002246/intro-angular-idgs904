import { Component } from '@angular/core';
import { alumnosIr } from '../alumnosIr';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  alumnoTitle!:string;

  alumnosIric:alumnosIr[]=[
    {
    "matricula": 1234,
    "nombre":"Mario",
    "edad":23,
    "correo":"mario@gmail.com",
    "pago":16900,
    "foto":"https://w0.peakpx.com/wallpaper/719/656/HD-wallpaper-shadbase-shadman-sr-pelo.jpg",
    "calif":4.8
    },
    {
      "matricula": 1235,
      "nombre":"Juan",
      "edad":27,
      "correo":"J@gmail.com",
      "pago":5,
      "foto":"data:image/jpeg;base64,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",
      "calif":5
    },
    {
      "matricula": 1236,
      "nombre":"Juan Jose",
      "edad":23,
      "correo":"JJ@gmail.com",
      "pago":10,
      "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyZR7Q1xiW5KJwD2EgaDqfruo1o3X821TJepkgG2-Hx8FNWzbLoRUmL2cbtnl1MUIDQ0&usqp=CAU",
      "calif":10
      }
  ]

  showImagen():void{
    this.muestraImg = !this.muestraImg;
  }

  onCalificaClick(message:string){
    this.alumnoTitle = `${message}`;
  }

}


