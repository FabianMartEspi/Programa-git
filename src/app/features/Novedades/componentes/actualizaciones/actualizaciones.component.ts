import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizaciones.component.html',
  styleUrls: ['./actualizaciones.component.css']
})
export class ActualizacionesComponent {
  esAdmin = true; // Cambiar a false para ocultar las opciones de administrador.

  vendedores = [
    { id: 1, nombre: 'Tienda Virtual XYZ', descripcion: 'Productos de calidad.', enlace: 'https://example.com', productos: ['Producto A', 'Producto B'] },
    { id: 2, nombre: 'Mayoristas ABC', descripcion: 'Distribuidores oficiales.', enlace: 'https://example.com', productos: ['Producto X', 'Producto Y'] }
  ];

  noticias = [
    { id: 1, titulo: 'Lanzamiento de Nuevo Producto', contenido: 'Descubre nuestra nueva línea de productos.' },
    { id: 2, titulo: 'Promoción Especial', contenido: 'Aprovecha descuentos increíbles esta semana.' }
  ];

  // Métodos para vendedores
  editarVendedor(id: number): void {
    const vendedor = this.vendedores.find(v => v.id === id);
    if (vendedor) {
      vendedor.nombre += ' (Editado)';
      console.log('Vendedor editado:', vendedor);
    }
  }

  eliminarVendedor(id: number): void {
    this.vendedores = this.vendedores.filter(v => v.id !== id);
    console.log('Vendedor eliminado con ID:', id);
  }

  // Métodos para noticias
  agregarNoticia(): void {
    const nuevaNoticia = { id: this.noticias.length + 1, titulo: 'Nueva Noticia', contenido: 'Contenido de la noticia.' };
    this.noticias.push(nuevaNoticia);
    console.log('Noticia agregada:', nuevaNoticia);
  }

  editarNoticia(id: number): void {
    const noticia = this.noticias.find(n => n.id === id);
    if (noticia) {
      noticia.titulo += ' (Editada)';
      console.log('Noticia editada:', noticia);
    }
  }

  eliminarNoticia(id: number): void {
    this.noticias = this.noticias.filter(n => n.id !== id);
    console.log('Noticia eliminada con ID:', id);
  }
}
