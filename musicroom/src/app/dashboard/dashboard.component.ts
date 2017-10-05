import { ChatService } from './../chat.service';
import { Subscription } from 'rxjs/Subscription';
import { Room } from './../models/room';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../models/user';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser;
  onlineFriends = [];
  allRooms = [];
  userRooms = [];
  room:object={};
  subscription: Subscription;
  subscription2: Subscription;
  showFriends = false;
  showRooms = false;
  constructor(private _apicallService: ApiCallService, private _router: Router, private chatService: ChatService) {
   }
  ngOnInit() {
    this.refreshUserSession();
    var self = this;
    this.getAllRooms();
    this._apicallService.getOnlineFriends().then((data)=>{
        this.onlineFriends = data;
      });
  }

  displayFriends(){
    this.showFriends = !this.showFriends;
  }
  displayRooms(){
    this.showRooms = !this.showRooms;
  }
  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log(error);
        this._router.navigate(['']);
      });
  }

    refreshUserSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
          this.watchForFriendLoginEvent(this.currentUser._id);
          this.watchForFriendLogoutEvent(this.currentUser._id);
        } else {
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  getAllRooms(){
    this._apicallService.getRooms().then(rooms=>{
      this.allRooms = rooms;
    })
  }

  watchForFriendLoginEvent(id) {
    // console.log('Client On: Now Watching for Current User Friends Logging in');
    this.subscription = this.chatService.getLoginEvent(id).subscribe(data => {
      // console.log('Login Event Happened');
      this.getCurrentUserInSession();
      this._apicallService.getOnlineFriends().then((data)=>{
        // console.log('list of online friends');
        // console.log(data);
        this.onlineFriends = data;
      });
    });
  }

  watchForFriendLogoutEvent(id) {
    // console.log('Client On: Now Watching for Current User Friends Logging out');
    this.subscription2 = this.chatService.getLogoutEvent(id).subscribe(data => {
      // console.log('a friend is offline');
      this.getCurrentUserInSession();
      // console.log("getting online friends");
      this._apicallService.getOnlineFriends().then((data)=>{
        // console.log('list of online friends');
        // console.log(data);
        this.onlineFriends = data;
      });
    });
  }


  ngOnDestroy() {
    // this._apicallService.logoutUser()
    //   .then(data => {
    //     console.log(data);
    if(this.subscription && this.subscription2) {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();

    }
    // });
  }

}
