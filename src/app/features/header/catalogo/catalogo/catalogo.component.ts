import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar CommonModule y FormsModule
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  flowers = [
    { id: 1, name: 'Rosas', price: 20000, quantity: 10, imageUrl: 'path-to-image-rosas' },
    { id: 2, name: 'Girasoles', price: 30000, quantity: 15, imageUrl: 'path-to-image-girasoles' },
    { id: 3, name: 'Orquídeas', price: 50000, quantity: 5, imageUrl: 'path-to-image-orquideas' }
  ];

  // Control de visibilidad del formulario
  isFormVisible = false;

  // Producto nuevo
  newProduct = { name: '', price: 0, quantity: 0, imageUrl: '' };

  // Producto seleccionado para editar
  selectedProduct: any = null;

  // Método para alternar visibilidad del formulario
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  // Método para agregar un producto nuevo
  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.quantity > 0) {
      this.flowers.push({ 
        ...this.newProduct, 
        id: this.flowers.length + 1 
      });
      this.newProduct = { name: '', price: 0, quantity: 0, imageUrl: '' };
      this.isFormVisible = false; // Ocultar el formulario después de agregar
      console.log('Producto agregado exitosamente.');
    }
  }

  // Método para manejar carga de imagen al agregar un producto
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newProduct.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para editar un producto existente
  editProduct(flower: any) {
    this.selectedProduct = { ...flower }; // Copia los datos del producto seleccionado
  }

  // Método para guardar los cambios de edición
  updateProduct() {
    const index = this.flowers.findIndex(f => f.id === this.selectedProduct.id);
    if (index !== -1) {
      this.flowers[index] = { ...this.selectedProduct }; // Actualiza el producto en el arreglo
      this.selectedProduct = null; // Limpia la selección
      console.log('Producto actualizado exitosamente.');
    }
  }

  // Método para manejar carga de imagen al editar un producto
  onEditFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.selectedProduct) {
          this.selectedProduct.imageUrl = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para eliminar un producto
  deleteProduct(flower: any) {
    this.flowers = this.flowers.filter(f => f.id !== flower.id); // Filtra el producto eliminado
    console.log(`${flower.name} eliminado del catálogo.`);
  }

  // Método para agregar productos al carrito
  addToCart(flower: any) {
    console.log(`${flower.name} añadido al carrito.`);
  }
}
