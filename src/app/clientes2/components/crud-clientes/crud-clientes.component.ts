import { Component, OnInit } from '@angular/core';

// Import del modelo de datos
import { Cliente, Grupo } from "./../../model/clientes2.model";

// Lista de Servicios
import { Clientes2Service } from './../../services/clientes2.service';

@Component({
  selector: 'app-crud-clientes',
  templateUrl: './crud-clientes.component.html',
  styleUrls: ['./crud-clientes.component.css']
})
export class CrudClientesComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];

  constructor(private clientes2Service: Clientes2Service) {
    this.cliente = this.clientes2Service.nuevoCliente();
    this.grupos = this.clientes2Service.getGrupos();
   }

  ngOnInit(): void {
  }

  // Aqui deben de ir todos los metodos
  nuevoCliente(): void {
    this.clientes2Service.agregarCliente(this.cliente);
    this.cliente = this.clientes2Service.nuevoCliente();
  }

}
