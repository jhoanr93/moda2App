import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './lista-productos/list.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { DatosClienteFormComponent } from './datos-cliente-form/datos-cliente-form.component';
import { DatosEnvioFormComponent } from './datos-envio-form/datos-envio-form.component';
import { DatosPagoFormComponent } from './datos-pago-form/datos-pago-form.component';
import { MaterialModule } from '../material/material.module';
import { FormulariosRoutingModule } from './formularios-routing-module';

@NgModule({
  declarations: [
    ListComponent,
    LayoutPageComponent,
    DatosClienteFormComponent,
    DatosEnvioFormComponent,
    DatosPagoFormComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
