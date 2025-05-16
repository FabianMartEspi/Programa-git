import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Pedido {
  codigo: string;
  imagen: string;
  modelo: string;
  producto: string;
  fabricante: string;
  categoria: string;
  estado: string;
  precio: string;
  fechaPedido: string;
  editando?: boolean; // Campo opcional para identificar si está en modo edición
}

@Component({
  selector: 'app-informacion-de-pedidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './informacion-de-pedidos.component.html',
  styleUrls: ['./informacion-de-pedidos.component.css'],
})



export class InformacionDePedidosComponent {
  pedidos: Pedido[] = [];
  mostrarFormulario: boolean = false;

  // Pedido temporal para agregar nuevos pedidos desde el formulario
  nuevoPedido: Pedido = {
    codigo: '',
    imagen: 'assets/default-image.jpg', // Imagen por defecto
    modelo: '',
    producto: '',
    fabricante: '',
    categoria: '',
    estado: '',
    precio: '',
    fechaPedido: ''
  };

  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // Devuelve los pedidos visibles en la página actual
  get visiblePedidos(): Pedido[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.pedidos.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Muestra u oculta el formulario de nuevo pedido
  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Restablece los valores del formulario y lo oculta
  cancelarFormulario(): void {
    this.mostrarFormulario = false;
    this.limpiarFormulario();
  }

  // Limpia los valores del formulario de nuevo pedido
  limpiarFormulario(): void {
    this.nuevoPedido = {
      codigo: '',
      imagen: 'assets/default-image.jpg',
      modelo: '',
      producto: '',
      fabricante: '',
      categoria: '',
      estado: '',
      precio: '',
      fechaPedido: ''
    };
  }

  // Agrega un nuevo pedido a la lista
  agregarPedido(): void {
    this.nuevoPedido.fechaPedido = new Date().toLocaleDateString(); // Fecha actual
    this.pedidos.push({ ...this.nuevoPedido }); // Clona el pedido para evitar referencias
    this.cancelarFormulario(); // Oculta el formulario y lo limpia
  }

  // Filtra los pedidos en base al texto de búsqueda
  buscar(query: string): void {
    query = query.toLowerCase();
    this.pedidos = this.pedidos.filter(pedido =>
      pedido.producto.toLowerCase().includes(query) ||
      pedido.fabricante.toLowerCase().includes(query)
    );
  }

  // Activa el modo de edición para un pedido específico
  editarPedido(index: number): void {
    this.pedidos[index].editando = true; // Activa el modo edición
  }

  // Guarda los cambios realizados en un pedido
  guardarEdicion(index: number): void {
    this.pedidos[index].editando = false; // Desactiva el modo edición
  }

  // Cancela los cambios realizados y vuelve al estado original
  cancelarEdicion(index: number): void {
    this.pedidos[index].editando = false; // Restaura el pedido sin aplicar los cambios
  }

  // Elimina un pedido de la lista tras confirmación
  eliminarPedido(index: number): void {
    if (confirm('¿Está seguro que desea eliminar este pedido?')) {
      this.pedidos.splice(index, 1);
    }
  }

  // Simula el envío de una notificación para un pedido
  enviarNotificacion(pedido: Pedido): void {
    alert(`Notificación enviada para el pedido: ${pedido.producto}`);
    // Aquí podrías integrar un servicio real para el envío de notificaciones
  }

  // Cambia a la página anterior en la paginación
  paginaAnterior(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Cambia a la página siguiente en la paginación
  siguientePagina(): void {
    if (this.currentPage * this.itemsPerPage < this.pedidos.length) {
      this.currentPage++;
    }
  }
}


