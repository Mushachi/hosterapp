import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from "./../../model/clientes2.model";
import { Clientes2Service } from "./../../services/clientes2.service";

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[];
  grupo: Grupo[];

  constructor(private clientesService: Clientes2Service) {
    this.clientes = this.clientesService.getClientes();
    this.grupo = this.clientesService.getGrupos();
   }

  ngOnInit(): void {
  }

}
