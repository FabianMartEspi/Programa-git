import { Routes } from '@angular/router';
import { DescuentosComponent } from './componentes/descuentos/descuentos.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';





export const OFERTAS_DESCUENTOS: Routes = [
  {
    path: '', 
    component: DescuentosComponent
  }
];
export const OFERTAS_PROMOCIONES: Routes = [
  {
    path: '', 
    component: PromocionesComponent
  }
];




