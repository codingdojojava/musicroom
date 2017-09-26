import { LastFmApiService } from './last-fm-api.service';
import { ApiCallService } from './api-call.service';
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
  currentUser;
  stuff;
  msg = "";
  searchVal='';
  searchVal2='';
  searchVal3='';
  isInMusicBrowser = false;
  searchMode = 'users';
  constructor(private chatService:ChatService, 
              private _route: Router, 
              private _searchService: SearchService, 
              private _apicallService: ApiCallService,
              private _lastFmApiService: LastFmApiService) {
    this.getCurrentUserInSession();
   }

  // sendMsg(msg){
  //    this.chatService.sendMessage(msg);
  // }

  searchUsers() {
    // console.log('hello');
    this._searchService.searchUsers(this.searchVal);
  }

  searchRooms() {
    // console.log('hello');
    this._searchService.searchRooms(this.searchVal3);
  }

  searchMusic() {
    // console.log('hello');
    if (!this.isInMusicBrowser) {
      console.log('not in music browser so redirecting');
      this._route.navigate(['home', 'search', 'results', 'music', { q: this.searchVal2 }]);
      this.searchVal2 = '';
    } else {
      console.log('in music browser so just updating search results');
      this._searchService.searchMusic(this.searchVal2);
      this.searchVal2 = '';
    }
  }

  redirectToSearchPageWithSearchVal() {
    // console.log('redirecting to Search page with keyword SearchVal');
    // console.log(this.searchVal);
    this._route.navigate(['home', 'search', 'results', 'users', { q: this.searchVal }]);
  }

  redirectToSearchRoomPageWithSearchVal3() {
    // console.log('redirecting to Search page with keyword SearchVal');
    // console.log(this.searchVal);
    this._route.navigate(['home', 'search', 'results', 'rooms', { q: this.searchVal3 }]);
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        // console.log(data);
        if (data) {
          // console.log('success getting current user');
          this.currentUser = data;
        } else {
          // console.log('user not in session');
          this.currentUser = false;
        }
      })
      .catch((error) => {
        // console.log('error getting current user');
        // console.log(error);
      });
  }

  setIsInMusicBrowser() {
    if (this.isInMusicBrowser) {
      this.isInMusicBrowser = false;
    } else {
      this.isInMusicBrowser = true;
    }
  }

}
