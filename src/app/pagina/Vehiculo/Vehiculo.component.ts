import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/Vehiculo.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  constructor(private vehiculoService:VehiculoService) { }
  filtrarPor: String = "";
  listaVehiculo:any[]=[];
  mostrarImagen:boolean=false;

  ngOnInit() {
    this.listaVehiculo= this.vehiculoService.getVehiculos();
  }
}