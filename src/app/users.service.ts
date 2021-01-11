import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:8080';

  socket = io('http://localhost:8080');

  constructor(private http: HttpClient) { }

  newUserConnected(data) {
    return this.socket.emit('user connected', data);
  }

  userLeftChat(data) {
    return this.socket.emit('user left', data);
  }



  memberConnected() {

    const observable = new Observable(observer => {
      this.socket.on('user connected', (data) => {
        observer.next(data);
        console.log(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }



  memberLeft() {

    const observable = new Observable(observer => {
      this.socket.on('user left', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }



  joinToUser(data) {

    this.socket.emit('join', data);
  }

}
