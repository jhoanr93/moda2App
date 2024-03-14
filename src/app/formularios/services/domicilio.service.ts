import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environments } from "../../../environments/environments";
import { Domicilio } from '../interfaces/domicilio.interface';

@Injectable({
  providedIn: "root"
})

export class DomicilioService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) {}

  addDomicilio( domicilio: Domicilio ):Observable<Domicilio> {
    return this.http.post<Domicilio>(`${ this.baseUrl}/domicilio`, domicilio);
  }
}