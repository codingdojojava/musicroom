import { User } from './../models/user';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.css']
})
export class OtherUserProfileComponent implements OnInit {
  subscription: Subscription;
  user: User;
  constructor(private _apicallService: ApiCallService, private _route: ActivatedRoute) {
    this.subscribeToUserIdParams();
   }

  ngOnInit() {
  }

  subscribeToUserIdParams() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        // console.log('got params id: ' + params.get('id'));
        return this._apicallService.getUserByUserId(params.get('id'));
    }).subscribe(user => {
      this.user = user;
      // console.log(this.user);
    });
  }

}
