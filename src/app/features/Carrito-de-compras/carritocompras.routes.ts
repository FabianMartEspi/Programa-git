import { Routes } from '@angular/router';
import { AgregarProductosComponent } from './componentes/añadir productos/agregar-productos.component';
import { ContinuarCompraComponent } from './componentes/continuar-compra/continuar-compra.component';
import { EliminarProductosComponent } from './componentes/eliminar-productos/eliminar-productos.component';
import { ModificarCantidadesComponent } from './componentes/modificar-cantidades/modificar-cantidades.component';
import { RevisarSeleccionComponent } from './componentes/revisar-seleccion/revisar-seleccion.component';



export const CARRITOCOMPRAS_AGREGARP: Routes = [
  {
    path: '', 
    component: AgregarProductosComponent
  }
];
export const CARRITOCOMPRAS_CONTINUARCOMPRA: Routes = [
  {
    path: '', 
    component: ContinuarCompraComponent
  }
];
export const CARRITOCOMPRAS_EliminarP: Routes = [
  {
    path: '', 
    component: EliminarProductosComponent
  }
];
export const CARRITOCOMPRAS_MODIFICARC: Routes = [
  {
    path: '', 
    component: ModificarCantidadesComponent
  }
];
export const CARRITOCOMPRAS_REVISARS: Routes = [
  {
    path: '', 
    component: RevisarSeleccionComponent
  }
];


