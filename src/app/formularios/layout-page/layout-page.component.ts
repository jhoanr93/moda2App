import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
 mostrarComponente: boolean = true;

 ocultarLanding = () => this.mostrarComponente = false;
 
  
}

