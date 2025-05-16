import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Array<{ id: number; nombre: string; imagen: string; precio: number; vigencia: string; descripcion: string }> = [
    { id: 1, nombre: 'Ramo de Rosas Rojas', imagen: '', precio: 30.0, vigencia: '2025-02-14', descripcion: 'Perfecto para San Valentín' },
    { id: 2, nombre: 'Caja de Chocolates', imagen: '', precio: 20.0, vigencia: '2025-05-10', descripcion: 'Ideal para el Día de la Madre' }
  ];

  editandoId: number | null = null;
  mostrarFormulario: boolean = false;
  nuevoProducto: any = { nombre: '', precio: 0, vigencia: '', descripcion: '', imagen: '' };

  agregarNuevoProducto() {
    console.log('Datos del nuevo producto:', this.nuevoProducto);

    if (!this.nuevoProducto.nombre.trim()) {
      alert('El campo "Nombre" es obligatorio.');
      return;
    }
    if (!this.nuevoProducto.precio || this.nuevoProducto.precio <= 0) {
      alert('El campo "Precio" debe ser mayor a 0.');
      return;
    }
    if (!this.nuevoProducto.vigencia.trim()) {
      alert('El campo "Fecha de Vigencia" es obligatorio.');
      return;
    }
    if (!this.nuevoProducto.descripcion.trim()) {
      alert('El campo "Descripción" es obligatorio.');
      return;
    }

    const nuevoProductoConId = { ...this.nuevoProducto, id: this.productos.length + 1 };
    this.productos.push(nuevoProductoConId);
    this.nuevoProducto = { nombre: '', precio: 0, vigencia: '', descripcion: '', imagen: '' };
    this.mostrarFormulario = false;

    console.log('Producto agregado exitosamente:', nuevoProductoConId);
  }

  editarProducto(id: number) {
    this.editandoId = id;
  }

  guardarEdicion() {
    if (this.editandoId !== null) {
      alert('Cambios guardados exitosamente');
      this.editandoId = null;
    }
  }

  cargarImagen(event: Event, producto: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;
          const maxWidth = 100;
          const maxHeight = 100;

          let width = img.width;
          let height = img.height;
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;
            if (width > height) {
              width = maxWidth;
              height = maxWidth / aspectRatio;
            } else {
              height = maxHeight;
              width = maxHeight * aspectRatio;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          producto.imagen = canvas.toDataURL('image/jpeg');
        };
      };

      reader.readAsDataURL(file);
    }
  }

  cargarImagenEdicion(event: Event, producto: any) {
    this.cargarImagen(event, producto);
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
}
