import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  incorrectLogin = false;
  // currentUser;
  constructor(private _apicallService: ApiCallService, private _router: Router, private _appComponent: AppComponent) { }

  ngOnInit() {
  }

  loginUser() {
    // console.log('login User');
    // console.log(this.user);
    this._apicallService.loginUser(this.user)
      .then((data) => {
        // console.log('success logging in user');
        // console.log(data);
        if (!data) {
          this.incorrectLogin = true;
          this.user = new User();
        } else {
          // this.currentUser = data;
          this.incorrectLogin = false;
          this._appComponent.getCurrentUserInSession();
          // console.log(this.currentUser);
          // if (!this.currentUser.lastfmSessionToken && !this.currentUser.lastfmSessionSig) {
          //   window.location.href = 'http://www.last.fm/api/auth/?api_key=c595e718d23c51ef68c0d547f1511fe7&cb=http://localhost:8000/session/';
          // } else {
            // add a test if session token is valid later
            // ---------------
          this._router.navigate(['home']);
          // }
        }
      })
      .catch((error) => {
        // console.log('error logging in user');
        // console.log(error);
      });
  }

}
