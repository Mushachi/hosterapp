import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lista de Componentes
import { MainComponent } from './index/main/main.component';
import { CrudClientesComponent } from './clientes2/components/crud-clientes/crud-clientes.component';
import { LoginComponent } from './login/components/login/login.component';
import { CrudEmpleadosComponent } from './empleados/components/crud-empleados/crud-empleados.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'empleados',
    component: CrudEmpleadosComponent
  },
  {
    path: 'clientes',
    component: CrudClientesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
