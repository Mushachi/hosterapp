import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudEmpleadosComponent } from './components/crud-empleados/crud-empleados.component';
import { ListadoEmpleadosComponent } from './components/listado-empleados/listado-empleados.component';
import { EmpleadosService } from './services/empleados.service';



@NgModule({
  declarations: [
    CrudEmpleadosComponent, 
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EmpleadosService
  ],
  exports: [
    CrudEmpleadosComponent
  ]
})
export class EmpleadosModule { }
