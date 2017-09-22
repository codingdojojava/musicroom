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
  currentUser: User = new User();
  constructor(private _apicallService: ApiCallService, private _router: Router) {
    this.getCurrentUserInSession();
   }
  ngOnInit() {
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        console.log('success getting current user');
        console.log(data);
        if (data) {
          this.currentUser = data;
        } else {
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log('error getting current user');
        console.log(error);
      });
  }

}
