import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "../../../environments/environments";
import { DatosPago } from "../interfaces/datosPago.interface";

@Injectable({
  providedIn: "root"
})

export class DatosPagoService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  addDatosPago( datosPago: DatosPago ):Observable<DatosPago> {
    return this.http.post<DatosPago>(`${ this.baseUrl}/datosPago`, datosPago);
  }
}