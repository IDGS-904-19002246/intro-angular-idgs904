import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';



import { OperasBasComponent } from '../operas-bas/operas-bas.component';



// practicas angular
@NgModule({
  declarations: [OperasBasComponent],
  imports: [
    CommonModule,
    MatInputModule,MatIconModule,MatButtonModule,MatRadioModule,MatFormFieldModule,
    FormsModule
  ],
  exports:[OperasBasComponent]
})
export class OperasModule { }
