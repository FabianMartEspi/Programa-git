import { Routes } from '@angular/router';
import { ChatBotComponent } from './componentes/chat-bot/chat-bot.component';
import { PqrComponent } from './componentes/pqrs/pqrs.component';
import { PreguntasFrecuentesComponent } from './componentes/preguntas-frecuentes/preguntas-frecuentes.component';
import { SoporteComponent } from './componentes/soporte-en-linea/soporte-en-linea.component';


export const ATENCIONCLIENTE_CHATBOT: Routes = [
  {
    path: '', 
    component: ChatBotComponent
  }
];

export const ATENCIONCLIENTE_PQRS: Routes = [
  {
    path: '', 
    component: PqrComponent
  }
];

export const ATENCIONCLIENTE_PREGUNTASF: Routes = [
  {
    path: '', 
    component: PreguntasFrecuentesComponent
  }
];
export const ATENCIONCLIENTE_SOPORTEENL: Routes = [
  {
    path: '', 
    component: SoporteComponent
  }
];
