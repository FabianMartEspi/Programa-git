/*import { Component } from '@angular/core';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [],
  templateUrl: './promociones.component.html',
  styles: ``
})
export class PromocionesComponent {

}*/


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PromocionesComponent {
  promociones = [
    { id: 1, title: 'Combo Floral de Temporada', description: 'Un hermoso arreglo floral compuesto por flores de temporada cuidadosamente seleccionadas.', price: 40000, imageUrl: 'path/to/seasonal_combo.jpg' },
    { id: 2, title: 'Flores para Celebraciones', description: 'Arreglos florales especiales para cumpleaños, aniversarios y otras celebraciones importantes.', price: 50000, imageUrl: 'path/to/celebration_flowers.jpg' },
    { id: 3, title: 'Suscripción Mensual de Flores', description: 'Recibe un ramo de flores frescas cada mes directamente en tu puerta. Ideal para mantener tu hogar siempre colorido.', price: 120000, imageUrl: 'path/to/monthly_subscription.jpg' },
    { id: 4, title: 'Flores Personalizadas para Eventos', description: 'Arreglos personalizados para bodas, fiestas y eventos corporativos. Diseñados según tus preferencias.', price: 80000, imageUrl: 'path/to/event_flowers.jpg' },
    { id: 5, title: 'Arreglo Romántico', description: 'Un elegante arreglo de rosas y lirios, perfecto para sorprender a tu ser querido.', price: 45000, imageUrl: 'path/to/romantic_arrangement.jpg' },
    { id: 6, title: 'Ramos de Primavera', description: 'Coloridos ramos que capturan la esencia de la primavera con flores como tulipanes, margaritas y narcisos.', price: 35000, imageUrl: 'path/to/spring_bouquet.jpg' },
    { id: 7, title: 'Flores para el Hogar', description: 'Arreglos florales diseñados para complementar la decoración de tu hogar y darle un toque fresco y natural.', price: 30000, imageUrl: 'path/to/home_flowers.jpg' },
    { id: 8, title: 'Flores Exóticas', description: 'Una selección de flores exóticas y raras para quienes buscan algo fuera de lo común.', price: 60000, imageUrl: 'path/to/exotic_flowers.jpg' },
    { id: 9, title: 'Mini Jardín en Maceta', description: 'Un pequeño jardín en una maceta con una combinación de flores y plantas decorativas.', price: 25000, imageUrl: 'path/to/potted_garden.jpg' },
    { id: 10, title: 'Regalos Florales Corporativos', description: 'Elegantes arreglos florales para regalar a clientes y empleados en ocasiones especiales.', price: 70000, imageUrl: 'path/to/corporate_gifts.jpg' }
  ];

  addToCart(promo: any) {
    console.log('Producto promocionado agregado al carrito:', promo);
  }

  editPromotion(promo: any) {
    console.log('Editando promoción:', promo);
    // Lógica para editar la promoción (por ejemplo, abrir un formulario de edición)
  }

  deletePromotion(promoId: number) {
    console.log('Promoción eliminada con ID:', promoId);
    // Lógica para eliminar la promoción (por ejemplo, eliminar del arreglo promociones)
    this.promociones = this.promociones.filter(promo => promo.id !== promoId);
  }
}


