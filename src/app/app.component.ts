
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule  } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { ChatBotModule } from "./features/Atencion-al-cliente/componentes/chat-bot/chat-bot.module";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RouterModule,
    ChatBotModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FloresColombia';
}

