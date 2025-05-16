import { Routes } from '@angular/router';
import { ActualizacionesComponent } from './componentes/actualizaciones/actualizaciones.component';
import { NuevosProductosComponent } from './componentes/nuevos-productos/nuevos-productos.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';




export const NOVEDADES_ACTUALIZACIONES: Routes = [
  {
    path: '', 
    component: ActualizacionesComponent
  }
];
export const NOVEDADES_NUEVOSP: Routes = [
  {
    path: '', 
    component: NuevosProductosComponent
  }
];
export const NOVEDADES_PROMOCIONES: Routes = [
  {
    path: '', 
    component: PromocionesComponent
  }
];




