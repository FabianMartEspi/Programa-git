import { Routes } from '@angular/router';
import { CerrarSesionComponent } from './componentes/cerrar-sesion/cerrar-sesion.component';
import { EliminarCuentaComponent } from './componentes/eliminar-cuenta/eliminar-cuenta.component';
import { HistorialComponent } from '../Compras/componentes/historial/historial.component';
import { ModificacionComponent } from './componentes/modificacion/modificacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [CommonModule, ReactiveFormsModule],
  
})
export class UserManagementModule {}





export const GESTIONUSUARIO_CERRARS: Routes = [
  {
    path: '', 
    component: CerrarSesionComponent
  }
];
export const GESTIONUSUARIO_ELIMINARC: Routes = [
  {
    path: '', 
    component: EliminarCuentaComponent
  }
];
export const GESTIONUSUARIO_HISTORIAL: Routes = [
  {
    path: '', 
    component: HistorialComponent
  }
];
export const GESTIONUSUARIO_MODIFICAR: Routes = [
  {
    path: '', 
    component: ModificacionComponent
  }
];
export const GESTIONUSUARIO_PERFIL: Routes = [
  {
    path: '', 
    component: PerfilComponent
  }
];



