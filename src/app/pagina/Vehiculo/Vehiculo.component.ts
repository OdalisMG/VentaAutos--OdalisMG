import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/Vehiculo.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './Vehiculo.component.html',
  styleUrls: ['./Vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  constructor(private vehiculoService:VehiculoService) { }
  filtrarPor: String = "";
  listaVehiculo:any[]=[];
  mostrarImagen:boolean=false;

  ngOnInit() {
    this.listaVehiculo= this.vehiculoService.getVehiculos();
  }
}