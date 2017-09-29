import { HomeComponent } from './dashboard/home/home.component';
import { SearchRoomsComponent } from './search-manager/search-rooms/search-rooms.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomComponent } from './dashboard/room/room.component';
import { SearchUsersComponent } from './search-manager/search-users/search-users.component';
import { SearchMusicComponent } from './search-manager/search-music/search-music.component';
import { CurrentProfileComponent } from './profile/current-profile/current-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';
import { SearchManagerComponent } from './search-manager/search-manager.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegistrationComponent },
  { path: 'home', component: DashboardComponent, children: [
    { path: 'logout', component: LogoutComponent },
    { path: 'main', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, children: [
          {path: 'edit', component: EditProfileComponent},
          {path: 'current', component: CurrentProfileComponent}
      ] },   
    { path: 'search/results', component: SearchManagerComponent, children: [
      { path: 'music', component: SearchMusicComponent },
      { path: 'users', component: SearchUsersComponent },
      { path: 'rooms', component: SearchRoomsComponent }
    ] },
    { path: 'users/:id', component: OtherUserProfileComponent },
    {path: 'room/new', component: NewRoomComponent},
    {path: 'room/:id', component: RoomComponent},
    {path: 'room/:id1/users/:id2', redirectTo:"/home/users/:id2"},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
