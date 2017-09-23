import { SearchService } from './../search.service';
import { ApiCallService } from './../api-call.service';
import { User } from './../models/user';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-manager',
  templateUrl: './search-manager.component.html',
  styleUrls: ['./search-manager.component.css']
})
export class SearchManagerComponent implements OnInit, OnDestroy, AfterViewInit {
  showSearchResultUsers: User[] = [];
  subscription: Subscription;
  subscription2: Subscription;
  searchVal = '';
  
  constructor( private _route: ActivatedRoute, private _apicallService: ApiCallService, private _searchService: SearchService) {
    this.subscription = this._searchService.searchValue$.subscribe(search => {
      console.log('hiiiii');
      this.searchVal = search;
      this.getAllUsers(search);
    });
   }

  ngOnInit() {
    this.subscription2 = this._route.paramMap.subscribe((params: ParamMap) => {
        this.searchVal = params.get('q');
        console.log(this.searchVal);
      });
  }


  getAllUsers(search) {
    this._apicallService.getAllUsers()
      .then(data => {
        console.log('success then response getting all users');
        this.showSearchResultUsers = this.filterUsers(data, search);
        console.log(this.showSearchResultUsers);
      })
      .catch(error => {
        console.log('error catch response getting all users');
        console.log(error);
      });
  }

  filterUsers(data, val) {
    console.log('filtering....');
    console.log(data);
    return data.filter((index) => {
      return index.username.toLowerCase().includes(val.toLowerCase());
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
