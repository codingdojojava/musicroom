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
          this.incorrectLogin = false;
          this._appComponent.getCurrentUserInSession();
          // this._router.navigate(['http://www.last.fm/api/auth/?api_key=c595e718d23c51ef68c0d547f1511fe7&cb=http://127.0.0.1/home']);
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        // console.log('error logging in user');
        // console.log(error);
      });
  }

}
