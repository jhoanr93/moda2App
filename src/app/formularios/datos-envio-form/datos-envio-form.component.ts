import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Domicilio } from '../interfaces/domicilio.interface';
import { DomicilioService } from '../services/domicilio.service';
import { v4 as uuidv4 } from 'uuid';
import { Tienda } from '../interfaces/tienda.interface';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-datos-envio-form',
  templateUrl: './datos-envio-form.component.html',
  styles: [`
  
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
 
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
 
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
 
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
 
  input:checked + .slider {
    background-color: #2196F3;
  }
 
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
 
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
 
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
 
  .slider.round:before {
    border-radius: 50%;
  }`]

})
export class DatosEnvioFormComponent {
  dateTest: Date = new Date();

  constructor( private domicilioService: DomicilioService,
                                        private tiendaService: TiendaService){};

  selectedOption: string = '';
  
//Seccion fomulario domicilio  
  public domicilioForm = new FormGroup({
    id:     new FormControl(uuidv4(), Validators.required),
    paisDomicilio: new FormControl('', Validators.required),
    provinciaDomicilio: new FormControl('', Validators.required),
    ciudadDomicilio: new FormControl('', Validators.required),
    direccionDomicilio: new FormControl('', Validators.required),
    casaDomicilio: new FormControl('', Validators.required),
    edificioDomicilio: new FormControl(''),
    aptoDomicilio: new FormControl('', Validators.required),
    codigoPostal: new FormControl(0, Validators.required),
    disponibleDesde: new FormControl(0, Validators.required),
    disponibleHasta: new FormControl(0, Validators.required),
    recibePersonalmente: new FormControl(false)
  });

  get domicilioActual(): Domicilio{
    const domicilio =  this.domicilioForm.value as Domicilio;
    return  domicilio;  
  }

  get tiendaActual(): Tienda{
    const tienda =  this.recogeEnTiendaForm.value as Tienda;
    return  tienda;
  }


//Sección formulario recoge en tienda
  public recogeEnTiendaForm = new FormGroup({
    id: new FormControl(uuidv4(), Validators.required),
    paisTienda: new FormControl('', Validators.required),
    provinciaTienda: new FormControl('', Validators.required),
    ciudadTienda: new FormControl('', Validators.required),
    nombreRecoge: new FormControl('', Validators.required),
    idRecoge: new FormControl('', Validators.required),
    numeroRecoge: new FormControl(0, Validators.required),
    FechaEntrega: new FormControl(this.dateTest.toISOString, Validators.required),
    diaRetencion: new FormControl(0, Validators.required),
    esRegalo: new FormControl(false)
  });


  

  

  onSubmitDomicilio() {
    if (this.domicilioForm.valid) {
      // Aquí puedes manejar el envío del formulario
    this.domicilioService.addDomicilio( this.domicilioActual )
      .subscribe (
        domicilio =>  {console.log(domicilio)}
      )
    }
  }


  onSubmitTienda(){
    if (this.recogeEnTiendaForm.valid) {
      // Aquí puedes manejar el envío del formulario
      this.tiendaService.addTienda( this.tiendaActual )
      .subscribe (
        tienda =>  {console.log(tienda)}
      )
    }
  }

  
}
