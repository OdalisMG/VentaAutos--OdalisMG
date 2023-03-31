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
  
  ngOnInit() {
    this.listaVehiculo = this.vehiculoService.getVehiculos();
  }

}
