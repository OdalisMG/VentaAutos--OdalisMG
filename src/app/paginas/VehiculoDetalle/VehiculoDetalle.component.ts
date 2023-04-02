import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from 'src/app/servicios/Vehiculo.service';

@Component({
  selector: 'app-VehiculoDetalle',
  templateUrl: './VehiculoDetalle.component.html',
  styleUrls: ['./VehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {
  
  vehiculo:any;
  isEditable:boolean=false;
  codigoVehiculo:string;
  formularioVehiculo:FormGroup;
  constructor(private vehiculoService: VehiculoService, private routes: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioVehiculo = this.formBuilder.group({
      "marca":[''],
      "modelo":[''],
      "anio":[''],
      "codigo":[''],
      "id":[''],
      "foto":[''],
      "calificacion":['']
    }
    );
    this.routes.params.subscribe((params:any) => {
      this.codigoVehiculo = params['codigo'];
      console.log(this.codigoVehiculo);
      this.consultarVehiculo();
    })
  }

  consultarVehiculo(){
    this.vehiculoService.getVehiculo(this.codigoVehiculo).subscribe((respuesta)=>{
      if(respuesta.codigo == '1'){
        this.vehiculo = respuesta.data;
      }
    })
  }

  inicializarFormulario(){
    this.formularioVehiculo.controls['marca'].setValue(this.vehiculo.marca);
    this.formularioVehiculo.controls['modelo'].setValue(this.vehiculo.modelo);
    this.formularioVehiculo.controls['anio'].setValue(this.vehiculo.anio);
    this.formularioVehiculo.controls['codigo'].setValue(this.vehiculo.codigo);
    this.formularioVehiculo.controls['id'].setValue(this.vehiculo.id);
    this.formularioVehiculo.controls['foto'].setValue(this.vehiculo.foto);
    this.formularioVehiculo.controls['calificacion'].setValue(this.vehiculo.calificacion);


  }

}
