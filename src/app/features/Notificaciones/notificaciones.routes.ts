import { Routes, RouterModule } from '@angular/router';
import { InformacionDePedidosComponent } from './componentes/informacion-de-pedidos/informacion-de-pedidos.component';
import { InformacionRelevanteComponent } from './componentes/informacion-relevante/informacion-relevante.component';
import { NotificacionespqrsComponent } from './componentes/notificaciones-pqrs/notificaciones-pqrs.component';
//import { routes } from '../../app.routes'; 
//import { NgModule } from '@angular/core';






export const NOTIFICIONES_INFORMACIONP: Routes = [
  {
    path: '', 
    component: InformacionDePedidosComponent
  }
];
export const NOTIFICIONES_INFORMACIONR: Routes = [
  {
    path: '', 
    component: InformacionRelevanteComponent
  }
];
export const NOTIFICIONES_PQRS: Routes = [
  {
    path: '', 
    component: NotificacionespqrsComponent
  }
];


//@NgModule({ imports: [RouterModule.forRoot(routes)], 
//  exports: [RouterModule] }) 
//  export class AppRoutingModule { }

