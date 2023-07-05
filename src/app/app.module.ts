import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { ievnComponent } from './ievn/ievn.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { OperasModule } from './escuela/formularios/operas-bas/operas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionesAlumComponent } from './escuela/calificaciones-alum/calificaciones-alum.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionesAlumComponent,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    OperasModule,
    FormsModule,

    ReactiveFormsModule,

    AppRoutingModule
    // MatInputModule,MatIconModule,MatButtonModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }