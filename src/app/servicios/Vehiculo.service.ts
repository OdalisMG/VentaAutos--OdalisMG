import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

 constructor() { }

 getVehiculos(){
  return this.listaAutos;
 }

 eliminarVehiculo(codigo:string){
  let index= this.listaAutos.findIndex((item)=> item.codigo === codigo);
  this.listaAutos.splice(index,1);
 }
 
 agregarVehiculo(vehiculo:any){
  this.listaAutos.push(vehiculo);
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
  item.codigo.contains(filtro) || item.marca.contains(filtro) || item.modelo.contains(filtro)
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
