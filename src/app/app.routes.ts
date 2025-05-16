import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotModule } from './features/Atencion-al-cliente/componentes/chat-bot/chat-bot.module'





export const routes: Routes = [
// sidebar
// este componente es la pagina principal
{
  path: '',
  loadChildren: () => import('./features/index/index.routes').then (c => c.INDEX_ROUTES )
},
// en este componente termina la pagina principal




  // este modulo corresponde a catalogo

  {
    path: 'productos',
    loadChildren: () => import('./features/Catalogo/Catalogo.routes').then(c => c.CATALOGO_ROUTES)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./features/Catalogo/Catalogo.routes').then(c => c.CATALOGO_CATEGORIAS)
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./features/Catalogo/Catalogo.routes').then(c => c.CATALOGO_DESCUENTOS)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./features/Catalogo/Catalogo.routes').then(c => c.CATALOGO_FILTROS)
  },

// fin del modulo catalogo




// este modulo corresponde a atencion al cliente
{
  path: 'chatbot',
  loadChildren: () => import('./features/Atencion-al-cliente/atencioncliente.routes').then(c => c.ATENCIONCLIENTE_CHATBOT)
},
{
  path: 'pqrs',
  loadChildren: () => import('./features/Atencion-al-cliente/atencioncliente.routes').then(c => c.ATENCIONCLIENTE_PQRS)
},
{
  path: 'preguntasf',
  loadChildren: () => import('./features/Atencion-al-cliente/atencioncliente.routes').then(c => c.ATENCIONCLIENTE_PREGUNTASF)
},
{
  path: 'soporteenl',
  loadChildren: () => import('./features/Atencion-al-cliente/atencioncliente.routes').then(c => c.ATENCIONCLIENTE_SOPORTEENL)
},
// fin del modulo atencion al cliente



// este modulo corresponde a carrito de compras
{
  path: 'agregarp',
  loadChildren: () => import('./features/Carrito-de-compras/carritocompras.routes').then(c => c.CARRITOCOMPRAS_AGREGARP)
},
{
  path: 'continuarcompra',
  loadChildren: () => import('./features/Carrito-de-compras/carritocompras.routes').then(c => c.CARRITOCOMPRAS_CONTINUARCOMPRA)
},
{
  path: 'eliminarp',
  loadChildren: () => import('./features/Carrito-de-compras/carritocompras.routes').then(c => c.CARRITOCOMPRAS_EliminarP)
},
{
  path: 'modificarc',
  loadChildren: () => import('./features/Carrito-de-compras/carritocompras.routes').then(c => c.CARRITOCOMPRAS_MODIFICARC)
},
{
  path: 'revisars',
  loadChildren: () => import('./features/Carrito-de-compras/carritocompras.routes').then(c => c.CARRITOCOMPRAS_REVISARS)
},
// fin del modulo carrito de compras


// este modulo corresponde a compras
{
  path: 'detalles',
  loadChildren: () => import('./features/Compras/compras.routes').then(c => c.COMPRAS_DETALLES)
},
{
  path: 'facturas',
  loadChildren: () => import('./features/Compras/compras.routes').then(c => c.COMPRAS_FACTURAS)
},
{
  path: 'historial',
  loadChildren: () => import('./features/Compras/compras.routes').then(c => c.COMPRAS_HISTORIAL)
},
{
  path: 'monitoreo',
  loadChildren: () => import('./features/Compras/compras.routes').then(c => c.COMPRAS_MONITOREO)
},
// fin del modulo compras


// este modulo corresponde a gestión de usuario
{
  path: 'cerrar',
  loadChildren: () => import('./features/Gestion-de-usuario/gestionusuario.routes').then(c => c.GESTIONUSUARIO_CERRARS)
},
{
  path: 'eliminarc',
  loadChildren: () => import('./features/Gestion-de-usuario/gestionusuario.routes').then(c => c.GESTIONUSUARIO_ELIMINARC)
},
{
  path: 'historial',
  loadChildren: () => import('./features/Gestion-de-usuario/gestionusuario.routes').then(c => c.GESTIONUSUARIO_HISTORIAL)
},
{
  path: 'modificardatos',
  loadChildren: () => import('./features/Gestion-de-usuario/gestionusuario.routes').then(c => c.GESTIONUSUARIO_MODIFICAR)
},
{
  path: 'perfil',
  loadChildren: () => import('./features/Gestion-de-usuario/gestionusuario.routes').then(c => c.GESTIONUSUARIO_PERFIL)
},
// fin del modulo gesetión de usuario




// este modulo corresponde a notificaciones
{
  path: 'informacionp',
  loadChildren: () => import('./features/Notificaciones/notificaciones.routes').then(c => c.NOTIFICIONES_INFORMACIONP)
},
{
  path: 'informacionr',
  loadChildren: () => import('./features/Notificaciones/notificaciones.routes').then(c => c.NOTIFICIONES_INFORMACIONR)
},
{
  path: 'notificacionespqrs',
  loadChildren: () => import('./features/Notificaciones/notificaciones.routes').then(c => c.NOTIFICIONES_PQRS)
},
// fin del modulo notificaciones





// este modulo corresponde a novedades
{
  path: 'n_actualizaciones',
  loadChildren: () => import('./features/Novedades/novedades.routes').then(c => c.NOVEDADES_ACTUALIZACIONES)
},
{
  path: 'n_productos',
  loadChildren: () => import('./features/Novedades/novedades.routes').then(c => c.NOVEDADES_NUEVOSP)
},
{
  path: 'n_promociones',
  loadChildren: () => import('./features/Novedades/novedades.routes').then(c => c.NOVEDADES_PROMOCIONES)
},
// fin del modulo novedades


// este modulo corresponde a ofertas
{
  path: 'ofertasdescuentos',
  loadChildren: () => import('./features/Ofertas/ofertas.routes').then(c => c.OFERTAS_DESCUENTOS)
},
{
  path: 'ofertaspromociones',
  loadChildren: () => import('./features/Ofertas/ofertas.routes').then(c => c.OFERTAS_PROMOCIONES)
},
// fin del modulo ofertas


// este modulo corresponde a seguridad
{
  path: 'autenticacion',
  loadChildren: () => import('./features/Seguridad/seguridad.routes').then(c => c.SEGURIDAD_AUTENTICACION)
},
{
  path: 'protocolos',
  loadChildren: () => import('./features/Seguridad/seguridad.routes').then(c => c.SEGURIDAD_PROTOCOLOS)
},
{
  path: 'politicas',
  loadChildren: () => import('./features/Seguridad/seguridad.routes').then(c => c.SEGURIDAD_POLITICAS)
},
// fin del modulo seguridad
// fin sidebar




// apertura del header

{
  path: 'catalogo',
  loadChildren: () => import('./features/header/catalogo/Catalogo.routes').then(c => c.CATALOGO_PRINCIPAL)
},

{
  path: 'nosotros',
  loadChildren: () => import('./features/header/nosotros/nosotros.routes').then(c => c.NOSOTROS_PRINCIPAL)
},

{
  path: 'contacto',
  loadChildren: () => import('./features/header/contactos/contacto.routes').then(c => c.CONTACTO_EMPRESA)
},
{
  path: 'creatucuenta',
  loadChildren: () => import('./features/header/creatucuenta/creatucuenta.routes').then(c => c.CREA_TU_CUENTA)
},
{
  path: 'iniciasesion',
  loadChildren: () => import('./features/header/ingresa/ingresar.routes').then(c => c.INGRESA_TU_CUENTA)
},



// cierre del header


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ChatBotModule // ojo de importar el módulo de chatbot aquí para todo el gaes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
