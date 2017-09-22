import { User } from './../models/user';
import { Router } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser;
  constructor(private _apicallService: ApiCallService, private _router: Router) {
    this.getCurrentUserInSession();
   }

  ngOnInit() {
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        console.log(data);
        if (data) {
          console.log('success getting current user');
          this.currentUser = data;
        } else {
          console.log('user not in session');
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log('error getting current user');
        console.log(error);
        this._router.navigate(['']);
      });
  }

}
