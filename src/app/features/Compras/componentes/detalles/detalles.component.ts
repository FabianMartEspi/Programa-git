import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent {
  // Datos de ejemplo para el historial de compras
  compras = [
    { id: 1, producto: 'Rosas Blancas', usuario: 'Juan Perez', fechaCompra: '2025-03-10', estado: 'En preparación', tienda: 'Tienda Online Flowers' },
    { id: 2, producto: 'Rosas Rojas', usuario: 'Maria Lopez', fechaCompra: '2025-03-08', estado: 'Entregado', tienda: 'Tienda Online Flowers' },
    { id: 3, producto: 'Rosas Lavanda', usuario: 'Carlos Ruiz', fechaCompra: '2025-03-05', estado: 'Cancelado', tienda: 'Tienda Online Flowers' },
    { id: 4, producto: 'Claveles', usuario: 'Ana Gómez', fechaCompra: '2025-03-03', estado: 'Entregado', tienda: 'Tienda Online Flowers' },
    { id: 5, producto: 'Tulipanes', usuario: 'Luis Torres', fechaCompra: '2025-03-01', estado: 'En preparación', tienda: 'Flores Bogota' },
    { id: 6, producto: 'Margaritas', usuario: 'Martha Soto', fechaCompra: '2025-02-28', estado: 'Entregado', tienda: 'Flores Tocancipa' },
    { id: 7, producto: 'Ramo de Rosas', usuario: 'Pedro Ramirez', fechaCompra: '2025-02-25', estado: 'En preparación', tienda: 'Flores Gachancipa' },
    { id: 8, producto: 'Caja de Chocolates', usuario: 'Lucia Vega', fechaCompra: '2025-02-22', estado: 'Entregado', tienda: 'FloresWEB' },
    { id: 9, producto: 'Orquideas', usuario: 'Roberto Diaz', fechaCompra: '2025-02-20', estado: 'Cancelado', tienda: 'elmundodelcolor' },
    { id: 10, producto: 'Arreglo Floral', usuario: 'Fernanda Salas', fechaCompra: '2025-02-18', estado: 'Entregado', tienda: 'Elvalle' }
  ];

  // Variables para la paginación
  paginaActual = 1;
  itemsPorPagina = 5;
  totalPaginas = Math.ceil(this.compras.length / this.itemsPorPagina);
  comprasPaginadas = this.compras.slice(0, this.itemsPorPagina);

  // Variables para el filtro del administrador
  filtro = {
    usuario: '',
    tienda: ''
  };

  resultados: any[] = [];

  // Función para actualizar la lista paginada
  actualizarPaginacion() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.comprasPaginadas = this.compras.slice(inicio, fin);
  }

  // Función para avanzar a la página anterior
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarPaginacion();
    }
  }

  // Función para avanzar a la página siguiente
  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.actualizarPaginacion();
    }
  }

  // Funciones para las acciones del historial de compras
  verDetalles(id: number) {
    console.log(`Ver detalles de la compra con ID: ${id}`);
    // Aquí podrías redirigir a una página de detalles específicos
  }

  enviarMensaje(id: number) {
    console.log(`Enviar mensaje sobre la compra con ID: ${id}`);
    // Lógica para abrir un formulario de mensajes o contacto
  }

  comprarDeNuevo(id: number) {
    console.log(`Comprar de nuevo el producto con ID: ${id}`);
    // Aquí podrías añadir el producto nuevamente al carrito
  }

  // Función para redireccionar a monitoreo
  redirigirMonitoreo() {
    console.log('Redirigir a monitoreo');
    // Aquí podrías redirigir a la página de monitoreo
  }

  // Función para redireccionar a ver facturas
  redirigirFacturas() {
    console.log('Redirigir a ver facturas');
    // Aquí podrías redirigir a la página de facturas
  }

  // Función para redireccionar al historial
  redirigirHistorial() {
    console.log('Redirigir al historial');
    // Aquí podrías redirigir a la página del historial
  }

  // Función para filtrar pedidos desde el panel de administrador
  filtrarPedidos() {
    this.resultados = this.compras.filter((pedido) => {
      const coincideUsuario = this.filtro.usuario
        ? pedido.usuario.toLowerCase().includes(this.filtro.usuario.toLowerCase())
        : true;

      const coincideTienda = this.filtro.tienda
        ? pedido.tienda.toLowerCase().includes(this.filtro.tienda.toLowerCase())
        : true;

      return coincideUsuario && coincideTienda;
    });
  }
}