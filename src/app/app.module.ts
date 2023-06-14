import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { ievnComponent } from './ievn/ievn.component';
import { IricComponent } from './escuela/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    ievnComponent,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
