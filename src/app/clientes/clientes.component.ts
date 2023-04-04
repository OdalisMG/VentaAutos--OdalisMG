import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina = "Customer record";
  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

  goInicio(): void {
    this._router.navigate(['/home']);
  }

  registra(): void {
    alert("En construccion");
    this._router.navigate(["/autos"]);
  }

}
