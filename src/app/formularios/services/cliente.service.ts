import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "../../../environments/environments";
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: "root"
})

export class ClienteService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  addCliente( cliente: Cliente ):Observable<Cliente> {
    return this.http.post<Cliente>(`${ this.baseUrl}/clientes`, cliente);
  }
}