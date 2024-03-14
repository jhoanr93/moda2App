import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './formularios/layout-page/layout-page.component';
import { ListComponent } from './formularios/lista-productos/list.component';
import { DatosEnvioFormComponent } from './formularios/datos-envio-form/datos-envio-form.component';
import { DatosClienteFormComponent } from './formularios/datos-cliente-form/datos-cliente-form.component';
import { DatosComprobanteFormComponent } from './formularios/datos-comprobante-form/datos-comprobante-form.component';

const routes: Routes = [
 {
  path: '',
  loadChildren: () => import('./formularios/formularios.module').then(m => m.FormulariosModule)
 },
 {
  path: '',
  redirectTo: 'formularios',
  pathMatch: 'full'
},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
