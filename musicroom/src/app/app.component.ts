import { DashboardComponent } from './dashboard/dashboard.component';
import { Subscription } from 'rxjs/Subscription';
import { LastFmApiService } from './last-fm-api.service';
import { ApiCallService } from './api-call.service';
import { SearchManagerComponent } from './search-manager/search-manager.component';
import { SearchService } from './search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from './chat.service';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {

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

   ngAfterViewInit() {

   }

  searchUsers() {
    this._searchService.searchUsers(this.searchVal);
  }

  searchRooms() {
    this._searchService.searchRooms(this.searchVal3);
  }

  searchMusic() {
    // console.log('hello');
    if (!this.isInMusicBrowser) {
      this._route.navigate(['home', 'search', 'results', 'music', { q: this.searchVal2 }]);
      this.searchVal2 = '';
    } else {
      this._searchService.searchMusic(this.searchVal2);
      this.searchVal2 = '';
    }
  }

  redirectToSearchPageWithSearchVal() {
    this._route.navigate(['home', 'search', 'results', 'users', { q: this.searchVal }]);
  }

  redirectToSearchRoomPageWithSearchVal3() {
    this._route.navigate(['home', 'search', 'results', 'rooms', { q: this.searchVal3 }]);
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setIsInMusicBrowser() {
    if (this.isInMusicBrowser) {
      this.isInMusicBrowser = false;
    } else {
      this.isInMusicBrowser = true;
    }
  }

  refreshUserSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnDestroy() {
    this._apicallService.logoutUser()
      .then(data => {
        console.log(data);
      });
  }
  
}
