import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DescuentosComponent {
  descuentos = [
    { id: 1, title: 'Descuento de Bienvenida', description: 'Obtén un 10% de descuento en tu primera compra de flores.', codigo: 'BIENVENIDO10' },
    { id: 2, title: 'Descuento por Referencia', description: 'Recomienda nuestra tienda a tus amigos y recibe un 15% de descuento en tu próxima compra cuando ellos hagan su primera compra.', codigo: 'REFERENCIA15' },
    { id: 3, title: 'Descuento de Temporada', description: 'Disfruta de un 20% de descuento en arreglos florales de temporada.', codigo: 'TEMPORADA20' },
    { id: 4, title: 'Descuento por Suscripción', description: 'Suscríbete a nuestro boletín y recibe un 10% de descuento en tu próxima compra.', codigo: 'SUSCRIPCION10' },
    { id: 5, title: 'Descuento por Compras en Línea', description: 'Compra en nuestra tienda en línea y obtén un 5% de descuento en todos los productos.', codigo: 'ONLINE5' },
    { id: 6, title: 'Descuento para Eventos', description: 'Reserva tus flores para eventos y obtén un 15% de descuento en pedidos mayores a $100,000 COP.', codigo: 'EVENTO15' },
    { id: 7, title: 'Descuento para Clientes Frecuentes', description: 'Obtén un 10% de descuento en tu tercera compra y en todas las compras posteriores.', codigo: 'FRECUENTE10' },
    { id: 8, title: 'Descuento por Paquete de Flores', description: 'Compra 3 ramos y obtén un 20% de descuento en el total.', codigo: 'PAQUETE20' },
    { id: 9, title: 'Descuento por Celebraciones', description: 'Celebra tu cumpleaños con un 25% de descuento en cualquier ramo de tu elección.', codigo: 'CUMPLE25' },
    { id: 10, title: 'Descuento por Venta Flash', description: 'Ofertas de tiempo limitado con un 30% de descuento en selecciones especiales de flores. Solo por 24 horas.', codigo: 'FLASH30' }
  ];

  addToCart(descuento: any) {
    console.log('Descuento aplicado:', descuento);
  }

  editDiscount(descuento: any) {
    console.log('Editando descuento:', descuento);
    // Lógica para editar el descuento (por ejemplo, abrir un formulario de edición)
  }

  deleteDiscount(descuentoId: number) {
    console.log('Descuento eliminado con ID:', descuentoId);
    // Lógica para eliminar el descuento (por ejemplo, eliminar del arreglo descuentos)
    this.descuentos = this.descuentos.filter(descuento => descuento.id !== descuentoId);
  }
}
