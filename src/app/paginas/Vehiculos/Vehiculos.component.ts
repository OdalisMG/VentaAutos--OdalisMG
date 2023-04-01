import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/Vehiculo.service';

@Component({
  selector: 'app-Vehiculos',
  templateUrl: './Vehiculos.component.html',
  styleUrls: ['./Vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  filtrarPor:string = "";

  listaVehiculo:any[] = [];
  mostrarImagen:boolean = false;

  rows:number = 5
  
  ngOnInit() {
    this.listaVehiculo = this.vehiculoService.getVehiculos();
  }

  cambioRows(){}
  
  mostraAlerta(calificacion:any){
    alert("La calificacion es: " + calificacion);
  }

  eliminarVehiculo(vehiculoparam:any){
  
  }

  getListaVehiculos(){
    this.listaVehiculo = this.vehiculoService.getVehiculosFiltro(this.filtrarPor);
    return this.listaVehiculo;

}


  }


