import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class Clientescomponent implements OnInit {

  tituloPagina = "c l i e n t";
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
