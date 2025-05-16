import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  flowers = [
    { id: 1, name: 'Rosas', price: 20000, imageUrl: 'path-to-image-rosas' },
    { id: 2, name: 'Girasoles', price: 30000, imageUrl: 'path-to-image-girasoles' },
    { id: 3, name: 'Orquídeas', price: 50000, imageUrl: 'path-to-image-orquideas' },
    { id: 4, name: 'Rosas', price: 20000, imageUrl: 'path-to-image-rosas' },
    { id: 5, name: 'Girasoles', price: 30000, imageUrl: 'path-to-image-girasoles' },
    { id: 6, name: 'Orquídeas', price: 50000, imageUrl: 'path-to-image-orquideas' },
    { id: 7, name: 'Rosas', price: 20000, imageUrl: 'path-to-image-rosas' },
    { id: 8, name: 'Girasoles', price: 30000, imageUrl: 'path-to-image-girasoles' },
    { id: 9, name: 'Orquídeas', price: 50000, imageUrl: 'path-to-image-orquideas' },
    { id: 10, name: 'Rosas', price: 20000, imageUrl: 'path-to-image-rosas' },
    { id: 11, name: 'Girasoles', price: 30000, imageUrl: 'path-to-image-girasoles' },
    { id: 12, name: 'Orquídeas', price: 50000, imageUrl: 'path-to-image-orquideas' }
  ];

  addToCart(flower: any) {
    console.log(`${flower.name} añadido al carrito.`);
  }
}

