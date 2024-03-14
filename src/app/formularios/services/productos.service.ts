import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../interfaces/producto.interface";
import { environments } from "../../../environments/environments";

@Injectable({
  providedIn: "root"
})

export class ProductosService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl}/productos`);
  }
}