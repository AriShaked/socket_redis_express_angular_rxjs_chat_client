import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket = io('http://localhost:8080');

  constructor() { }


  joinedByChatMember() {
    const observable = new Observable(observer => {
      this.socket.on('joined', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  sendMessages(data) {
    console.log(data);

    this.socket.emit('message', data);
  }

  newMessageRecived() {
    const observable = new Observable(observer => {
      this.socket.on('message', (data: any) => {
        console.log('line 77' + data);
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

}



