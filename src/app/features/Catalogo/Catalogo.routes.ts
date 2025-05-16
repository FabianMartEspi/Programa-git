import { Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { DescuentosComponent } from './componentes/descuentos/descuentos.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';

export const CATALOGO_ROUTES: Routes = [
  {
    path: '', 
    component: ProductosComponent
  }
];
export const CATALOGO_CATEGORIAS: Routes = [
  {
    path: '', 
    component: CategoriasComponent
  }
];
export const CATALOGO_DESCUENTOS: Routes = [
  {
    path: '', 
    component: DescuentosComponent
  }
];
export const CATALOGO_FILTROS: Routes = [
  {
    path: '', 
    component: FiltrosComponent
  }
];
