import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  messages: { text: string, type: string }[] = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, type: 'user' });
      this.userInput = '';

      // qui las respuestas de nuestro chat-bot
      setTimeout(() => {
        this.messages.push({ text: 'Por favor llámanos, en el momento .', type: 'bot' });
      }, 1000);
    }
  }
}
