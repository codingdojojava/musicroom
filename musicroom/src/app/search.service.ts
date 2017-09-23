import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SearchService {

  constructor() { }
 // Observable string sources
  private searchValueSource = new BehaviorSubject<string>('');
 
  // Observable string streams
  searchValue$ = this.searchValueSource.asObservable();
 
  // Service message commands
  searchUsers(searchVal: string) {
    this.searchValueSource.next(searchVal);
  }
 
}
