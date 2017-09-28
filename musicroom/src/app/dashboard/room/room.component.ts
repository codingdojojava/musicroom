import { DashboardComponent } from './../dashboard.component';
import { ChatService } from './../../chat.service';
import { ApiCallService } from './../../api-call.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room;
  message = "";
  userInRoom = false;
  roomPW="";
  isOwner = false;
  constructor(private _route: ActivatedRoute, private apiService: ApiCallService, private chatService: ChatService, private _dashboardComp: DashboardComponent, private router: Router) {
   }

  ngOnInit() {
    // console.log("FFFFF");
    this._route.paramMap.subscribe(params=>{
      var self = this;
      this.apiService.getRoomById(params.get('id')).then(data=>{
        console.log("GOT ROOM");
        console.log(data);
        this.room = data;
        console.log(this.room);
        this.checkUserInRoom();
        this.chatService
        .getMessage(this.room.roomId)
        .subscribe(data => {
          console.log("GOT IT");
          self.refreshRoom();
        });
      })
    })
  }

  refreshRoom(){
    this.apiService.getRoomById(this.room.roomId).then(data=>{
      this.room = data;
      this.checkUserInRoom();
    })
  }

  sendMessage(){
    console.log('SENDING');
    var self = this;
    this.apiService.sendMessage(this.room.roomId, this.message).then(function(data){
      console.log('SENT');
      if(data == false)
        console.log("FALSE");
      else
        self.chatService.sendMessage(self.room.roomId);
      self.message = "";
    });
  }

  checkUserInRoom(){
    this.apiService.getCurrentUserInSession().then(result=>{
      console.log("RESULT");
      console.log(result);
      console.log(this.room._roomMembers);
      console.log(this.room._owner);
      this.userInRoom = false;
      for(var i = 0; i < this.room._roomMembers.length; i++){
        if(this.room._roomMembers[i]._id == result._id)
          this.userInRoom = true;
      }
      if(this.room._owner._id == result._id){
        this.userInRoom = true;
        this.isOwner = true;
      }
      console.log(this.userInRoom);
    })
  }

  joinRoom(){
    var self = this;
    this.apiService.joinRoom(this.room.roomId, this.roomPW).then(function(result){
      self.message = "joined the room.";
      self.sendMessage();
      self.refreshRoom();
      self._dashboardComp.getCurrentUserInSession();
    });
  }

  leaveRoom(){
    var self = this;
    this.apiService.leaveRoom(this.room.roomId).then(function(result){
      self.message = "left the room.";
      self.sendMessage();
      self.refreshRoom();
      self._dashboardComp.getCurrentUserInSession();
    });
  }

  deleteRoom(){
    var self = this;
    this.apiService.deleteRoom(this.room.roomId).then(function(result){
      self._dashboardComp.getCurrentUserInSession();
      self.router.navigate(['/home']);
    });
  }
}
