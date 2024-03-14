import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from  '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
     
  ]
})
export class MaterialModule { }
