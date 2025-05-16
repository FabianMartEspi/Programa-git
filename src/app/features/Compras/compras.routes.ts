import { Routes } from '@angular/router';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { MonitoreoComponent } from './componentes/monitoreo/monitoreo.component';




export const COMPRAS_DETALLES: Routes = [
  {
    path: '', 
    component: DetallesComponent
  }
];
export const COMPRAS_FACTURAS: Routes = [
  {
    path: '', 
    component: FacturasComponent
  }
];
export const COMPRAS_HISTORIAL: Routes = [
  {
    path: '', 
    component: HistorialComponent
  }
];
export const COMPRAS_MONITOREO: Routes = [
  {
    path: '', 
    component: MonitoreoComponent
  }
];



