import { Message } from './../models/message';
import { ChatService } from './../chat.service';
import { User } from './../models/user';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from './../api-call.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.css']
})
export class OtherUserProfileComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  user: User;
  currentUser: User;
  message: Message = new Message();
  userMessages;
  constructor(private _apicallService: ApiCallService, private _route: ActivatedRoute, private _router: Router, private chatService: ChatService) {
    this.getCurrentUserInSession();
    this.subscribeToUserIdParams();
   }

  ngOnInit() {
    this.getCurrentUserInSession();
  }

  subscribeToUserIdParams() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        // console.log('got params id: ' + params.get('id'));
        return this._apicallService.getUserByUserId(params.get('id'));
    }).subscribe(user => {
      this.user = user;
      // console.log(this.user);
    });
  }

  getCurrentUserInSession() {
    this._apicallService.getCurrentUserInSession()
      .then((data) => {
        // console.log(data);
        if (data) {
          // console.log('success getting current user');
          this.currentUser = data;
          this.getMessages();
        } else {
          // console.log('user not in session');
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log('error getting current user');
        console.log(error);
        this._router.navigate(['']);
      });
  }

  sendInvite(userId) {
    const user_Id = {userId: userId};
    this._apicallService.sendInviteToUserById(user_Id)
      .then(data => {
        // console.log('sucess then response sendInvite');
        // console.log(data);
        this.subscribeToUserIdParams();

      })
      .catch(error => {
        // console.log('error catch response sendInvite');
      });
  }

  isFriendOfCurrentUser(userFriends) {
    // console.log(this.currentUser._id);
    // console.log(userFriends);
    const friend = userFriends.find(index => {
      return index === this.currentUser._id;
    });
    // console.log(friend);
    if (friend) { return true; }
    return false;
  }
  hasReceivedInviteFromCurrentUser(userReceivedInvites) {
    // console.log(this.currentUser._id);
    // console.log(userFriends);
    const invite = userReceivedInvites.find(index => {
      return index === this.currentUser._id;
    });
    // console.log(friend);
    if (invite) { return true; }
    return false;
  }


  shareMessage() {
    console.log('sharing message');
    this.message._owner = this.user._id;
    this._apicallService.addMessageToTargetUser(this.message)
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

  getMessages() {
    // console.log('getting current profile messages');
    if (this.user) {
      this._apicallService.getMessagesAndCommentsOfTargetUser(this.user._id)
        .then(data => {
          // console.log('Then response getting messages of current user profile');
          this.userMessages = this.sortMessages(data);
          this.populateMessagesWithNewCommentModels(this.userMessages);
          // console.log(this.userMessages);
        })
        .catch(error => {
          // console.log('Error response getting messages of current user profile');
          console.log(error);
        });
    }
  }

  sortMessages(messages) {
    return messages.sort((a, b) => {
      return +new Date(b.createdAt) - +new Date(a.createdAt);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  formatDateTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  addLike(messageId) {
    // console.log('liking');
    const msgData = {messageId: messageId};
    this._apicallService.addLike(msgData)
      .then(data => {
        // console.log('then response');
        console.log(data);
        this.getMessages();
      })
      .catch(error => {
        // console.log('then response');
        console.log(error);
      });
  }

  addComment(messageId, comment) {
    // console.log('adding comment');
    comment._message = messageId;
    comment.owner = this.user._id;
    comment.sender = this.currentUser._id;
    // console.log(comment);
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

  sendFriendRequest(userId) {
    // console.log('sendFriendRequest');
    const user_Id = {userId: userId};
    this._apicallService.sendInviteToUserById(user_Id)
      .then(data => {
        // console.log('sucess then response sendInvite');
        // console.log(data);
        this.getCurrentUserInSession();
        this.subscribeToUserIdParams();
      })
      .catch(error => {
        // console.log('error catch response sendInvite');
        console.log(error);
      });
  }

    isFriendOfCurrentUserId(userFriends) {
    // console.log(this.currentUser._id);
    // console.log(userFriends);
    const friend = userFriends.find(index => {
      return index._id === this.currentUser._id;
    });
    // console.log(friend);
    if (friend) { return true; }
    return false;
  }

  hasReceivedInviteFromCurrentUserId(userReceivedInvites) {
    // console.log(this.currentUser._id);
    // console.log(userFriends);
    const invite = userReceivedInvites.find(index => {
      return index._id === this.currentUser._id;
    });
    // console.log(friend);
    if (invite) { return true; }
    return false;
  }
}
