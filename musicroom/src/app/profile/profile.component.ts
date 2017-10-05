import { Comment } from './../models/comment';
import { Message } from './../models/message';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from './../search.service';
import { ChatService } from './../chat.service';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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
  subscription: Subscription;
  message: Message = new Message();
  comment: Comment = new Comment();
  userMessages;
  constructor(private _apicallService: ApiCallService, private _router: Router, private _chatService: ChatService, private _searchService: SearchService) {
    this.getCurrentUserInSession();
    console.log(this.message.content);
   }

  ngOnInit() {
    this.watchForEditUserEvent();
  }

  watchForEditUserEvent() {
    this.subscription = this._searchService.editUserEvent$.subscribe(search => {
      // console.log('hiiiii');
      // console.log(search);
      this.getCurrentUserInSession();
    });
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        if (data) {
          this.currentUser = data;
          this.getMessages();
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
            // console.log('catch response rejectInvite');
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
            // console.log('catch response removeFriend');
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

  shareMessage() {
    // console.log('sharing message');
    this.message._owner = this.currentUser._id;
    this._apicallService.addMessageToCurrUser(this.message)
      .then(data => {
        // console.log('then response shareMessage');
        // console.log(data);
        this.message = new Message();
        this.getMessages();
      })
      .catch(error => {
        // console.log('catch response shareMessage');
        console.log(error);
      });
  }


  addComment(messageId, comment) {
    console.log('adding comment');
    comment._message = messageId;
    comment.owner = this.currentUser._id;
    comment.sender = this.currentUser._id;
    console.log(comment);
    this._apicallService.addCommentToMessage(comment)
      .then(data => {
        // console.log('then response addComment');
        // console.log(data);
        this.getMessages();
      })
      .catch(error => {
        // console.log('error response addComment');
        console.log(error);
      });
  }

  getMessages() {
    // console.log('getting current profile messages');
    this._apicallService.getMessagesAndCommentsOfCurrUser()
      .then(data => {
        // console.log('Then response getting messages of current user profile');
        this.userMessages = this.sortMessages(data);
        this.populateMessagesWithNewCommentModels(this.userMessages);
        // console.log(this.userMessages);
      })
      .catch(error => {
        // console.log('Error response getting messages of current user profile');
        // console.log(error);
      });
  }

  sortMessages(messages) {
    return messages.sort((a, b) => {
      return +new Date(b.createdAt) - +new Date(a.createdAt);
    });
  }

  // getTime(date?: Date) {
  //     return date != null ? date.getTime() : 0;
  // }

  formatDateTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  addLike(messageId) {
    // console.log('liking');
    const msgData = {messageId: messageId};
    this._apicallService.addLike(msgData)
      .then(data => {
        // console.log('then response');
        // console.log(data);
        this.getMessages();
      })
      .catch(error => {
        // console.log('catch response');
        // console.log(error);
      });
  }

  populateMessagesWithNewCommentModels(messages) {
    // console.log('populating comments');
    if (messages) {
      for (const message of messages) {
        const newComment = new Comment();
        message.newComment = newComment;
      }
    }
  }


}
