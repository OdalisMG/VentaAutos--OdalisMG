import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class clienteService {
  
  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api";

  agregarCliente(cliente:Cliente){
    let body = this.getParamsCliente(cliente);
    return this.http.post<any>(this.baseUrl+'cliente/', body);
  }

  getParamsCliente(cliente:Cliente){
    let body = new HttpParams();
    body = cliente.Id ? body.set('Id', cliente.Id) : body;
    body = cliente.Nombre ? body.set('Nombre', cliente.Nombre) : body;
    body = cliente.Apellido ? body.set('Apellido', cliente.Apellido) : body;
    return body;
  }

}
