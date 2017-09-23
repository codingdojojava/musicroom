import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _apicallService: ApiCallService, private _router: Router, private _appComponent: AppComponent) {
    this._apicallService.logoutUser()
      .then(data => {
        console.log('success logging user out');
        this._appComponent.getCurrentUserInSession();
        this._router.navigate(['']);
      })
      .catch(error => {
        console.log('error logging user out');
        this._router.navigate(['']);
      });
   }

  ngOnInit() {
  }

}
