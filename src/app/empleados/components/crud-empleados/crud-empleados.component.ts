import { Component, OnInit } from '@angular/core';

// Import del modelo de datos empleado
import { Empleado, Tipo } from '../../model/empleados.model';

// Lista de Servicios
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-crud-empleados',
  templateUrl: './crud-empleados.component.html',
  styleUrls: ['./crud-empleados.component.css']
})
export class CrudEmpleadosComponent implements OnInit {

  empleado: Empleado;
  tipos: Tipo[];

  constructor(private empleadosService: EmpleadosService) {
    this.empleado = this.empleadosService.nuevoEmpleado();
    this.tipos = this.empleadosService.getTipos();
   }

  ngOnInit(): void {
  }

  nuevoEmpleado(): void {
    this.empleadosService.agregarEmpleado(this.empleado);
    this.empleado = this.empleadosService.nuevoEmpleado();
  }

}
