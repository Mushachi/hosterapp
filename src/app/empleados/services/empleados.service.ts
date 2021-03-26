import { Injectable } from '@angular/core';
import { Empleado, Tipo } from '../model/empleados.model';

@Injectable()
export class EmpleadosService {

  private empleados: Empleado[];
  private tipos: Tipo[];

  constructor() { 
    this.tipos = [
      {
        id: 0,
        nombre: "Selecciona uno..."
      },
      {
        id: 1,
        nombre: "Administrador"
      },
      {
        id: 2,
        nombre: "Gerente"
      },
      {
        id: 3,
        nombre: "Usuario"
      },
    ];

    this.empleados = [];
   }

   getTipos() {
     return this.tipos;
   }

   getEmpleados(){
     return this.empleados;
   }

   agregarEmpleado(empleado: Empleado){
     this.empleados.push(empleado);
   }

   nuevoEmpleado(){
     return {
       id: this.empleados.length,
       nombre: '',
       apellidos: '',
       correo: '',
       clave: '',
       tipo: 0,
       activo: 1,
     }
   }
}
