import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})

export class FacturasComponent {
  // Datos de ejemplo para las facturas
  facturas = [
    { id: 1, producto: 'Rosas Blancas', usuario: 'Juan Perez', fechaFactura: '2025-03-10', estado: 'Pagado', tienda: 'Tienda Online Flowers' },
    { id: 2, producto: 'Rosas Rojas', usuario: 'Maria Lopez', fechaFactura: '2025-03-08', estado: 'Pendiente', tienda: 'Tienda Online Flowers' },
    { id: 3, producto: 'Rosas Lavanda', usuario: 'Carlos Ruiz', fechaFactura: '2025-03-05', estado: 'Cancelado', tienda: 'Tienda Online Flowers' },
    { id: 4, producto: 'Claveles', usuario: 'Ana Gómez', fechaFactura: '2025-03-03', estado: 'Pagado', tienda: 'Tienda Online Flowers' },
    { id: 5, producto: 'Tulipanes', usuario: 'Luis Torres', fechaFactura: '2025-03-01', estado: 'Pendiente', tienda: 'Flores Bogota' },
    { id: 6, producto: 'Margaritas', usuario: 'Martha Soto', fechaFactura: '2025-02-28', estado: 'Pagado', tienda: 'Flores Tocancipa' },
    { id: 7, producto: 'Ramo de Rosas', usuario: 'Pedro Ramirez', fechaFactura: '2025-02-25', estado: 'Pendiente', tienda: 'Flores Gachancipa' },
    { id: 8, producto: 'Caja de Chocolates', usuario: 'Lucia Vega', fechaFactura: '2025-02-22', estado: 'Pagado', tienda: 'FloresWEB' },
    { id: 9, producto: 'Orquideas', usuario: 'Roberto Diaz', fechaFactura: '2025-02-20', estado: 'Cancelado', tienda: 'elmundodelcolor' },
    { id: 10, producto: 'Arreglo Floral', usuario: 'Fernanda Salas', fechaFactura: '2025-02-18', estado: 'Pagado', tienda: 'Elvalle' }
  ];

  // Variables para la paginación
  paginaActual = 1;
  itemsPorPagina = 5;
  totalPaginas = Math.ceil(this.facturas.length / this.itemsPorPagina);
  facturasPaginadas = this.facturas.slice(0, this.itemsPorPagina);

  // Función para actualizar la lista paginada
  actualizarPaginacion() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.facturasPaginadas = this.facturas.slice(inicio, fin);
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

  // Funciones para las acciones de las facturas
  verDetalles(id: number) {
    console.log(`Ver detalles de la factura con ID: ${id}`);
    // Aquí podrías redirigir a una página de detalles específicos
  }

  descargarFactura(id: number) {
    console.log(`Descargar factura con ID: ${id}`);
    // Lógica para descargar la factura
  }

  enviarFactura(id: number) {
    console.log(`Enviar factura con ID: ${id}`);
    // Lógica para enviar la factura por correo electrónico
  }
}