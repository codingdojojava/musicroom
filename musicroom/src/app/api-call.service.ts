import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class ApiCallService {

  constructor(private _http: Http) { }

  registerAUser(userData) {
    console.log('service sending user data for registration');
    return this._http.post('/api/users/register', userData)
      .map(response => response.json())
      .toPromise();
  }

  loginUser(userData) {
    console.log('service sending user data for login');
    return this._http.post('/api/users/login', userData)
      .map(response => response.json())
      .toPromise();
  }

  getCurrentUserInSession() {
    console.log('service getting current user session');
    return this._http.get('/api/users/current')
      .map(response => response.json())
      .toPromise();
  }

  logoutUser() {
    console.log('service logging out current user');
    return this._http.get('/api/users/logout')
      .map(response => response.json())
      .toPromise();
  }

  getAllUsers() {
    console.log('service getting all users');
    return this._http.get('/api/users')
      .map(response => response.json())
      .toPromise();
  }

  getAllUsersBySearchParams(qParams) {
    console.log('service getting users by search params');
    return this._http.get('/api/users/search/' + qParams)
      .map(response => response.json())
      .toPromise();
  }

}
