import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // TODO: why constructor was deleted

  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }
}
