import { Room } from './../models/room';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  room = new Room();
  currentUser: User = new User();
  allRooms = [];
  constructor(private _apicallService: ApiCallService, private _router: Router) {
    this.getCurrentUserInSession();
   }
  ngOnInit() {
    this.getAllRooms();
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
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        // console.log('error getting current user');
        // console.log(error);
        this._router.navigate(['']);
      });
  }

  createRoom(){
    var self = this;
    this._apicallService.createRoom(this.room).then(function(data){
      console.log("ROOM CREATION");
      console.log(data);
      self.getAllRooms();
    });
    this.room = new Room();
  }

  getAllRooms(){
    this._apicallService.getRooms().then(rooms=>{
      this.allRooms = rooms;
    })
  }

}
