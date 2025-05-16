import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pqr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})

export class PqrComponent {
  // Modelo de datos para el formulario de PQR
  pqr = {
    nombre: '',
    email: '',
    tipo: 'peticion',
    descripcion: ''
  };

  // Función para registrar el PQR
  registrarPqr() {
    console.log('PQR registrado:', this.pqr);
    // Aquí podrías enviar los datos a un servidor o realizar alguna acción adicional
    alert('PQR registrado con éxito');
    // Limpiar el formulario
    this.pqr = {
      nombre: '',
      email: '',
      tipo: 'peticion',
      descripcion: ''
    };
  }
}