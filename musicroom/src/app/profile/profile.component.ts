import { ChatService } from './../chat.service';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  editMode: Boolean = false;
  isCheckingRecent: Boolean = false;
  isCheckingSent: Boolean = false;
  constructor(private _apicallService: ApiCallService, private _router: Router, private _chatService: ChatService) {
    this.getCurrentUserInSession();
   }

  ngOnInit() {
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log(error);
        this._router.navigate(['']);
      });
  }

  acceptInvite(invite_id) {
    const receivedInvites = this.currentUser.received_invites;
    for (const invite of receivedInvites) {
      if (invite._id === invite_id) {
        const inviteId = { inviteId : invite_id };
        this._apicallService.addFriendAndUpdateReceivedInvite(inviteId)
          .then(data => {
            this.getCurrentUserInSession();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  rejectInvite(invite_id) {
    const receivedInvites = this.currentUser.received_invites;
    for (const invite of receivedInvites) {
      if (invite._id === invite_id) {
        const inviteId = { inviteId : invite_id };
        this._apicallService.rejectInvite(inviteId)
          .then(data => {
            this.getCurrentUserInSession();
          })
          .catch(error => {
            console.log('catch response rejectInvite');
            console.log(error);
          });
      }
    }
  }

  removeFriend(friend_id) {
    const friendList = this.currentUser.friends;
    for (const friend of friendList) {
      if (friend._id === friend_id) {
        const friendId = { friendId : friend_id };
        this._apicallService.removeFriend(friendId)
          .then(data => {
            this.getCurrentUserInSession();
          })
          .catch(error => {
            console.log('catch response removeFriend');
            console.log(error);
          });
      }
    }
  }

  setEditMode() {
    if (!this.editMode) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  checkRecentInvites() {
    if (!this.isCheckingRecent) {
      this.isCheckingRecent = true;
    }
    if (this.isCheckingSent) {
      this.isCheckingSent = false;
    }
  }

  checkSentInvites() {
    if (!this.isCheckingSent) {
      this.isCheckingSent = true;
    }
    if (this.isCheckingRecent) {
      this.isCheckingRecent = false;
    }
  }

  disableCheckInvitesMode() {
    if (this.isCheckingRecent || this.isCheckingSent) {
      this.isCheckingRecent = false;
      this.isCheckingSent = false;
    }
  }

}
