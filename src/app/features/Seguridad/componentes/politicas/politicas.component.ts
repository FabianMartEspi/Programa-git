import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-politicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})

export class PoliticasComponent {
  // Datos de ejemplo para las políticas
  politicaPrivacidad = `
    Esta es nuestra política de privacidad. Aquí explicamos cómo manejamos y protegemos la información personal de nuestros usuarios.
    Nos comprometemos a mantener la privacidad y seguridad de sus datos personales es importante la protección de tus datos por ello, explicaremos como trataremos la recoleccion de tu información y tratamiento:
    
    <strong>Consentimiento</strong>
    Cuando nos provees tu información personal para completar una transacción, verificar tu tarjeta de crédito, crear una orden,  concertar un envío o hacer una devolución, implicamos que aceptas la recolección y uso por esa razón específica solamente. Si te pedimos tu información personal por una razón secundaria, como marketing, te pediremos directamente tu expreso consentimiento, o te daremos la oportunidad de negarte.
    Si luego de haber aceptado cambias de opinión, puedes anular tu consentimiento para que te contactemos, por la recolección, uso o divulgación de tu información, en cualquier momento, contactándonos a info@floritopia.com.co 
    
    <strong>Información</strong>
    Cuando compras algo de nuestra tienda, como parte del proceso de compra venta, nosotros recolectamos la información personal que nos das tales como nombre, dirección y correo electrónico.
    Cuando navegas en nuestra tienda, también recibimos de manera automática la dirección de protocolo de internet de tu computadora (IP) con el fin de proporcionarnos información que nos ayuda a conocer acerca de su navegador y sistema operativo.
    Email marketing: Con tu permiso, podremos enviarte correos electrónicos acerca de nuestra tienda, nuevos productos y otras actualizaciones

    <strong>Divulgación</strong>
    Podemos divulgar tu información personal si se nos requiere por ley o si violas nuestros Términos de Servicio.

    <strong>Shopify</strong>
    Nuestra tienda se encuentra alojada en Shopify Inc. Ellos nos proporcionan la plataforma de comercio electrónico en línea que nos permite venderte nuestros productos y servicios.
    Tus datos se almacenan a través del almacenamiento de datos de Shopify, bases de datos y la aplicación general de Shopify. Tus datos se almacenan en un servidor seguro detrás de un firewall.

    <strong>Enlaces</strong>
    Cuando haces clic en enlaces de nuestra tienda, puede que seas re dirigido fuera de nuestro sitio.  No somos responsables por las prácticas de privacidad de otros sitios y te recomendamos leer sus normas de privacidad.

    <strong>Seguridad</strong>
    Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no haya pérdida de manera inapropiada, mal uso, acceso, divulgación, alteración o destrucción de la misma.

    <strong>Payment</strong>
    Si eliges una pasarela de pago directo para completar tu compra, entonces Shopify almacena datos de tu tarjeta de crédito. Está cifrada a través de la Seguridad Standard de Datos de la Industria de Tarjetas de Pago (PCI-DSS). Tus datos de transacción de compra se almacenan sólo en la medida en que sea necesario para completar la transacción de compra. Después de que se haya completado, se borra la información de su transacción de compra.
    Todas las pasarelas de pago directo se adhieren a los estándares establecidos por PCI-DSS como lo indicado por el Consejo de Normas de Seguridad de PCI, que es un esfuerzo conjunto de marcas como Visa, MasterCard, American Express y Discover. Los requisitos del PCI-DSS ayudan a garantizar el manejo seguro de la información de tarjetas de crédito de las tiendas y sus proveedores de servicios.

    <strong>COOKIES</strong>
    Aquí tienes una lista de cookies que utilizamos. Las en listamos para que puedas elegir si quieres optar por quitarlas o no.

    <strong>Cambios a esta política de privacidad</strong>
    Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, así que por favor revísala frecuentemente.  Cambios y aclaraciones entrarán en vigencia inmediatamente después de su publicación en el sitio web.  

    <strong>Información de contacto</strong>
    Si quieres: acceder, corregir, enmendar o borrar cualquier información personal que poseamos sobre ti, registrar una queja, o simplemente quieres más información contactanos.

  `;

  politicaEnvio = `
    Esta es nuestra política de envío. Aquí detallamos los tiempos de entrega, costos y métodos de envío disponibles.
    Nos esforzamos por garantizar que sus pedidos lleguen a tiempo y en perfectas condiciones.
    El límite de pedido de entrega el mismo día es a las 2 pm  (Excepciones: el Día de San Valentín y el Día de la Madre requieren ordenar con más anticipación).
    Entrega disponible de lunes a sábado  (Excepciones: Día de San Valentín, dia de la mujer, Amor y Amistad y Día de la Madre cuando caen en domingo)
    Las entregas llegarán entre las 10 am y las 7 pm . Debido a los altos volúmenes con los que estamos manejando, <strong> no podemos garantizar tiempos más específicos.</strong> 
    Haga todo lo posible para confirmar que el destinatario de las flores estará en el lugar de entrega o que hay un lugar seguro (espacio seguro, protegido del clima ) para dejar las flores. 
    Como no podemos dejar flores fuera de los apartamentos, se puede  llamar a esos destinatarios antes de la entrega  para coordinar.
    Desafortunadamente, no hay devoluciones para los clientes cuando  los destinatarios se niegan a recibir una entrega.
  `;

  politicaReembolso = `
    Esta es nuestra política de reembolso. Aquí explicamos las condiciones bajo las cuales se pueden realizar devoluciones y reembolsos.
    Queremos asegurarnos de que esté completamente satisfecho con su compra.
    Nuestras Política de reembolso se realizara únicamente para los productos que se encuentren defectuosos o dañados en el momento exacto de la entrega. En Flores Colombia velamos por tu satisfacción, recuerda que las flores son artículos delicados que necesitan de hidratación o cuidados inmediatos tal y cómo se especifica en nuestras tarjeta de instrucciones.

    Flores Colombia no se responsabiliza de los daños causados a los productos después de recibir el pedido. No aceptamos devoluciones por el deterioró normal de las flores, del uso indebido del producto o los daños ocasionados por un tercero.

    Para proceder con un cambio por garantía de satisfacción al momento de la entrega, el cliente o receptor deberá realizar su reclamación comunicándose con nosotros de forma inmediata máximo 60 minutos después de la entrega del producto a través de nuestra línea de WhatsApp +57 3058151111 o al correo electrónico: info@florescolombia.com.co indicando los detalles de las condiciones del artículo al momento exacto de la entrega y adjuntando las fotos de evidencia que serán verificadas.

    Una vez analizado el caso de solicitud de la garantía, Flores Colombia, revisará el caso y generará una respuesta al cliente, si procede o no la reclamación. De proceder, el cliente deberá regresar el artículo en su embalaje original, tomando las medidas necesarias para que llegue en las mismas condiciones en las que ha sido recibido. En caso de que no proceda la reclamación, se explicara al cliente los razones por las cuales no se hace efectivo el requerimiento.  Una vez que se reciba e inspeccione su devolución, le enviaremos un correo electrónico para notificarle que hemos recibido su artículo devuelto. También le notificaremos la aprobación o rechazo de su reembolso.
    Si se aprueba, se procesará su reembolso y se aplicará automáticamente un crédito a su tarjeta de crédito o método de pago original, tenga en cuenta que el reintegro del dinero se realizara dentro de los plazos que se toma según su entidad bancaria.

    Reembolsos atrasados ​​​​o faltantes (si corresponde)
    Si aún no ha recibido un reembolso, primero verifique su cuenta bancaria nuevamente.
    Luego, comuníquese con la compañía de su tarjeta de crédito o cuenta bancaria, puede tomar algún tiempo antes de que se publique oficialmente su reembolso.
    A continuación, póngase en contacto con su banco. A menudo hay algún tiempo de procesamiento antes de que se publique un reembolso.
  `;
}