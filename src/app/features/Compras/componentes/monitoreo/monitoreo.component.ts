import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitoreo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})

export class MonitoreoComponent {
  // Datos de ejemplo para el monitoreo de pedidos
  pedidos = [
    { id: 1, producto: 'Rosas Blancas', usuario: 'Juan Perez', fechaPedido: '2025-03-10', estado: 'En preparación', tienda: 'Tienda Online Flowers' },
    { id: 2, producto: 'Rosas Rojas', usuario: 'Maria Lopez', fechaPedido: '2025-03-08', estado: 'Entregado', tienda: 'Tienda Online Flowers' },
    { id: 3, producto: 'Rosas Lavanda', usuario: 'Carlos Ruiz', fechaPedido: '2025-03-05', estado: 'Cancelado', tienda: 'Tienda Online Flowers' },
    { id: 4, producto: 'Claveles', usuario: 'Ana Gómez', fechaPedido: '2025-03-03', estado: 'Entregado', tienda: 'Tienda Online Flowers' },
    { id: 5, producto: 'Tulipanes', usuario: 'Luis Torres', fechaPedido: '2025-03-01', estado: 'En preparación', tienda: 'Flores Bogota' },
    { id: 6, producto: 'Margaritas', usuario: 'Martha Soto', fechaPedido: '2025-02-28', estado: 'Entregado', tienda: 'Flores Tocancipa' },
    { id: 7, producto: 'Ramo de Rosas', usuario: 'Pedro Ramirez', fechaPedido: '2025-02-25', estado: 'En preparación', tienda: 'Flores Gachancipa' },
    { id: 8, producto: 'Caja de Chocolates', usuario: 'Lucia Vega', fechaPedido: '2025-02-22', estado: 'Entregado', tienda: 'FloresWEB' },
    { id: 9, producto: 'Orquideas', usuario: 'Roberto Diaz', fechaPedido: '2025-02-20', estado: 'Cancelado', tienda: 'elmundodelcolor' },
    { id: 10, producto: 'Arreglo Floral', usuario: 'Fernanda Salas', fechaPedido: '2025-02-18', estado: 'Entregado', tienda: 'Elvalle' }
  ];

  // Variables para la paginación
  paginaActual = 1;
  itemsPorPagina = 5;
  totalPaginas = Math.ceil(this.pedidos.length / this.itemsPorPagina);
  pedidosPaginados = this.pedidos.slice(0, this.itemsPorPagina);

  // Función para actualizar la lista paginada
  actualizarPaginacion() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.pedidosPaginados = this.pedidos.slice(inicio, fin);
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

  // Funciones para las acciones del monitoreo de pedidos
  verDetalles(id: number) {
    console.log(`Ver detalles del pedido con ID: ${id}`);
    // Aquí podrías redirigir a una página de detalles específicos
  }

  actualizarEstado(id: number) {
    console.log(`Actualizar estado del pedido con ID: ${id}`);
    // Lógica para actualizar el estado del pedido
  }

  cancelarPedido(id: number) {
    console.log(`Cancelar pedido con ID: ${id}`);
    // Lógica para cancelar el pedido
  }
}