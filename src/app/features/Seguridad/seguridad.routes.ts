import { Routes } from '@angular/router';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { ProtocolosComponent } from './componentes/protocolos/protocolos.component';
import { PoliticasComponent } from './componentes/politicas/politicas.component';





export const SEGURIDAD_AUTENTICACION: Routes = [
  {
    path: '', 
    component: AutenticacionComponent
  }
];
export const SEGURIDAD_PROTOCOLOS: Routes = [
  {
    path: '', 
    component: ProtocolosComponent
  }
];
export const SEGURIDAD_POLITICAS: Routes = [
  {
    path: '', 
    component: PoliticasComponent
  }
];




