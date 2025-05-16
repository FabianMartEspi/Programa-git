import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AgregarProductosComponent {
  productos = [
    { id: 1, nombre: 'Ramo de Rosas', cantidad: 1, precio: 50000 },
    { id: 2, nombre: 'Lirio Blanco', cantidad: 1, precio: 45000 },
    { id: 3, nombre: 'Orquídea Rosa', cantidad: 1, precio: 70000 },
    { id: 3, nombre: 'Tulipan', cantidad: 1, precio: 25000 },
    { id: 3, nombre: 'Clavel', cantidad: 1, precio: 15000 }
  ];

  

  modificarCantidad(productoId: number, nuevaCantidad: number): void {
    // Verificar si el valor es un número válido y mayor a 0
    if (!isNaN(nuevaCantidad) && nuevaCantidad > 0) {
        const producto = this.productos.find(p => p.id === productoId);
        if (producto) {
            producto.cantidad = nuevaCantidad;
        }
    } else {
        console.error('La cantidad ingresada no es válida');
    }
}


  // Revisar la selección de productos (simulando un resumen)
  revisarSeleccion() {
    const resumen = this.productos.map(p => ({
      nombre: p.nombre,
      cantidad: p.cantidad,
      total: p.cantidad * p.precio
    }));
    console.log('Selección actual:', resumen);
    alert('Revisar la consola para ver el resumen de tu selección.');
  }

  // Eliminar un producto
  eliminarProducto(productoId: number) {
    this.productos = this.productos.filter(p => p.id !== productoId);
    console.log('Producto eliminado con ID:', productoId);
  }

  // Continuar con la compra
  continuarCompra() {
    const total = this.productos.reduce((sum, p) => sum + p.cantidad * p.precio, 0);
    console.log('Total a pagar:', total);
    alert(`Total a pagar: $${total.toLocaleString('es-CO')}`);
    // Lógica para redirigir o procesar el pago
  }
}


