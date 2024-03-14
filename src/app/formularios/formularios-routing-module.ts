import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ListComponent } from './lista-productos/list.component';
import { DatosPagoFormComponent } from './datos-pago-form/datos-pago-form.component';
import { DatosComprobanteFormComponent } from './datos-comprobante-form/datos-comprobante-form.component';
import { DatosClienteFormComponent } from './datos-cliente-form/datos-cliente-form.component';
import { DatosEnvioFormComponent } from './datos-envio-form/datos-envio-form.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [          
      { path: 'list', component: ListComponent },      
      { path: 'form-pago', component: DatosPagoFormComponent},
      { path: 'form-envio', component: DatosEnvioFormComponent},
      { path: 'comprobante', component: DatosComprobanteFormComponent},
      { path: 'form-cliente', component: DatosClienteFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }