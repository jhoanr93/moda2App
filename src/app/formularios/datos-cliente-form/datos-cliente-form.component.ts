import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Cliente, TipoDocumento, TipoPais } from '../interfaces/cliente.interface';
import { v4 as uuidv4 } from 'uuid';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-datos-cliente-form',
  templateUrl: './datos-cliente-form.component.html',
  styles: ``
})
export class DatosClienteFormComponent {

  constructor(private clienteService: ClienteService ){};

public clienteForm = new FormGroup({
  id:     new FormControl(uuidv4(), Validators.required),
  nombre: new FormControl('', Validators.required),
  apellido: new FormControl('', Validators.required),
  dni: new FormControl(0, Validators.required),
  tipo_dni: new FormControl<TipoDocumento>(TipoDocumento.CC, Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  pais_residencia: new FormControl(<TipoPais>(TipoPais.COL), Validators.required),
  codigo_postal: new FormControl(0, Validators.required),
  extension: new FormControl('', Validators.required),
  telefono: new FormControl(0, Validators.required)  
});

public tipoDocumento = [
  { id: "CC", desc: 'Cedula de Ciudadania'},
  { id: "TI", desc: 'Tarjeta de Identidad'},
  { id: "CE", desc: 'Cedula de Extranjeria'}
]

public TipoPais = [
  { id: "COL", desc: 'Colombia'},
  { id: "ARG", desc: 'Argentina'},
  { id: "PER", desc: 'Peru'},
  { id: "MEX", desc: 'Mexico'}
]

get clienteActual(): Cliente {
 const cliente = this.clienteForm.value as Cliente;
 return cliente;
}

onSubmitCliente(): void {
  if (this.clienteForm.valid) {
    // Aquí puedes manejar el envío del formulario
    this.clienteService.addCliente( this.clienteActual )
      .subscribe (
        cliente =>  {console.log(cliente)}
      )
  }

 /* formulario:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.formulario.value);
    }
  }*/
}
}