import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
  .image-container {
    position: relative;
    display: inline-block;
  }
  
  input[type="checkbox"] {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1; /* Asegura que el checkbox esté sobre la imagen */
  }
  
  img {
    display: block;
    width: 100%; /* Ajusta el tamaño de la imagen según sea necesario */
    height: auto; /* Para mantener la relación de aspecto */
  }
  `]
})
export class ListComponent implements OnInit{

  public productos: Producto[] = [];

  constructor ( private productosService: ProductosService ) {
   
  }

  ngOnInit(): void {
      this.productosService.getProductos().subscribe(
        resp => {
          this.productos = resp;
        }
      )
  }

}