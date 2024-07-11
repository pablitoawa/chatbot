import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBotComponent } from './pages/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';
}
