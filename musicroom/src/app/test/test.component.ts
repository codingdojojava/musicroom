import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  msg = "";
  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.chatService
        .getMessage()
        .subscribe(data => {
          console.log("GOT IT");
          console.log(data);
          this.msg = "1st "+data;
        });
  }

  sendMsg(msg){
    console.log("OK");
     this.chatService.sendMessage(msg);
  }
}
