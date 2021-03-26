// Lista de Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Lista de Servicios
import { Clientes2Service } from './services/clientes2.service';

// Lista de Componentes
import { CrudClientesComponent } from './components/crud-clientes/crud-clientes.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [
    CrudClientesComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    Clientes2Service
  ],
  exports: [
    CrudClientesComponent
  ]
})
export class Clientes2Module { }
