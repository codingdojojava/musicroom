import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log('login User');
  }

}
