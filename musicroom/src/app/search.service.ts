import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SearchService {

  constructor() { }
 // Observable string sources
  private searchValueSource = new BehaviorSubject<string>('');
  private searchValueMusicSource = new BehaviorSubject<string>('');
 
  // Observable string streams
  searchValue$ = this.searchValueSource.asObservable();
  searchValueMusic$ = this.searchValueMusicSource.asObservable();
 
  // Service message commands
  searchUsers(searchVal: string) {
    this.searchValueSource.next(searchVal);
  }
  searchMusic(searchVal: string) {
    this.searchValueMusicSource.next(searchVal);
  }
 
}
