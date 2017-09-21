import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  constructor() {
    console.log('hellooo registrations!!');
   }

  ngOnInit() {
  }

  registerUser() {
    console.log('registering User');
  }

}
