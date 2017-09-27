import { ApiCallService } from './api-call.service';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'; 

@Injectable()
export class ChatService {

  constructor(private socket: Socket, private _apiCallService: ApiCallService) { }

  
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

  loginEvent(currentUser) {
    console.log('loginEvent Triggered: Sending currentuser data to server event name: login');
    this.socket.emit('login', currentUser);
  }

  getLoginEvent(id) {
    return this.socket
        .fromEvent<any>("online"+id)
        .map(data => {
          this._apiCallService.saveToOnlineFriends(data)
            .then(data => {
              console.log('executing service: saveToOnlineFriends')
              console.log(data);
            });
          return true;
        });
  }

  logoutEvent(currentUser) {
    console.log('logoutEvent triggered: Sending currentuser data to server event name: logout');
    this.socket.emit('logout', currentUser);
  }

  getLogoutEvent(currentUserid) {
    console.log(currentUserid);
    return this.socket.fromEvent<any>("offline"+currentUserid)
                      .map(data => {
                        console.log("GOT LOGOUT EVENT");
                        let removeUserFriendsData = {currUser: currentUserid, friend: data._id};
                        // this._apiCallService.removeFromOnlineFriends(removeUserFriendsData)
                        //   .then(data => {
                        //     console.log(data);
                        //   });
                        return true;
                      });
  }
}
