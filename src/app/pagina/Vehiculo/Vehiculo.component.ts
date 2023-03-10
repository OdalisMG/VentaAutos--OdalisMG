import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/Vehiculo.service';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
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