import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pqr {
  id: number;
  radicado: string;
  tipo: string;
  solicitud: string;
  usuarioNombre: string;
  usuarioRol: string;
  usuarioFoto: string;
  fechaRespuesta: string;
  satisfaccion: string;
  mostrarAcciones: boolean;
  mostrarRespuesta: boolean; // Para el área de respuesta dinámica
  respuesta: string; // Respuesta del administrador
}

@Component({
  selector: 'app-notificaciones-pqrs',
  standalone: true,
  templateUrl: './notificaciones-pqrs.component.html',
  styleUrls: ['./notificaciones-pqrs.component.css'],
  imports: [CommonModule, FormsModule],
})
export class NotificacionespqrsComponent {
  // Simula el rol de usuario (administrador o no)
  esAdministrador = true; // Cambia a false para probar como un usuario normal

  // Lista de PQRS
  listaPqrs: Pqr[] = [
    {
      id: 1,
      radicado: '31/10/2018',
      tipo: 'Queja',
      solicitud: 'Servicio de transporte',
      usuarioNombre: 'Vendedor Nombres 2 Apellidos 2',
      usuarioRol: 'Vendedor',
      usuarioFoto: 'ruta/a/imagen.jpg',
      fechaRespuesta: '31/10/2018',
      satisfaccion: '',
      mostrarAcciones: false,
      mostrarRespuesta: false,
      respuesta: ''
    },
    {
      id: 2,
      radicado: '31/10/2018',
      tipo: 'Petición',
      solicitud: 'Servicio de cafetería',
      usuarioNombre: 'Comprador Nombres 2 Apellidos 2',
      usuarioRol: 'Comprador',
      usuarioFoto: 'ruta/a/otra-imagen.jpg',
      fechaRespuesta: '31/10/2018',
      satisfaccion: 'Superior',
      mostrarAcciones: false,
      mostrarRespuesta: false,
      respuesta: ''
    },
  ];

  // Métodos para los filtros
  filtrarPorRadicado(event: Event): void {
    const radicado = (event.target as HTMLInputElement).value;
    console.log('Filtrar por radicado:', radicado);
    // Agrega lógica aquí para filtrar según radicado
  }

  filtrarPorTipo(event: Event): void {
    const tipo = (event.target as HTMLSelectElement).value;
    console.log('Filtrar por tipo:', tipo);
    // Agrega lógica aquí para filtrar según tipo
  }

  filtrarPorUsuario(event: Event): void {
    const usuario = (event.target as HTMLSelectElement).value;
    console.log('Filtrar por usuario:', usuario);
    // Agrega lógica aquí para filtrar según el tipo de usuario
  }

  // Métodos relacionados con las acciones
  crearPqrs(): void {
    alert('Función para buscar o filtrar una  PQRS aún no implementada.');
  }

  toggleAcciones(pqr: Pqr): void {
    pqr.mostrarAcciones = !pqr.mostrarAcciones;
  }

  responder(pqr: Pqr): void {
    pqr.mostrarRespuesta = !pqr.mostrarRespuesta;
  }

  eliminar(pqr: Pqr): void {
    const confirmar = confirm(`¿Estás seguro de eliminar la PQRS con ID: ${pqr.id}?`);
    if (confirmar) {
      this.listaPqrs = this.listaPqrs.filter(item => item.id !== pqr.id);
      alert(`PQRS con ID ${pqr.id} eliminada.`);
    }
  }

  guardarEdicion(pqr: Pqr): void {
    alert(`Se han guardado los cambios para la PQRS con ID: ${pqr.id}.`);
    console.log('Guardar Edición:', pqr);
  }

  enviarRespuesta(pqr: Pqr): void {
    alert(`Respuesta enviada para la PQRS con ID: ${pqr.id}: ${pqr.respuesta}`);
    pqr.mostrarRespuesta = false; // Oculta el área de respuesta
  }
}
