import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class PerfilComponent {
  // Otros métodos existentes...
  modificarPerfil(): void {
    console.log('Modificar Perfil clicked');
  }

  modificarContactos(): void {
    console.log('Modificar Contactos clicked');
  }

  eliminarCuenta(): void {
    console.log('Eliminar Cuenta clicked');
    // Lógica para eliminar la cuenta
  }

  cerrarSesion(): void {
    console.log('Cerrar Sesión clicked');
    // Lógica para cerrar sesión
  }

  verHistorial(): void {
    console.log('Ver Historial clicked');
    // Lógica para mostrar el historial completo
  }

  gestionarNotificaciones(): void {
    console.log('Configurar Notificaciones clicked');
    // Lógica para gestionar las notificaciones del usuario
  }
}