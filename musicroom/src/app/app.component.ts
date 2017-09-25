import { ChatService } from './chat.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msg = "";
  searchVal='';
  constructor(private chatService:ChatService) { }

  // ngOnInit() {
  //   this.chatService
  //       .getMessage()
  //       .subscribe(data => {
  //         console.log("GOT IT");
  //         // console.log(data);
  //         this.msg = data;
  //       });
  // }

  // sendMsg(msg){
  //    this.chatService.sendMessage(msg);
  // }

  redirectToSearchPageWithSearchVal() {
    console.log('redirecting to Search page with keyword SearchVal');
  }
}
