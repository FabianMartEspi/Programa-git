import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-en-linea.component.html',
  styleUrls: ['./soporte-en-linea.component.css']
})

export class SoporteComponent {
  // Modelo de datos para el formulario de soporte
  soporte = {
    nombre: '',
    email: '',
    categoria: 'tecnico',
    descripcion: ''
  };

  // Función para registrar el soporte
  registrarSoporte() {
    console.log('Soporte registrado:', this.soporte);
    // Aquí podrías enviar los datos a un servidor o realizar alguna acción adicional
    alert('Soporte registrado con éxito');
    // Limpiar el formulario
    this.soporte = {
      nombre: '',
      email: '',
      categoria: 'tecnico',
      descripcion: ''
    };
  }
}

//import { Component } from '@angular/core';
//@Component({
  //selector: 'app-soporte-en-linea',
  //standalone: true,
  //imports: [],
  //templateUrl: './soporte-en-linea.component.html',
  //styles: ``
//})
//export class SoporteEnLineaComponent {

//}
