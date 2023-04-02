import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

 constructor(private http: HttpClient) { }
 baseUrl = "https://www.epico.gob.ec/vehiculo/public/api/";


 getVehiculos(filtro?:string, rows?:number, page?:number){
  let body = new HttpParams();
  body = filtro ? body.set ('filtro',filtro) : body;
  body = rows ? body.set ('rows',rows) : body;
  body = page ? body.set ('page',page) : body;
  return this.http.get<any>(this.baseUrl+"vehiculos/", {params:body});
 }

 eliminarVehiculo(codigo:string){
  let index = this.listaAutos.findIndex((item)=> item.codigo === codigo);
  this.listaAutos.splice(index, 1);
 }
 
 agregarVehiculo(vehiculo:Vehiculo){
  let body = new HttpParams();
  body = vehiculo.codigo ? body.set('codigo',vehiculo.codigo) : body;
  body = vehiculo.marca ? body.set('marca',vehiculo.marca) : body;
  body = vehiculo.modelo ? body.set('modelo',vehiculo.modelo) : body;
  body = vehiculo.anio ? body.set('anio',vehiculo.anio) : body;
  body = vehiculo.calificacion ? body.set('calificacion',vehiculo.calificacion) : body;
  body = vehiculo.foto ? body.set('foto',vehiculo.foto) : body;
  return this.http.post<any>(this.baseUrl+'vehiculo/', body);
}

 actualizarVehiculo(datos:any,codigo:string){
  let vehiculo = this.listaAutos.find((item)=> item.codigo == codigo);
  vehiculo.marca = datos.marca? datos.marca : vehiculo.marca;
  vehiculo.codigo = datos.codigo? datos.codigo : vehiculo.codigo;
  vehiculo.modelo = datos.modelo? datos.modelo : vehiculo.modelo;
  vehiculo.anio = datos.anio? datos.anio : vehiculo.anio;
  vehiculo.calificacion = datos.calificacion? datos.calificacion : vehiculo.calificacion;
 }

getVehiculosFiltro(filtro:string){
  if(filtro == "" ){
    return this.listaAutos;
  }
  return this.listaAutos.filter((item)=>
    item.codigo.includes(filtro.toUpperCase()) || item.marca.includes(filtro.toUpperCase()) || item.modelo.includes(filtro.toUpperCase())
  );

}


 private listaAutos:any[] = [
  {"codigo":"001", "marca":"CHEVROLET", "modelo":"SAIL 1.5", "anio":"2023", "foto":"https://tuautoencasa.com/img/galeria/1619475914.jpg", "calificacion": 5},
  {"codigo":"002", "marca":"CHEVROLET", "modelo":"ONIX", "anio":"2023", "foto":"https://img.remediosdigitales.com/858e8a/chevrolet-onix-2023-precio-mexico_/840_560.jpg", "calificacion": 3},
  {"codigo":"003", "marca":"NISSAN", "modelo":"Sentra", "anio":"2023", "foto":"https://www.ccarprice.com/products/Nissan_Sentra_S_2022_1.jpg", "calificacion": 4},
  {"codigo":"004", "marca":"TOYOTA", "modelo":"Corolla", "anio":"2023", "foto":"https://mma.prnewswire.com/media/1923543/2023_Corolla_Sedan_001H.jpg", "calificacion": 4},
  {"codigo":"005", "marca":"HIUNDAY", "modelo":"Electra", "anio":"2021", "foto":"https://media.primicias.ec/2021/08/03140218/port-1.jpg", "calificacion": 4},
  {"codigo":"006", "marca":"NISSAN", "modelo":"Versa", "anio":"2023", "foto":"https://www.nissan-cdn.net/content/dam/Nissan/ec/vehicles/Versa_MY20/launch/especificaciones/advance-cvt-spec.png.ximg.l_3_m.smart.png", "calificacion": 4}
 ];
}
