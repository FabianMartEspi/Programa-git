import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatBotComponent } from './chat-bot.component';

@NgModule({
  declarations: [ChatBotComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChatBotComponent]
})
export class ChatBotModule { }
