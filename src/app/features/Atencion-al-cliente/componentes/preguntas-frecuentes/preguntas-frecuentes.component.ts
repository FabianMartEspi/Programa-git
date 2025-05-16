import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent {
toggleAccordion(arg0: any) {
throw new Error('Method not implemented.');
}

}

export class FaqComponent {
  // Datos de ejemplo para las preguntas frecuentes
  faqs = [
    { id: 1, pregunta: '¿Cómo puedo realizar un pedido?', respuesta: 'Para realizar un pedido, simplemente navega por nuestro catálogo, selecciona los productos que deseas y sigue las instrucciones para completar tu compra.', active: false },
    { id: 2, pregunta: '¿Cuáles son los métodos de pago aceptados?', respuesta: 'Aceptamos tarjetas de crédito, débito y pagos a través de PayPal.', active: false },
    { id: 3, pregunta: '¿Cómo puedo rastrear mi pedido?', respuesta: 'Puedes rastrear tu pedido ingresando a la sección de monitoreo y utilizando el número de seguimiento proporcionado.', active: false },
    { id: 4, pregunta: '¿Cuál es la política de devoluciones?', respuesta: 'Nuestra política de devoluciones permite devoluciones dentro de los 30 días posteriores a la compra, siempre y cuando los productos estén en su estado original.', active: false },
    { id: 5, pregunta: '¿Cómo puedo contactar con el servicio al cliente?', respuesta: 'Puedes contactar con nuestro servicio al cliente a través del formulario de contacto en nuestro sitio web o llamando a nuestro número de atención al cliente.', active: false }
  ];

  // Función para alternar el estado del acordeón
  toggleAccordion(id: number) {
    this.faqs = this.faqs.map(faq => {
      if (faq.id === id) {
        faq.active = !faq.active;
      } else {
        faq.active = false;
      }
      return faq;
    });
  }
}