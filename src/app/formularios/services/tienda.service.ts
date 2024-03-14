import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "../../../environments/environments";
import { Tienda } from '../interfaces/tienda.interface';

@Injectable({
  providedIn: "root"
})

export class TiendaService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  addTienda( tienda: Tienda ):Observable<Tienda> {
    return this.http.post<Tienda>(`${ this.baseUrl}/tienda`, tienda);
  }
}