import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { DatosPagoService } from '../services/datosPago.service';
import { DatosPago } from '../interfaces/datosPago.interface';
@Component({
  selector: 'app-datos-pago-form',
  templateUrl: './datos-pago-form.component.html',
  styles: ``
})
export class DatosPagoFormComponent {
  dateFechaTarjeta: Date = new Date();

  constructor( private datosPagoService: DatosPagoService) {}

  public formDatosPago: FormGroup = new FormGroup({

    id: new FormControl(uuidv4(), Validators.required),
    nombreBono: new FormControl('', Validators.required),
    nombreBanco: new FormControl('', Validators.required),
    nombreTarjeta: new FormControl('', Validators.required),
    numeroTarjeta: new FormControl(0, Validators.required),
    fechaVencimiento: new FormControl(this.dateFechaTarjeta.toISOString, Validators.required),
    codigoSeguridad: new FormControl(0, Validators.required),
    Cuotas: new FormControl(0, Validators.required),
    facturasElectronica: new FormControl(false, Validators.required),
    aceptaTerminos: new FormControl(false, Validators.required)   

  });

  get datosPagoActual(): DatosPago{
    const datosPago =  this.formDatosPago.value as DatosPago;
    return  datosPago;  
  }

  onSubmitDatosPago() {
    if (this.formDatosPago.valid) {
      // Aquí puedes manejar el envío del formulario
      this.datosPagoService.addDatosPago( this.formDatosPago.value )
      .subscribe (
        datosPago =>  {console.log(datosPago)}
      )
    }
  }
}
