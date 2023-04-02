import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  @Input() rows:number=10;
  @Input() pages:number;

  listaPaginas:any[];
  constructor() { }

  ngOnInit() {
  }

    generarPaginacion(){
      this.listaPaginas =[];
      for(let i=1; i <= this.pages; i++){
        this.listaPaginas.push(i);
      }
    }
  
    selectPage(){

    }

}
