import { Injectable } from '@angular/core';
/* Injectable permite que a classe seja disponibilizada e injetada em outra classe */
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
