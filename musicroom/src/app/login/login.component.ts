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
  constructor(private _apicallService: ApiCallService, private _router: Router, private _appComponent: AppComponent) { }

  ngOnInit() {
  }

  loginUser() {
    console.log('login User');
    console.log(this.user);
    this._apicallService.loginUser(this.user)
      .then((data) => {
        console.log('success logging in user');
        console.log(data);
        this._appComponent.getCurrentUserInSession();
        this._router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('error logging in user');
        console.log(error);
      });
  }

}
