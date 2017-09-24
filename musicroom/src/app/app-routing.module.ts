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
  { path: 'home', pathMatch: 'full', component: DashboardComponent },
  { path: 'home/profile', component: ProfileComponent, children: [
      {path: 'edit', component: EditProfileComponent},
      {path: 'current', component: CurrentProfileComponent}
  ] },
  { path: 'logout', pathMatch: 'full', component: LogoutComponent },
  { path: 'search/results', component: SearchManagerComponent },
  { path: 'home/users/:id', component: OtherUserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
