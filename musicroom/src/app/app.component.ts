import { SearchManagerComponent } from './search-manager/search-manager.component';
import { SearchService } from './search.service';
import { Router } from '@angular/router';
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
  constructor(private chatService:ChatService, private _route: Router, private _searchService: SearchService) { }

  ngOnInit() {
    this.chatService
        .getMessage()
        .subscribe(data => {
          console.log("GOT IT");
          // console.log(data);
          this.msg = data;
        });
  }

  sendMsg(msg){
     this.chatService.sendMessage(msg);
  }

  searchUsers() {
    console.log('hello');
    this._searchService.searchUsers(this.searchVal);
  }

  redirectToSearchPageWithSearchVal() {
    console.log('redirecting to Search page with keyword SearchVal');
    console.log(this.searchVal);
    this._route.navigate(['search', 'results', { q: this.searchVal }]);
  }
}
