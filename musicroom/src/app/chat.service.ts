import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'; 

@Injectable()
export class ChatService {

  constructor(private socket: Socket) { }

  
  getMessage(id) {
    return this.socket
        .fromEvent<any>("msg"+id)
        .map(data => {
          console.log("GOT EVENT");
          return true;
        })
  }

  sendMessage(id) {
    console.log("SENDING EVENT");
      this.socket
          .emit("msg", id);
  }
     
}
