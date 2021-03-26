import { Injectable } from '@angular/core';
import { Cliente, Grupo } from '../model/clientes2.model';

@Injectable()
export class Clientes2Service {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() { 
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];

    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      correo: '',
      tel: '',
      grupo: 0
    };
  }
}
