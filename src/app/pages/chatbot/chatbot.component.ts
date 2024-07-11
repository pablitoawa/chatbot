import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

interface Message {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./chatbot.component.css']
})

export class ChatBotComponent {
  ngOnInit(): void { }
  messages: Message[] = [
    { text: 'Hola Juan, ¿en que te puedo ayudar?', isUser: false },]
  newMessage: string = '';
  isDragging: boolean = false;
  selectedFile: File | null = null;
  current = new Date();
  
  getTime() {
    const time = this.current.getHours() + ":" + this.current.getMinutes() + ":" + this.current.getSeconds();
    return time
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const timestamp = this.getCurrentTimestamp();
      this.messages.push({ 
        text: this.newMessage, 
        isUser: true, 
        timestamp: timestamp 
      });
      this.messages.push({ 
        text: "Respuesta del chatbot sobre plantas de frijol", 
        isUser: false, 
        timestamp: timestamp 
      });
      this.newMessage = '';
    }
  }

  getCurrentTimestamp(): string {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
    this.isDragging = false;
  }
}