import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  // Datos de prueba: Categorías con subcategorías
  categorias = [
    { id: 1, nombre: 'Rosas', subcategorias: ['Rosa Roja', 'Rosa Blanca'], abierta: false },
    { id: 2, nombre: 'Tulipanes', subcategorias: ['Tulipán Amarillo', 'Tulipán Rojo'], abierta: false },
    { id: 3, nombre: 'Lirios', subcategorias: ['Lirio Blanco', 'Lirio Azul'], abierta: false },
  ];

  // Datos de prueba: Productos
  productos = [
    { id: 1, nombre: 'Rosa Roja', precio: 20000, imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Tulipán Amarillo', precio: 15000, imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Lirio Blanco', precio: 18000, imagen: 'https://via.placeholder.com/150' },
  ];

  // Método para desplegar y colapsar las subcategorías
  toggleCategoria(id: number): void {
    this.categorias = this.categorias.map(categoria => ({
      ...categoria,
      abierta: categoria.id === id ? !categoria.abierta : false // Cierra todas excepto la seleccionada
    }));
    console.log(`Categoría con ID: ${id} ahora está ${this.categorias.find(cat => cat.id === id)?.abierta ? 'abierta' : 'cerrada'}`);
  }

  // Métodos para Categorías
  agregarCategoria(): void {
    const nuevaCategoria = {
      id: this.categorias.length + 1,
      nombre: `Nueva Categoría ${this.categorias.length + 1}`,
      subcategorias: [],
      abierta: false
    };
    this.categorias.push(nuevaCategoria);
    console.log('Categoría agregada:', nuevaCategoria);
  }

  editarCategoria(id: number): void {
    const categoria = this.categorias.find(cat => cat.id === id);
    if (categoria) {
      categoria.nombre = `${categoria.nombre} (Editada)`; // Ejemplo: modificar el nombre
      console.log('Categoría editada:', categoria);
    }
  }

  eliminarCategoria(id: number): void {
    this.categorias = this.categorias.filter(cat => cat.id !== id);
    console.log(`Categoría con ID: ${id} eliminada`);
  }

  agregarContenidoCategoria(id: number): void {
    const categoria = this.categorias.find(cat => cat.id === id);
    if (categoria) {
      console.log(`Agregar contenido a la categoría: ${categoria.nombre}`);
    }
  }

  // Métodos para Productos
  agregarProducto(): void {
    const nuevoProducto = {
      id: this.productos.length + 1,
      nombre: `Nuevo Producto ${this.productos.length + 1}`,
      precio: 10000,
      imagen: 'https://via.placeholder.com/150'
    };
    this.productos.push(nuevoProducto);
    console.log('Producto agregado:', nuevoProducto);
  }

  editarProducto(id: number): void {
    const producto = this.productos.find(prod => prod.id === id);
    if (producto) {
      producto.nombre = `${producto.nombre} (Editado)`; // Ejemplo: modificar el nombre
      console.log('Producto editado:', producto);
    }
  }

  cambiarImagenProducto(id: number): void {
    const producto = this.productos.find(prod => prod.id === id);
    if (producto) {
      producto.imagen = 'https://via.placeholder.com/150?text=Nueva+Imagen';
      console.log('Imagen del producto actualizada:', producto);
    }
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(prod => prod.id !== id);
    console.log(`Producto con ID: ${id} eliminado`);
  }

agregarAlCarrito(id: number): void {
  const producto = this.productos.find(prod => prod.id === id);
  if (producto) {
    console.log(`Producto agregado al carrito:`, producto);
    // Aquí podrías agregar la lógica para añadir el producto a un carrito global
  }
}
}