import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'; 

@Injectable()
export class ChatService {

  constructor(private socket: Socket) { }

  
  getMessage() {
    return this.socket
        .fromEvent<any>("msg")
        .map(data => {
          console.log(data);
          return data.msg;
        })
  }

  sendMessage(msg: string) {
    console.log("SENDING EVENT");
      this.socket
          .emit("msg", msg);
  }
     
}
