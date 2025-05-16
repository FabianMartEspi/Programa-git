import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatBotModule } from "../../../Atencion-al-cliente/componentes/chat-bot/chat-bot.module";

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [RouterModule, ChatBotModule],
  templateUrl: './ingresar.component.html',
  styles: ``
})
export class IngresarComponent {

}
