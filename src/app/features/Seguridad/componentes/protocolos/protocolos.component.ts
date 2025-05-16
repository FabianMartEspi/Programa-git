import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-protocolos-garantias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './protocolos.component.html',
  styleUrls: ['./protocolos.component.css']
})

export class ProtocolosComponent {
  // Datos de ejemplo para los protocolos de cuidado de las flores y reclamación de garantías
  protocolosCuidado = `
    Para mantener sus flores frescas y hermosas por más tiempo, siga estos sencillos pasos:
    1. Corte los tallos en ángulo bajo el agua.
    2. Cambie el agua del florero cada dos días.
    3. Mantenga las flores alejadas de la luz solar directa y de fuentes de calor.
    4. Retire las hojas que estén sumergidas en el agua para evitar la proliferación de bacterias.
    5. Utilice el alimento para flores que viene con su arreglo.
  `;

  reclamacionGarantias = `
    Si no está satisfecho con la calidad de sus flores, puede reclamar la garantía siguiendo estos pasos:
    1. Contacte a nuestro servicio al cliente dentro de las 24 horas posteriores a la entrega.
    2. Proporcione una descripción detallada del problema y, si es posible, adjunte fotos.
    3. Nuestro equipo evaluará su reclamación y le ofrecerá una solución, que puede incluir el reemplazo de las flores o un reembolso.
    4. Las reclamaciones de garantía solo se aceptan si las flores han sido cuidadas siguiendo nuestros protocolos de cuidado.
  `;
}