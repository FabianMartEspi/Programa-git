import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Tipos de clave válidos para las secciones
type SeccionesKeys = 'quienesSomos' | 'mision' | 'vision' | 'servicios' | 'calidadSostenibilidad';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  secciones: Record<SeccionesKeys, { titulo: string; contenido: string | string[] }> = {
    quienesSomos: {
      titulo: 'Quiénes Somos',
      contenido: 'Somos una innovadora aplicación web dedicada a ofrecer una experiencia única en la compra de flores. Especializados en variedades como rosas y otras flores exóticas, todas producidas en Colombia.'
    },
    mision: {
      titulo: 'Misión',
      contenido: 'Nuestra misión es embellecer cada momento especial de la vida de nuestros clientes, proporcionando acceso fácil y conveniente a una amplia gama de flores frescas y de alta calidad.'
    },
    vision: {
      titulo: 'Visión',
      contenido: 'Nuestra visión es ser la plataforma líder en la venta de flores al por mayor y al detal, no solo en Colombia, sino en toda América Latina.'
    },
    servicios: {
      titulo: 'Nuestros Servicios',
      contenido: [
        'Variedad de Productos: Ofrecemos una amplia selección de flores, desde las clásicas rosas hasta las más exóticas variedades.',
        'Ofertas y Promociones: Mantén tus eventos y celebraciones llenos de vida con nuestras promociones exclusivas.',
        'Registros de Datos: Utilizamos registros de datos para mantener a nuestros clientes informados.',
        'Catálogos: Presentamos catálogos detallados para explorar nuestras colecciones.',
        'Métodos de Pago: Aceptamos múltiples métodos de pago.',
        'Venta al Por Mayor y al Detal: Suministramos flores para floristerías y clientes individuales.',
        'Plataforma para Cultivadores: Permitiremos a los cultivadores ofertar sus productos directamente.'
      ]
    },
    calidadSostenibilidad: {
      titulo: 'Compromiso con la Calidad y la Sostenibilidad',
      contenido: 'Estamos comprometidos con la calidad y la sostenibilidad en cada paso del proceso, garantizando productos frescos y fomentando prácticas agrícolas responsables.'
    }
  };

  // Método para verificar si el contenido es un array
  esArray(contenido: string | string[]): contenido is string[] {
    return Array.isArray(contenido);
  }

  editarSeccion(seccion: SeccionesKeys): void {
    const nuevoTitulo = prompt('Editar título:', this.secciones[seccion].titulo);
    if (nuevoTitulo !== null) {
      this.secciones[seccion].titulo = nuevoTitulo;
    }

    const nuevoContenido = Array.isArray(this.secciones[seccion].contenido)
      ? prompt('Editar contenido (separado por comas):', this.secciones[seccion].contenido.join(','))
      : prompt('Editar contenido:', this.secciones[seccion].contenido);

    if (nuevoContenido !== null) {
      this.secciones[seccion].contenido = Array.isArray(this.secciones[seccion].contenido)
        ? nuevoContenido.split(',')
        : nuevoContenido;
    }
  }

  eliminarSeccion(seccion: SeccionesKeys): void {
    if (confirm(`¿Estás seguro de que deseas eliminar la sección "${this.secciones[seccion].titulo}"?`)) {
      delete this.secciones[seccion];
    }
  }

  agregarNuevoTema(): void {
    const nuevoTitulo = prompt('Título del nuevo tema:');
    const nuevoContenido = prompt('Contenido del nuevo tema:');

    if (nuevoTitulo && nuevoContenido) {
      const nuevoId = nuevoTitulo.toLowerCase().replace(/ /g, '-') as SeccionesKeys;
      this.secciones[nuevoId] = {
        titulo: nuevoTitulo,
        contenido: nuevoContenido
      };
    }
  }
}
