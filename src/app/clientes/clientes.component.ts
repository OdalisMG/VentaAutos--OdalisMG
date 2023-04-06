import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/Cliente';
import { clienteService } from '../servicios/Clientes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class Clientescomponent implements OnInit {

  tituloPagina = "Registro del cliente";
  formularioCliente: FormGroup;

  constructor(private _router: Router,private clienteService: clienteService, private fomrBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioCliente = this.fomrBuilder.group({
      "Id": [null],
      "Nombre": [null],
      "Apelido":[null],
    });
  }

  goInicio(): void {
    this._router.navigate(['/home']);
  }

  registra(): void {
    //alert("En construccion");
    //this._router.navigate(["/autos"]);
    let cliente: Cliente = {...this.formularioCliente.value};
    console.log(cliente);
    this.clienteService.agregarCliente(cliente).subscribe((respuesta) =>{
      alert(respuesta.mensaje);
      console.log(respuesta);
    } )
  }

}
