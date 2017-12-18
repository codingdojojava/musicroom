webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api-call.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/Rx.js");
var ApiCallService = (function () {
    function ApiCallService(_http) {
        this._http = _http;
        this.defaultPicUrl = 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png';
    }
    ApiCallService.prototype.registerAUser = function (userData) {
        // console.log('service sending user data for registration');
        if (userData.profileImageUrl === '') {
            userData.profileImageUrl = this.defaultPicUrl;
        }
        return this._http.post('/api/users/register', userData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.loginUser = function (userData) {
        // console.log('service sending user data for login');
        return this._http.post('/api/users/login', userData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getCurrentUserInSession = function () {
        // console.log('service getting current user session');
        return this._http.get('/api/users/current')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.logoutUser = function () {
        // console.log('service logging out current user');
        return this._http.get('/api/users/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.createRoom = function (roomInfo) {
        return this._http.post('/api/rooms/create', roomInfo).map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.getRooms = function () {
        return this._http.get('/api/rooms').map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.getRoomById = function (id) {
        return this._http.get('/api/rooms/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.sendMessage = function (id, message) {
        // console.log("MESSAGE");
        // console.log(message);
        var msg = { message: message };
        return this._http.post('/api/rooms/' + id + '/messages/new', msg).map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.joinRoom = function (id, pw) {
        return this._http.post('/api/rooms/' + id + '/join', pw).map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.leaveRoom = function (id) {
        return this._http.get('/api/rooms/' + id + '/leave').map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.deleteRoom = function (id) {
        return this._http.get('/api/rooms/' + id + '/delete').map(function (data) { return data.json(); }).toPromise();
    };
    ApiCallService.prototype.getAllUsers = function () {
        // console.log('service getting all users');
        return this._http.get('/api/users')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getUserByUserId = function (userParams) {
        // console.log('service getting users by id');
        return this._http.get('/api/users/' + userParams)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.sendInviteToUserById = function (userIdData) {
        // console.log('service sending invite to user by id');
        return this._http.post('/api/users/invite', userIdData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.addFriendAndUpdateReceivedInvite = function (inviteData) {
        // console.log('service adding friend to user and updating received invites list');
        return this._http.post('/api/users/invite/accept', inviteData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.rejectInvite = function (inviteData) {
        // console.log('service rejeting invite and updating received and sent invites lists');
        return this._http.post('/api/users/invite/reject', inviteData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.removeFriend = function (friendData) {
        // console.log('service removing friend from current User');
        return this._http.post('/api/users/friends/remove', friendData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.editCurrentUser = function (currentUserData) {
        // console.log('service removing friend from current User');
        return this._http.post('/api/users/profile/edit', currentUserData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.saveLastFmSessionTokenAndSigToUserInSession = function (lastFmSessionData) {
        return this._http.post('/api/users/current/lastfm', lastFmSessionData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getOnlineFriends = function () {
        return this._http.get('/api/users/online_friends')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.addMessageToCurrUser = function (messageData) {
        return this._http.post('/api/message/share', messageData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.addCommentToMessage = function (commentData) {
        return this._http.post('/api/comment/add', commentData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getMessagesAndCommentsOfCurrUser = function () {
        return this._http.get('/api/current/messages')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.addLike = function (messageIdData) {
        // console.log('service adding like');
        return this._http.post('/api/current/messages/like', messageIdData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.addMessageToTargetUser = function (messageData) {
        return this._http.post('/api/message/share/tuser', messageData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getMessagesAndCommentsOfTargetUser = function (userId) {
        return this._http.get('/api/users/' + userId + '/messages')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return ApiCallService;
}());
ApiCallService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ApiCallService);
exports.ApiCallService = ApiCallService;
var _a;
//# sourceMappingURL=api-call.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
var search_rooms_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts");
var new_room_component_1 = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
var room_component_1 = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
var search_users_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
var search_music_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
var current_profile_component_1 = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
var edit_profile_component_1 = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
var other_user_profile_component_1 = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
var search_manager_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
var logout_component_1 = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var index_component_1 = __webpack_require__("../../../../../src/app/index/index.component.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var routes = [
    { path: '', pathMatch: 'full', component: index_component_1.IndexComponent },
    { path: 'login', pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: 'register', pathMatch: 'full', component: registration_component_1.RegistrationComponent },
    { path: 'home', component: dashboard_component_1.DashboardComponent, children: [
            { path: 'logout', component: logout_component_1.LogoutComponent },
            { path: 'main', component: home_component_1.HomeComponent },
            { path: 'profile', component: profile_component_1.ProfileComponent, children: [
                    { path: 'edit', component: edit_profile_component_1.EditProfileComponent },
                    { path: 'current', component: current_profile_component_1.CurrentProfileComponent }
                ] },
            { path: 'search/results', component: search_manager_component_1.SearchManagerComponent, children: [
                    { path: 'music', component: search_music_component_1.SearchMusicComponent },
                    { path: 'users', component: search_users_component_1.SearchUsersComponent },
                    { path: 'rooms', component: search_rooms_component_1.SearchRoomsComponent }
                ] },
            { path: 'users/:id', component: other_user_profile_component_1.OtherUserProfileComponent },
            { path: 'room/new', component: new_room_component_1.NewRoomComponent },
            { path: 'room/:id', component: room_component_1.RoomComponent },
            { path: 'room/:id1/users/:id2', redirectTo: "/home/users/:id2" },
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n<div class=\"header\" style=\"position: fixed; width: 100%; z-index: 1000;\">\n  <nav class=\"navbar navbar-default navbar-inverse\" data-spy=\"affix\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\" dropdown>\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!currentUser\"><a [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n          <li *ngIf=\"!currentUser\"><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n          <li *ngIf=\"!currentUser\"><a  [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n          \n          <li *ngIf=\"currentUser\"><a [routerLink]=\"['/home/main']\" style=\"padding-top:19px;\"><b>Home</b> <span class=\"caret\"></span></a></li>\n          <li *ngIf=\"currentUser\"><a [routerLink]=\"['/home/profile/current']\" style=\"padding-top:19px;\"><b>Profile</b> <span class=\"caret\"></span></a></li>\n\n\n          <li *ngIf=\"searchMode==='users' && currentUser\" style=\"display: inline-block; margin-top:15px;\">\n              <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchPageWithSearchVal()\">\n                <input type=\"text\" name=\"searchU\" placeholder=\"Search User\" [(ngModel)]=\"searchVal\" (keyup) = \"searchUsers()\" />\n                <input type=\"submit\" value=\"Search Users\" />\n              </form>\n            </li>\n            <li *ngIf=\"searchMode==='rooms' && currentUser\"style=\"display: inline-block; margin-top:15px;\">\n              <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchRoomPageWithSearchVal3()\">\n                <input type=\"text\" name=\"searchM\" placeholder=\"Search Chatrooms\" [(ngModel)]=\"searchVal3\" (keyup) = \"searchRooms()\"/>\n                <input type=\"submit\" value=\"Search Rooms\" />\n              </form>\n            </li>\n         \n            <li *ngIf=\"searchMode==='music' && currentUser\"style=\"display: inline-block; margin-top:15px;\">\n              <form *ngIf=\"currentUser\" (submit) = \"searchMusic()\">\n                <input type=\"text\" name=\"searchM\" placeholder=\"Search Music\" [(ngModel)]=\"searchVal2\" />\n                <input type=\"submit\" value=\"Search Music\" />\n              </form>\n            </li>\n            <li>\n            <select *ngIf=\"currentUser\" name=\"searchMode\" [(ngModel)]=\"searchMode\" style= \"margin-top:18px;\">\n              <option value=\"users\" >Users</option>\n              <option value=\"music\">Music</option>\n              <option value=\"rooms\">Chatrooms</option>\n            </select>\n          </li>\n          <li *ngIf=\"currentUser\"><a [routerLink]=\"['/home','logout']\" style=\"padding-top:19px;\"><b>Logout</b> <span class=\"caret\"></span></a></li>\n\n\n\n          <!-- <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li> -->\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n\n<router-outlet  ></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-input-placeholder {\n  font-style: italic; }\n\n:-moz-input-placeholder {\n  font-style: italic; }\n\n:-ms-input-placeholder {\n  font-style: italic; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var last_fm_api_service_1 = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent(chatService, _route, _searchService, _apicallService, _lastFmApiService) {
        this.chatService = chatService;
        this._route = _route;
        this._searchService = _searchService;
        this._apicallService = _apicallService;
        this._lastFmApiService = _lastFmApiService;
        this.msg = "";
        this.searchVal = '';
        this.searchVal2 = '';
        this.searchVal3 = '';
        this.isInMusicBrowser = false;
        this.searchMode = 'users';
        this.getCurrentUserInSession();
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.searchUsers = function () {
        this._searchService.searchUsers(this.searchVal);
    };
    AppComponent.prototype.searchRooms = function () {
        this._searchService.searchRooms(this.searchVal3);
    };
    AppComponent.prototype.searchMusic = function () {
        // console.log('hello');
        if (!this.isInMusicBrowser) {
            this._route.navigate(['home', 'search', 'results', 'music', { q: this.searchVal2 }]);
            this.searchVal2 = '';
        }
        else {
            this._searchService.searchMusic(this.searchVal2);
            this.searchVal2 = '';
        }
    };
    AppComponent.prototype.redirectToSearchPageWithSearchVal = function () {
        this._route.navigate(['home', 'search', 'results', 'users', { q: this.searchVal }]);
    };
    AppComponent.prototype.redirectToSearchRoomPageWithSearchVal3 = function () {
        this._route.navigate(['home', 'search', 'results', 'rooms', { q: this.searchVal3 }]);
    };
    AppComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
            }
            else {
                _this.currentUser = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.setIsInMusicBrowser = function () {
        if (this.isInMusicBrowser) {
            this.isInMusicBrowser = false;
        }
        else {
            this.isInMusicBrowser = true;
        }
    };
    AppComponent.prototype.refreshUserSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
            }
            else {
                _this.currentUser = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._apicallService.logoutUser()
            .then(function (data) {
            console.log(data);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object, typeof (_d = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _d || Object, typeof (_e = typeof last_fm_api_service_1.LastFmApiService !== "undefined" && last_fm_api_service_1.LastFmApiService) === "function" && _e || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var last_fm_api_service_1 = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng_socket_io_1 = __webpack_require__("../../../../ng-socket-io/index.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var dropdown_1 = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var carousel_1 = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js"); // <-- Import FormsModule
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js"); // <-- Import HttpModule
var index_component_1 = __webpack_require__("../../../../../src/app/index/index.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var logout_component_1 = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
var search_manager_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
var room_component_1 = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
var other_user_profile_component_1 = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
var edit_profile_component_1 = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
var current_profile_component_1 = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
var search_music_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
var search_users_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
var new_room_component_1 = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
var search_rooms_component_1 = __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
var config = { url: 'http://localhost:8000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            index_component_1.IndexComponent,
            dashboard_component_1.DashboardComponent,
            profile_component_1.ProfileComponent,
            login_component_1.LoginComponent,
            registration_component_1.RegistrationComponent,
            logout_component_1.LogoutComponent,
            search_manager_component_1.SearchManagerComponent,
            room_component_1.RoomComponent,
            other_user_profile_component_1.OtherUserProfileComponent,
            edit_profile_component_1.EditProfileComponent,
            current_profile_component_1.CurrentProfileComponent,
            search_music_component_1.SearchMusicComponent,
            search_users_component_1.SearchUsersComponent,
            new_room_component_1.NewRoomComponent,
            search_rooms_component_1.SearchRoomsComponent,
            home_component_1.HomeComponent,
        ],
        imports: [
            // ngx-bootstrap
            dropdown_1.BsDropdownModule.forRoot(),
            carousel_1.CarouselModule.forRoot(),
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            ng_socket_io_1.SocketIoModule.forRoot(config),
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        providers: [
            chat_service_1.ChatService,
            api_call_service_1.ApiCallService,
            search_service_1.SearchService,
            last_fm_api_service_1.LastFmApiService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng_socket_io_1 = __webpack_require__("../../../../ng-socket-io/index.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var ChatService = (function () {
    function ChatService(socket, _apiCallService) {
        this.socket = socket;
        this._apiCallService = _apiCallService;
    }
    ChatService.prototype.getMessage = function (id) {
        return this.socket
            .fromEvent("msg" + id)
            .map(function (data) {
            // console.log("GOT EVENT");
            return true;
        });
    };
    ChatService.prototype.sendMessage = function (id) {
        // console.log("SENDING EVENT");
        this.socket
            .emit("msg", id);
    };
    ChatService.prototype.loginEvent = function (currentUser) {
        // console.log('loginEvent Triggered: Sending currentuser data to server event name: login');
        this.socket.emit('login', currentUser);
    };
    ChatService.prototype.getLoginEvent = function (id) {
        return this.socket
            .fromEvent("online" + id)
            .map(function (data) {
            // console.log('got login event');
            return true;
        });
    };
    ChatService.prototype.logoutEvent = function (currentUser) {
        // console.log('logoutEvent triggered: Sending currentuser data to server event name: logout');
        this.socket.emit('logout', currentUser);
    };
    ChatService.prototype.getLogoutEvent = function (currentUserid) {
        return this.socket.fromEvent("offline" + currentUserid)
            .map(function (data) {
            // console.log("GOT LOGOUT EVENT");
            return true;
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng_socket_io_1.Socket !== "undefined" && ng_socket_io_1.Socket) === "function" && _a || Object, typeof (_b = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _b || Object])
], ChatService);
exports.ChatService = ChatService;
var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  \n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  /* background-color: #428bca; */\n  background-color: #030303;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <router-outlet></router-outlet> -->\n<!-- <a [routerLink]=\"['room']\">qqqq</a> -->\n<!-- JOE's top SECTION -->\n<div *ngIf=\"currentUser\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-3 col-md-2 sidebar\" style=\"top: 60px; padding-top:0;\">\n                <ul class=\"nav nav-sidebar\">\n                    <!-- friends online list -->\n                <li class=\"active\"><a [routerLink]='[\"room\",\"new\"]'><span class='glyphicon glyphicon-plus' style='float: right;'></span> Create Room</a></li>\n                <li class=\"active\"><a (click)=\"displayFriends()\">Friends Online <span style='float: right;' *ngIf=\"!showFriends\" class='glyphicon glyphicon-chevron-down'></span><span style='float: right;' *ngIf=\"showFriends\" class='glyphicon glyphicon-chevron-up'></span></a></li>\n                <div *ngIf=\"showFriends\" style=\"min-height: 200px;\">\n                    <li *ngFor=\"let friend of onlineFriends\" style='margin-left: 20px;'>\n                        <a [routerLink]=\"['home','users', friend.userId]\">{{friend.username}}</a>\n                    </li>\n                </div>\n    <!--  -->   <li class=\"active\" style=\"margin-top:0px\"><a (click)=\"displayRooms()\">Joined Rooms <span style='float: right;' *ngIf=\"!showRooms\" class='glyphicon glyphicon-chevron-down'></span><span style='float: right;' *ngIf=\"showRooms\" class='glyphicon glyphicon-chevron-up'></span></a></li>\n                <div *ngIf=\"showRooms\" style=\"min-height: 200px;\">\n                    <li *ngFor=\"let room of currentUser.joinedRooms\" style='margin-left: 20px;'>\n                        <a [routerLink]=\"['room', room.roomId]\">{{room.title}}</a>\n                    </li>\n                </div>\n                </ul>\n                <ul class=\"nav nav-sidebar\">\n                <!-- create room button -->\n                <!--<li class=\"active\"><a [routerLink]='[\"room\",\"new\"]'>+ Create Room</a></li>\n                \n                <li class=\"active\" style=\"margin-top:0px\"><a [routerLink]='[\"room\",\"joined\"]'>Joined Rooms List</a></li>-->\n<!--\n                <li *ngFor=\"let room of currentUser.joinedRooms\">\n                    <a [routerLink]=\"['room', room.roomId]\">{{room.title}}</a>\n                </li>-->\n                </ul>\n            </div>\n<!-- JOE bottom -->\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\" style=\"margin-top: 50px;\">\n            <router-outlet ></router-outlet>\n        </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DashboardComponent = (function () {
    function DashboardComponent(_apicallService, _router, chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.chatService = chatService;
        this.onlineFriends = [];
        this.allRooms = [];
        this.userRooms = [];
        this.room = {};
        this.showFriends = false;
        this.showRooms = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshUserSession();
        var self = this;
        this.getAllRooms();
        this._apicallService.getOnlineFriends().then(function (data) {
            _this.onlineFriends = data;
        });
    };
    DashboardComponent.prototype.displayFriends = function () {
        this.showFriends = !this.showFriends;
    };
    DashboardComponent.prototype.displayRooms = function () {
        this.showRooms = !this.showRooms;
    };
    DashboardComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
            }
            else {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    DashboardComponent.prototype.refreshUserSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
                _this.watchForFriendLoginEvent(_this.currentUser._id);
                _this.watchForFriendLogoutEvent(_this.currentUser._id);
            }
            else {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.getAllRooms = function () {
        var _this = this;
        this._apicallService.getRooms().then(function (rooms) {
            _this.allRooms = rooms;
        });
    };
    DashboardComponent.prototype.watchForFriendLoginEvent = function (id) {
        var _this = this;
        // console.log('Client On: Now Watching for Current User Friends Logging in');
        this.subscription = this.chatService.getLoginEvent(id).subscribe(function (data) {
            // console.log('Login Event Happened');
            _this.getCurrentUserInSession();
            _this._apicallService.getOnlineFriends().then(function (data) {
                // console.log('list of online friends');
                // console.log(data);
                _this.onlineFriends = data;
            });
        });
    };
    DashboardComponent.prototype.watchForFriendLogoutEvent = function (id) {
        var _this = this;
        // console.log('Client On: Now Watching for Current User Friends Logging out');
        this.subscription2 = this.chatService.getLogoutEvent(id).subscribe(function (data) {
            // console.log('a friend is offline');
            _this.getCurrentUserInSession();
            // console.log("getting online friends");
            _this._apicallService.getOnlineFriends().then(function (data) {
                // console.log('list of online friends');
                // console.log(data);
                _this.onlineFriends = data;
            });
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // this._apicallService.logoutUser()
        //   .then(data => {
        //     console.log(data);
        if (this.subscription && this.subscription2) {
            this.subscription.unsubscribe();
            this.subscription2.unsubscribe();
        }
        // });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _c || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img style=\"margin: 0 auto; display: block; margin-top: 8%;\" src=\"http://res.cloudinary.com/rockafella20/image/upload/co_rgb:130f0f/v1506662629/logo_j9sdoe.png\">"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".msgform{\n    height: 35px;\n}\n\n#allMessages{\n    overflow-y: scroll;\n    height: 250px;\n}\n\n.details{\n    font-size: 15px;\n    float: right;\n    height: 12px;\n}\n\nhr.style2 {\n\tborder-top: 1px solid black;\n}\n\n.msg{\n    border-bottom: 1px solid lightgrey;\n    word-wrap: break-word;\n}\n\n.msg:last-child{\n    border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-default' *ngIf=\"room\">\n  <div class='panel-heading'>\n    <h3 style='display:inline-block;' class='panel-title'>{{room.title}}</h3>\n    <button class='btn btn-link details' (click)=\"changeArrow()\" data-toggle=\"collapse\" data-target=\"#details\" aria-expanded=\"false\" aria-controls=\"details\">\n      <span class='glyphicon glyphicon-chevron-up' *ngIf=\"arrow=='^'\"></span>\n      <span class='glyphicon glyphicon-chevron-down' *ngIf=\"arrow=='v'\"></span>\n    </button>\n    <div *ngIf=\"arrow=='^'\">\n      <hr class='style2'>\n      <div style='display: inline-block'>\n        <p>Owner: <a [routerLink]=\"['users', room._owner.userId]\">{{room._owner.username}}</a></p>\n        <p>Description: {{room.description}}</p>\n        <p>Users in room:</p>\n        <div id='usersInRoom'>\n          <p *ngFor=\"let user of room._roomMembers\">\n            <span class='glyphicon glyphicon-record' *ngIf=\"user.isLoggedIn\" style='color: green;'></span>\n            <span class='glyphicon glyphicon-record' *ngIf=\"!user.isLoggedIn\" style='color: red;'></span>\n            <a [routerLink]=\"['users', user.userId]\">{{user.username}}</a>\n          </p>\n        </div>\n      </div>\n      <div>\n        <button *ngIf=\"!isOwner && userInRoom\" class='btn btn-danger' (click)=\"leaveRoom()\">Leave Room</button>\n        <button *ngIf=\"isOwner\" class='btn btn-danger' (click)=\"deleteRoom()\">Delete Room</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <div *ngIf=\"userInRoom\">\n      <div #scroll id=\"allMessages\">\n        <p class='msg col-md-12' *ngFor=\"let msg of room.chatlog\"><a [routerLink]=\"['users', msg.id]\">{{msg.user}}</a>: {{msg.message}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-footer\">\n    <form *ngIf=\"userInRoom\" (submit)=\"sendMessage()\">\n      <input class='col-md-11 msgform' type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" name=\"msg\">\n      <button type='submit' class='btn btn-primary msgform'>Send <span class='glyphicon glyphicon-send'></span></button>\n      <!-- <input class=\"btn btn-primary msgform\" type=\"submit\" value=\"Send\"> -->\n    </form>\n    <div *ngIf=\"!userInRoom && room\">\n      <div *ngIf=\"room.isPublic\">\n        <button (click)=\"joinRoom()\" class='btn btn-primary'>Join Room</button>\n      </div>\n      <div *ngIf=\"!room.isPublic\">\n        <input type=\"password\" name=\"roomPassword\" [(ngModel)]=\"roomPW\" placeholder=\"Enter password\">\n        <button (click)=\"joinRoom()\" class='btn btn-primary' [ngClass]=\"{'disabled':roomPW != room.password}\" [disabled]=\"roomPW != room.password\">Join Room</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var RoomComponent = (function () {
    function RoomComponent(_route, apiService, chatService, _dashboardComp, router) {
        this._route = _route;
        this.apiService = apiService;
        this.chatService = chatService;
        this._dashboardComp = _dashboardComp;
        this.router = router;
        this.message = "";
        this.userInRoom = false;
        this.roomPW = "";
        this.isOwner = false;
        this.arrow = "v";
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("FFFFF");
        this._route.paramMap.subscribe(function (params) {
            var self = _this;
            _this.apiService.getRoomById(params.get('id')).then(function (data) {
                // console.log("GOT ROOM");
                // console.log(data);
                _this.room = data;
                // console.log(this.room);
                _this.checkUserInRoom();
                _this.chatService
                    .getMessage(_this.room.roomId)
                    .subscribe(function (data) {
                    // console.log("GOT IT");
                    self.refreshRoom();
                });
            });
        });
    };
    RoomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    RoomComponent.prototype.scrollToBottom = function () {
        try {
            this.scroller.nativeElement.scrollTop = this.scroller.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    RoomComponent.prototype.refreshRoom = function () {
        var _this = this;
        this.apiService.getRoomById(this.room.roomId).then(function (data) {
            _this.room = data;
            _this.checkUserInRoom();
        });
    };
    RoomComponent.prototype.sendMessage = function () {
        // console.log('SENDING');
        var self = this;
        this.apiService.sendMessage(this.room.roomId, this.message).then(function (data) {
            // console.log('SENT');
            if (data == false)
                console.log("FALSE");
            else
                self.chatService.sendMessage(self.room.roomId);
            self.message = "";
        });
    };
    RoomComponent.prototype.checkUserInRoom = function () {
        var _this = this;
        this.apiService.getCurrentUserInSession().then(function (result) {
            // console.log("RESULT");
            // console.log(result);
            // console.log(this.room._roomMembers);
            // console.log(this.room._owner);
            _this.userInRoom = false;
            for (var i = 0; i < _this.room._roomMembers.length; i++) {
                if (_this.room._roomMembers[i]._id == result._id)
                    _this.userInRoom = true;
            }
            if (_this.room._owner._id == result._id) {
                _this.userInRoom = true;
                _this.isOwner = true;
            }
            // console.log(this.userInRoom);
        });
    };
    RoomComponent.prototype.joinRoom = function () {
        var self = this;
        this.apiService.joinRoom(this.room.roomId, this.roomPW).then(function (result) {
            self.message = "joined the room.";
            self.sendMessage();
            self.refreshRoom();
            self._dashboardComp.getCurrentUserInSession();
        });
    };
    RoomComponent.prototype.leaveRoom = function () {
        var self = this;
        this.apiService.leaveRoom(this.room.roomId).then(function (result) {
            self.message = "left the room.";
            self.sendMessage();
            self.refreshRoom();
            self._dashboardComp.getCurrentUserInSession();
        });
    };
    RoomComponent.prototype.deleteRoom = function () {
        var self = this;
        this.apiService.deleteRoom(this.room.roomId).then(function (result) {
            self._dashboardComp.getCurrentUserInSession();
            self.router.navigate(['/home']);
        });
    };
    RoomComponent.prototype.changeArrow = function () {
        if (this.arrow == "^")
            this.arrow = "v";
        else
            this.arrow = "^";
    };
    return RoomComponent;
}());
__decorate([
    core_1.ViewChild('scroll'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], RoomComponent.prototype, "scroller", void 0);
RoomComponent = __decorate([
    core_1.Component({
        selector: 'app-room',
        template: __webpack_require__("../../../../../src/app/dashboard/room/room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/room/room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _c || Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _d || Object, typeof (_e = typeof dashboard_component_1.DashboardComponent !== "undefined" && dashboard_component_1.DashboardComponent) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], RoomComponent);
exports.RoomComponent = RoomComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-dp{\n    min-width: 250px;\n    padding: 0 14px 14px 0;\n    overflow:hidden;\n    background-color:rgba(255,255,255,.8);\n}\n#login-dp .help-block{\n    font-size:12px    \n}\n#login-dp .bottom{\n    background-color:rgba(255,255,255,.8);\n    border-top:1px solid #ddd;\n    clear:both;\n    padding:14px;\n}\n#login-dp .form-group {\n    margin-bottom: 10px;\n}\nh1{\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size:70pt;\n    color: white;\n    /* color: rgba(255, 255, 255, 0.4); */\n    letter-spacing: 2px;\n    margin: 0px;\n}\n.bigwrapper{\n    -ms-flex-line-pack: center;\n        align-content: center;\n    width: 600px;\n    height:auto;\n    vertical-align: top;\n    \n}\n\n/* background video */\n.header-container{\n    width: 100%;\n    height: 1080px;\n    border-left: none;\n    border-right: none;\n    position: fixed;\n    padding: 20px;\n    background-color: black;\n    margin-bottom: 0;\n    border-radius: 0;\n}\n.video-container{\n    vertical-align: top;\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/squaredot.png) center fixed;\n    /* background: url(/record_player.jpg) no-repeat center center fixed; */\n}\nvideo{\n    position: fixed;\n    z-index: -1;\n    /* opacity: 0.8; */\n    width: 100%;\n    \n}\n\n/* #carousel-box{\n    margin: 200px 0 0 200px;\n    max-width:500px;\n    height:500px;\n    background-color: white;\n    vertical-align: top;\n} */\n\n#myCarousel{\n    padding-top:15px;\n    width: 530px;\n    height: 530px;\n    border: 1px solid #428bca;\n    margin-top:250px;\n}\n\n/* Carousel */\n.img-main-carousel{\n    min-width: 500px;\n}\n\n#myCarousel2{\n    vertical-align: top;\n    position: absolute;\n    top: 0%;\n    left: -20%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    width: 300px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n\n <div style=\"margin-top: 54px; position: fixed;\">\n    <div class=\"bigwrapper\">\n      \n    <div class=\"header-container\">\n      <img src=\"/logo2.png\" style=\"max-height: 100px;\">\n      <div id=\"title\" class=\"col-sm-4 col-sm-offset-1\" style=\"max-width:500px;\">\n        <p style=\"color:white; font-size: 16pt; margin-bottom: 0;\">welcome to </p>\n        <h1>CHATTERBOX </h1>\n        <p style=\"color:white; font-size: 16pt;\">a place to chat about music</p>\n      </div>\n      <div class=\"video-container\">\n        <video preload=\"true\" autoplay=\"autoplay\" loop=\"loop\" volume=\"0\" poster=\"/record_player.jpg\">\n          <source src=\"/record_player.mp4\" type=\"video/mp4\">\n          <source src=\"/record_player.webm\" type=\"video/webm\">\n          <source src=\"/record_player.ogv\" type=\"video/ogg\">\n        </video>\n      </div>\n    </div>\n  </div>\n\n\n    <!-- carousel box -->\n    <!-- <div id=\"carousel-box\" class=\"pad-section\">\n      <div class=\"container\">\n      <div class=\"row\"> -->\n      <div id=\"myCarousel\" class=\"carousel slide\" class=\"col-sm-4 col-sm-offset-2\" style=\"min-width:500px;\">\n        <carousel class=\"text-center\">\n\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-Alicia-Keys-03.jpg\" alt=\"Second slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Alicia Keys</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-Blake-shelton-01.jpg\" alt=\"Third slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Blake Shelton</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-Selena-Gomez-01.jpg\" alt=\"Fourth slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Selena Gomez</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-Rhianna-01.jpg\" alt=\"Fifth slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Rhianna</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-Lady-Gaga-01.jpg\" alt=\"Six slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Lady Gaga</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-bruno-mars-01.jpg\" alt=\"First slide\">\n            <!-- <div class=\"carousel-caption\">\n              <h4>Taylor Swift</h4>\n            </div> -->\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-justin-bieber-01.jpg\" alt=\"Seven slide\">\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-John-Legend-01.jpg\" alt=\"Eight slide\">\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-IZ-01.jpg\" alt=\"Nine slide\">\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-celine-dion-01.jpg\" alt=\"Ten slide\">\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-classical-01.jpg\" alt=\"Eleven slide\">\n          </slide>\n          <slide>\n            <img class=\"img-main-carousel\" src=\"/album/500-taylor-swift-01.jpg\" alt=\"Twelve slide\">\n          </slide>\n        </carousel>\n\n\n      <!-- </div>\n      </div>\n      </div> -->\n    </div>\n\n </div>\n\n  <!-- background video -->\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/last-fm-api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LastFmApiService = (function () {
    function LastFmApiService(_http) {
        this._http = _http;
    }
    LastFmApiService.prototype.searchTrack = function (searchVal) {
        // console.log('calling last fm api to search tracks by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.searchAlbum = function (searchVal) {
        // console.log('calling last fm api to search albus by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.searchArtist = function (searchVal) {
        // console.log('calling last fm api to search artist by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getTopArtist = function () {
        // console.log('calling last fm api to get current top artisst');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getTopTracks = function () {
        // console.log('calling last fm api to get current top tracks');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getAuthSession = function (token, sig) {
        // console.log('calling last fm api to get current top tracks');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=' + token + '&api_key=c595e718d23c51ef68c0d547f1511fe7&api_sig=' + sig + '&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return LastFmApiService;
}());
LastFmApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], LastFmApiService);
exports.LastFmApiService = LastFmApiService;
var _a;
//# sourceMappingURL=last-fm-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap{\n    position: absolute;\n    top: 60px;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/bg2.jpg) no-repeat center center fixed;\n}\nh3{\n    color: #CECECE;\n}\n\n#loginform{\n    width: 350px;\n    /* height: 600px; */\n    /* margin-left:550px; */\n    /* background-color:rgba(255,255,255,.3); */\n    padding:25px;\n    vertical-align: top;\n    border: 1px solid #428bca;\n    margin-top: 100px;\n}\n.login1{\n    color: #CECECE;\n}\n.login1a{\n    width: 100%;\n}\n.login1b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n\n.login2{\n    margin-top: 20px;\n    color: #CECECE;\n}\n.login2a{\n    width: 100%;\n}\n.login2b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.loginbtn{\n    margin-top: 15px;\n    background-color: #428bca;\n    width:100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  \n  \n    <div class=\"header\">\n    <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n      <div class=\"container-fluid\">\n  \n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n        </div>\n  \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n            <li><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    </div>\n\n<div class=\"wrap\" style=\"background-size: cover;\">\n<div class=\"container-fluid\" id=\"loginform\" class=\"col-sm-4 col-sm-offset-5\">\n  <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n        <!-- <div class=\"col-sm-12 col-md-12 col-lg-11\"> -->\n        <section class=\"col-sm-12 align-right\" style=\"margin-top: 20px;\">\n       \n          <h3>Login</h3>\n          <div style=\"color: red;\" *ngIf=\"incorrectLogin\">\n            <p class=\"login1b\">** Invalid Login Credentials. Please try again **</p> \n          </div>\n\n          <div class=\"container-fluid\"></div>\n          <form id=\"\" (submit)=\"loginUser(); form.reset()\" #form=\"ngForm\">\n\n              <label for=\"username\" class=\"login1\">Username: </label>\n              <input class=\"login1a\" type=\"text\" name=\"username\" required [(ngModel)] = \"user.username\" #username=\"ngModel\"/>\n              <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n                <p class=\"login1b\" *ngIf=\"username.errors.required\">** Username is Required **</p> \n              </div>\n            <p>\n              <label for=\"password\" class=\"login2\">Password: </label>\n              <input class=\"login2a\" type=\"password\" name=\"password\" required [(ngModel)] = \"user.password\" #password=\"ngModel\" />\n            </p>\n              <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n                <p class=\"login2b\" *ngIf=\"password.errors.required\">** Password is Required **</p> \n              </div>\n            <input class=\"loginbtn\" type=\"submit\" value=\"Login\" [disabled] = \"password.invalid || username.invalid\" />\n          </form>\n        </section>\n      <!-- </div> -->\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LoginComponent = (function () {
    // currentUser;
    function LoginComponent(_apicallService, _router, _appComponent, _chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this._chatService = _chatService;
        this.user = new user_1.User();
        this.incorrectLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._apicallService.loginUser(this.user)
            .then(function (data) {
            if (!data) {
                _this.incorrectLogin = true;
                _this.user = new user_1.User();
            }
            else {
                _this.incorrectLogin = false;
                _this._appComponent.getCurrentUserInSession();
                _this.getCurrentUserInSession();
                // console.log(this.currentUser);
                _this._router.navigate(['home', 'main']);
                // }
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
                _this.emitLoginEvent(_this.currentUser);
            }
            else {
            }
        })
            .catch(function (error) {
            // console.log(error);
        });
    };
    LoginComponent.prototype.emitLoginEvent = function (friendsData) {
        // console.log('emitLoginEvent');
        this._chatService.loginEvent(friendsData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _c || Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _d || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LogoutComponent = (function () {
    function LogoutComponent(_apicallService, _router, _appComponent, _chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this._chatService = _chatService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.loggingOut();
    };
    LogoutComponent.prototype.loggingOut = function () {
        var _this = this;
        this._apicallService.logoutUser()
            .then(function (data) {
            // console.log('success logging user out refreshing user session');
            _this.emitLogoutEvent(data);
            _this._appComponent.refreshUserSession();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            _this._router.navigate(['']);
        });
    };
    // getCurrentUserInSession() {
    //   this._apicallService.getCurrentUserInSession()
    //     .then((data) => {
    //       // console.log(data);
    //       if (data) {
    //         console.log('success getting current user emitting logout event');
    //         this.currentUser = data;
    //         this.emitLogoutEvent(this.currentUser);
    //       } else {
    //         console.log('user not in session');
    //       }
    //     })
    //     .catch((error) => {
    //       // console.log('error getting current user');
    //       console.log(error);
    //     });
    // }
    LogoutComponent.prototype.emitLogoutEvent = function (currentUser) {
        // console.log('Client Emitting Logout Event');
        this._chatService.logoutEvent(currentUser);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _c || Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _d || Object])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/comment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Comment = (function () {
    function Comment(commentId, content, owner, sender, _comments, _message, created_at, updated_at) {
        if (commentId === void 0) { commentId = null; }
        if (content === void 0) { content = ''; }
        if (owner === void 0) { owner = ''; }
        if (sender === void 0) { sender = ''; }
        if (_comments === void 0) { _comments = []; }
        if (_message === void 0) { _message = ''; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.commentId = commentId;
        this.content = content;
        this.owner = owner;
        this.sender = sender;
        this._comments = _comments;
        this._message = _message;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(messageId, content, likes, _owner, _sender, comments, created_at, updated_at) {
        if (messageId === void 0) { messageId = null; }
        if (content === void 0) { content = ''; }
        if (likes === void 0) { likes = 0; }
        if (_owner === void 0) { _owner = ''; }
        if (_sender === void 0) { _sender = ''; }
        if (comments === void 0) { comments = []; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.messageId = messageId;
        this.content = content;
        this.likes = likes;
        this._owner = _owner;
        this._sender = _sender;
        this.comments = comments;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/models/room.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Room = (function () {
    function Room(title, description, isPublic, password) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (isPublic === void 0) { isPublic = ''; }
        if (password === void 0) { password = ''; }
        this.title = title;
        this.description = description;
        this.isPublic = isPublic;
        this.password = password;
    }
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=room.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(_id, userId, username, email, firstName, lastName, password, description, profileImageUrl, isLoggedIn, onlineFriends, favoriteSongs, joinedRooms, ownedRooms, friends, received_invites, sent_invites, created_at, updated_at) {
        if (_id === void 0) { _id = null; }
        if (userId === void 0) { userId = null; }
        if (username === void 0) { username = ''; }
        if (email === void 0) { email = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (password === void 0) { password = ''; }
        if (description === void 0) { description = ''; }
        if (profileImageUrl === void 0) { profileImageUrl = ''; }
        if (isLoggedIn === void 0) { isLoggedIn = false; }
        if (onlineFriends === void 0) { onlineFriends = []; }
        if (favoriteSongs === void 0) { favoriteSongs = []; }
        if (joinedRooms === void 0) { joinedRooms = []; }
        if (ownedRooms === void 0) { ownedRooms = []; }
        if (friends === void 0) { friends = []; }
        if (received_invites === void 0) { received_invites = []; }
        if (sent_invites === void 0) { sent_invites = []; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this._id = _id;
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.description = description;
        this.profileImageUrl = profileImageUrl;
        this.isLoggedIn = isLoggedIn;
        this.onlineFriends = onlineFriends;
        this.favoriteSongs = favoriteSongs;
        this.joinedRooms = joinedRooms;
        this.ownedRooms = ownedRooms;
        this.friends = friends;
        this.received_invites = received_invites;
        this.sent_invites = sent_invites;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);

// module
exports.push([module.i, "/*panel heading*/\nh1 {\n    text-align:center;\n    font-size: 28px;\n}\n/*panel align center*/\n.col-centered{\n    float: none;\n    margin: 0 auto;\n    padding-top:5px;\n}\n/*property for the bootstrap panel*/\n.panel  {\n/*-webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);\n-moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);\nbox-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);*/\n}\n\n.panel-default > .panel-heading {\n  color: #000 !important;\n  height:80px;\n}\n\n/*property for the HTML input placeholder*/\ninput:focus::-webkit-input-placeholder { color:transparent; }\ninput:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\ninput:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\n\n/*property for reset button*/\nbutton[type=\"reset\"]    {\n    background-color:transparent;\n    border:1px solid black;\n}\n\n/*Glyphicon color*/\n.blue   {\n    color: #80bfff;\n}\n\n#newroomform{\n    width: 350px;\n    /* height: 600px; */\n    /* margin-left:550px; */\n    /* background-color:rgba(255,255,255,.3); */\n    padding:25px;\n    vertical-align: top;\n    border: 1px solid #428bca;\n\n}\n\n\n.newroom1a{\n    width: 100%;\n}\n\n.newroom2{\n    margin-top: 20px;\n    \n}\n.newroom2a{\n    width: 100%;\n}\n.newroom3a{\n    width: 100%;\n}\n.newroom4a{\n    width: 100%;\n}\n\n.newroombtn{\n    margin-top: 15px;\n    background-color: #428bca;\n    width:100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form (submit)=\"createRoom()\">\n  <div><label>Title: </label><input [(ngModel)] = \"room.title\" type=\"text\" name='roomtitle'></div>\n  <div>\n      <label>Privacy:</label>\n      <select name=\"public\" id=\"\" [(ngModel)]=\"room.isPublic\">\n          <option selected value=\"true\">Public</option>\n          <option value=\"false\">Private</option>\n      </select>\n  </div>\n  <div><label>Password: </label><input type=\"text\" [disabled]=\"room.isPublic == 'true'\" name=\"pw\" [(ngModel)]=\"room.password\"></div>\n  <div><label>Description: </label><input [(ngModel)]=\"room.description\" type=\"text\" name='description'></div>\n  <div><input type=\"submit\" value=\"Create Room\"></div>\n</form>-->\n\n    <div class=\"col-sm-6 col-centered\">\n        <div class=\"panel panel-default\">\n            <!--<div class=\"panel-heading\" >\n                <h1>Edit Personal Details</h1>\n            </div>-->\n      <form (submit)=\"createRoom()\">\n        <div class=\"panel-body\">\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope blue\"></i></span>\n                    <input [(ngModel)] = \"room.title\" type=\"text\" name='roomtitle' placeholder=\"Title\" class=\"form-control\" />\n                </div>\n            </div>\n\n                      <label for=\"privacy\">Privacy</label>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <select name=\"public\" id=\"privacy\" [(ngModel)]=\"room.isPublic\" class=\"form-control\">\n                        <option selected value=\"true\">Public</option>\n                        <option value=\"false\">Private</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <input type=\"text\" [disabled]=\"room.isPublic == 'true'\" name=\"pw\" [(ngModel)]=\"room.password\" placeholder=\"Password\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment blue\"></i></span>\n                    <textarea \n                      name=\"description\"\n                      placeholder=\"Description(optional)\"\n                      rows=\"6\" \n                      class=\"form-control\" \n                      [(ngModel)]=\"room.description\"\n                      #description='ngModel'\n                      type=\"text\" ></textarea>\n                </div>\n            </div>\n            <div class=\"\">\n            <input type=\"submit\" class=\"btn btn-success pull-right\" />\n            </div>\n        </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var room_1 = __webpack_require__("../../../../../src/app/models/room.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var NewRoomComponent = (function () {
    function NewRoomComponent(_apicallService, dashComp) {
        this._apicallService = _apicallService;
        this.dashComp = dashComp;
        this.room = new room_1.Room();
    }
    NewRoomComponent.prototype.ngOnInit = function () {
    };
    NewRoomComponent.prototype.createRoom = function () {
        var self = this;
        // console.log("ROOM");
        // console.log(this.room);
        this._apicallService.createRoom(this.room).then(function (data) {
            // console.log("ROOM CREATION");
            // console.log(data);
            self.dashComp.getCurrentUserInSession();
        });
        this.room = new room_1.Room();
    };
    return NewRoomComponent;
}());
NewRoomComponent = __decorate([
    core_1.Component({
        selector: 'app-new-room',
        template: __webpack_require__("../../../../../src/app/new-room/new-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-room/new-room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof dashboard_component_1.DashboardComponent !== "undefined" && dashboard_component_1.DashboardComponent) === "function" && _b || Object])
], NewRoomComponent);
exports.NewRoomComponent = NewRoomComponent;
var _a, _b;
//# sourceMappingURL=new-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n\n\n\n\n\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    background-color: #f0f3f5;\n    margin-top:40px;\n}\n/*==============================*/\n/*====== siderbar user profile =====*/\n/*==============================*/\n.nav>li>a.userdd {\n    padding: 5px 15px\n}\n.userprofile {\n    width: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin: 40px auto\n}\n.userprofile .userpic {\n\theight: 100px;\n\twidth: 100px;\n\tclear: both;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative; \n}\n.userprofile .userpic .userpicimg {\n\theight: auto;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.username {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tline-height: 20px;\n\tcolor: #000000;\n\tmargin-top: 20px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tline-height: 15px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n.settingbtn {\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0px;\n\tright: 0px;\n\tline-height: 30px;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: 0;\n\tbox-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n}\n.userprofile.small {\n\twidth: auto;\n\tclear: both;\n\tmargin: 0px auto;\n}\n.userprofile.small .userpic {\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 0 10px 0 0;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative;\n\tfloat: left;\n}\n.userprofile.small .textcontainer {\n\tfloat: left;\n\tmax-width: 100px;\n\tpadding: 0\n}\n.userprofile.small .userpic .userpicimg {\n\tmin-height: 100%;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.userprofile.small .username {\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 21px;\n\tcolor: #000000;\n\tmargin: 0px;\n\tfloat: left;\n\twidth: 100%;\n}\n.userprofile.small .username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tfloat: left;\n\twidth: 100%;\n\tmargin: 0;\n}\n/*==============================*/\n/*====== Social Profile css =====*/\n/*==============================*/\n.countlist h3 {\n\tmargin: 0;\n\tfont-weight: 400;\n\tline-height: 28px;\n}\n.countlist {\n\ttext-transform: uppercase\n}\n.countlist li {\n\tpadding: 15px 30px 15px 0;\n\tfont-size: 14px;\n\ttext-align: left;\n}\n.countlist li small {\n\tfont-size: 12px;\n\tmargin: 0\n}\n.followbtn {\n\tfloat: right;\n\tmargin: 22px;\n}\n.userprofile.social {\n\tbackground: url(http://www.prestigepublicity.com/wp-content/uploads/2013/04/bannerdeco.png) no-repeat top center;\n\tbackground-size: 100%;\n\tpadding: 50px 0;\n\tmargin: 0\n}\n.userprofile.social .username {\n\tcolor: #ffffff\n}\n.userprofile.social .username+p {\n\tcolor: #ffffff;\n\topacity: 0.8\n}\n.postbtn {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 9\n}\n.status-upload {\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 15px\n}\n.posttimeline .panel {\n\tmargin-bottom: 15px\n}\n.commentsblock {\n\tbackground: #f8f9fb;\n}\n.nopaddingbtm {\n\tmargin-bottom: 0\n}\n/*==============================*/\n/*====== Recently connected  heading =====*/\n/*==============================*/\n.memberblock {\n\twidth: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin-bottom: 15px\n}\n.member {\n\twidth: 24%;\n\tfloat: left;\n\tmargin: 2px 1% 2px 0;\n\tbackground: #ffffff;\n\tborder: 1px solid #d8d0c3;\n\tpadding: 3px;\n\tposition: relative;\n\toverflow: hidden\n}\n.memmbername {\n\tposition: absolute;\n\tbottom: -70px;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tcolor: #ffffff;\n\tline-height: 30px;\n\tpadding: 0 5px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 100%;\n\tfont-size: 11px;\n\ttransition: 0.5s ease all;\n}\n.member:hover .memmbername {\n\tbottom: 0\n}\n\n\n.member img {\n\twidth: 100%;\n\ttransition: 0.5s ease all;\n}\n.member:hover img {\n\topacity: 0.8;\n\t-webkit-transform: scale(1.2);\n\t        transform: scale(1.2)\n}\n\n.panel-default>.panel-heading {\n    color: #607D8B;\n    background-color: #ffffff;\n    font-weight: 400;\n    font-size: 15px;\n    border-radius: 0;\n    border-color: #e1eaef;\n}\n\n\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n\n.page-header.small {\n    position: relative;\n    line-height: 22px;\n    font-weight: 400;\n    font-size: 20px;\n}\n\n.favorite i {\n    color: #eb3147;\n}\n\n.btn i {\n    font-size: 17px;\n}\n\n.panel {\n    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: all ease 0.5s;\n    -moz-transition: all ease 0.5s;\n    -webkit-transition: all ease 0.5s;\n    -ms-transition: all ease 0.5s;\n    margin-bottom: 35px;\n    border-radius: 0px;\n    position: relative;\n    border: 0;\n    display: inline-block;\n    width: 100%;\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #ffffff;\n    border-top: 1px solid #eef2f4;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    color: #607d8b;\n}\n\n.panel-blue {\n    color: #ffffff;\n    background-color: #03A9F4;\n}\n\n.panel-red.userlist .username, .panel-green.userlist .username, .panel-yellow.userlist .username, .panel-blue.userlist .username {\n    color: #ffffff;\n}\n\n.panel-red.userlist p, .panel-green.userlist p, .panel-yellow.userlist p, .panel-blue.userlist p {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.panel-red.userlist p a, .panel-green.userlist p a, .panel-yellow.userlist p a, .panel-blue.userlist p a {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.progress-bar-success, .status.active, .panel-green, .panel-green > .panel-heading, .btn-success, .fc-event, .badge.green, .event_green {\n    color: white;\n    background-color: #8BC34A;\n}\n\n.progress-bar-warning, .panel-yellow, .status.pending, .panel-yellow > .panel-heading, .btn-warning, .fc-unthemed .fc-today, .badge.yellow, .event_yellow {\n    color: white;\n    background-color: #FFC107;\n}\n\n.progress-bar-danger, .panel-red, .status.inactive, .panel-red > .panel-heading, .btn-danger, .badge.red, .event_red {\n    color: white;\n    background-color: #F44336;\n}\n\n.media-object {\n    max-width: 50px;\n    border-radius: 50px;\n    box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n}\n\n.media:first-child {\n    margin-top: 15px;\n}\n\n.media-object {\n    display: block;\n}\n\n.dotbtn {\n    height: 40px;\n    width: 40px;\n    background: none;\n    border: 0;\n    line-height: 40px;\n    vertical-align: middle;\n    padding: 0;\n    margin-right: -15px;\n}\n\n.dots {\n    height: 4px;\n    width: 4px;\n    position: relative;\n    display: block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    margin: 0 auto;\n}\n\n.dots:after, .dots:before {\n    content: \" \";\n    height: 4px;\n    width: 4px;\n    position: absolute;\n    display: inline-block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    top: -7px;\n    left: 0;\n}\n\n.dots:after {\n    content: \" \";\n    top: auto;\n    bottom: -7px;\n    left: 0;\n}\n\n.photolist img {\n    width: 100%;\n}\n\n.photolist {\n    background: #e1eaef;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.profilegallery .grid-item a {\n    height: 100%;\n    display: block;\n}\n\n.grid a {\n    width: 100%;\n    display: block;\n    float: left;\n}\n\n.media-body {\n    color: #607D8B;\n    overflow: visible;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user && currentUser\">\n<div class=\"row\">\n      <div class=\"col-md-12 text-center \">\n        <div class=\"panel panel-default\">\n          <div class=\"userprofile social \">\n            <div class=\"userpic\" > <img src=\"{{user.profileImageUrl}}\"  alt=\"\" class=\"userpicimg\"> </div>\n            <h3 class=\"username\">{{user.firstName}} {{user.lastName}}</h3>\n            <p>{{user.username}}</p>\n            <div class=\"socials tex-center\"> <a href=\"\" class=\"btn btn-circle btn-primary \">\n            <i class=\"fa fa-facebook\"></i></a> <a href=\"\" class=\"btn btn-circle btn-danger \">\n            <i class=\"fa fa-google-plus\"></i></a> <a href=\"\" class=\"btn btn-circle btn-info \">\n            <i class=\"fa fa-twitter\"></i></a> <a href=\"\" class=\"btn btn-circle btn-warning \"><i class=\"fa fa-envelope\"></i></a>\n            </div>\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <!-- /.col-md-12 -->\n      <div class=\"col-md-4 col-sm-12 pull-right\">\n        <div class=\"panel panel-default\">\n          <div style=\"min-height: 330px;\" class=\"panel-heading\">\n            <h1 class=\"page-header small\">Personal Details</h1>\n              <p>Username: {{user.username}}</p>\n              <p>Email: {{user.email}}</p>\n              <p>First Name: {{user.firstName}}</p>\n              <p>Last Name: {{user.lastName}}</p>\n              <p>Description: {{user.description}}</p>\n            </div>\n\n\n\n          </div>\n\n          <div class=\"col-md-12 photolist\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"col-md-12\">\n            <div class=\"panel-body\">\n            <div class=\"tex-center\"> \n              <button *ngIf=\"!hasReceivedInviteFromCurrentUserId(user.received_invites) && !isFriendOfCurrentUserId(user.friends) && user._id != currentUser._id\" (click)=\"sendFriendRequest(user.userId)\" style=\"border-radius: 24px;\" class=\"btn btn-link \">\n                Send Friend Request\n              </button> \n              <p *ngIf=\"hasReceivedInviteFromCurrentUserId(user.received_invites)\">Friend Request Sent</p>\n              <p *ngIf=\"isFriendOfCurrentUserId(user.friends)\">This User is your Friend</p>\n            </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Friends</h1>\n            <p class=\"page-subtitle small\"> {{user.friends.length}} friends</p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n              <span *ngFor=\"let friend of user.friends\" class=\"member\">\n                  <button *ngIf=\"!hasReceivedInviteFromCurrentUser(friend.received_invites) && !isFriendOfCurrentUser(friend.friends) && friend._id != currentUser._id\" style=\"display: block; margin-left: -12%; z-index: 1\" class=\"btn btn-link\" (click)=\"sendInvite(friend.userId)\">Friend Request</button>\n                  <a *ngIf=\"friend._id != currentUser._id\" [routerLink]=\"['/home/users', friend.userId]\" > \n                    <img src=\"{{friend.profileImageUrl}}\" alt=\"\">\n                  </a>\n                  <a *ngIf=\"friend._id == currentUser._id\" [routerLink]=\"['/home/profile/current']\" > \n                    <img src=\"{{friend.profileImageUrl}}\" alt=\"\">\n                  </a>\n                  <div class=\"memmbername\">\n                    {{friend.firstName}}\n                  <div style=\"display: block; z-index: 1\" *ngIf=\"hasReceivedInviteFromCurrentUser(friend.received_invites)\">Invite Sent</div>\n                  <div style=\"display: block; z-index: 1\" *ngIf=\"isFriendOfCurrentUser(friend.friends) && friend._id != currentUser._id\">Your Friend</div>\n                  </div>\n              </span> \n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n      </div>\n      </div>\n<!--start here-->\n      \n <div class=\"col-md-8 col-sm-12 pull-left posttimeline\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div *ngIf=\"message\" class=\"status-upload nopaddingbtm\">\n\n              <form (submit)=\"shareMessage()\">\n                <textarea \n                  class=\"form-control\" \n                  name=\"content\"\n                  [(ngModel)]=\"message.content\"\n                  #content = \"ngModel\"\n                  placeholder=\"Write on {{user.firstName}}'s Wall\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Audio\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Video\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Picture\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Share</button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n\n        <div *ngFor=\"let message of userMessages\" class=\"panel panel-default\">\n\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"{{message._sender.profileImageUrl}}\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{message._sender.firstName}} {{message._sender.lastName}}<br>\n                  <small><i class=\"fa fa-clock-o\"></i> {{formatDateTime(message.createdAt)}}</small> </h4>\n                <p>{{message.content}}</p>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a (click)=\"addLike(message._id)\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> {{message.likes}}</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> {{message._comments.length}}</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div *ngFor=\"let comment of message._comments\" class=\"col-md-12 commentsblock border-top\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"{{comment.sender.profileImageUrl}}\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{comment.sender.firstName}} {{comment.sender.lastName}}</h4>\n                <p>{{comment.content}}</p>\n                <!--<div class=\"media\">\n                  <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">Astha Smith</h4>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>-->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 border-top\">\n            <div class=\"status-upload\">\n\n              <form (submit)=\"addComment(message._id, message.newComment)\">\n                <label>Comment</label>\n                <textarea \n                  class=\"form-control\" \n                  name=\"content\"\n                  [(ngModel)] = \"message.newComment.content\"\n                  placeholder=\"Comment here\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Comment</button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <!--until here-->\n    </div>\n</div>\n\n<!---->\n\n\n\n     "

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = __webpack_require__("../../../../../src/app/models/message.ts");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var OtherUserProfileComponent = (function () {
    function OtherUserProfileComponent(_apicallService, _route, _router, chatService) {
        this._apicallService = _apicallService;
        this._route = _route;
        this._router = _router;
        this.chatService = chatService;
        this.message = new message_1.Message();
        this.getCurrentUserInSession();
        this.subscribeToUserIdParams();
    }
    OtherUserProfileComponent.prototype.ngOnInit = function () {
        this.getCurrentUserInSession();
    };
    OtherUserProfileComponent.prototype.subscribeToUserIdParams = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            // console.log('got params id: ' + params.get('id'));
            return _this._apicallService.getUserByUserId(params.get('id'));
        }).subscribe(function (user) {
            _this.user = user;
            // console.log(this.user);
        });
    };
    OtherUserProfileComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            // console.log(data);
            if (data) {
                // console.log('success getting current user');
                _this.currentUser = data;
                _this.getMessages();
            }
            else {
                // console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    OtherUserProfileComponent.prototype.sendInvite = function (userId) {
        var _this = this;
        var user_Id = { userId: userId };
        this._apicallService.sendInviteToUserById(user_Id)
            .then(function (data) {
            // console.log('sucess then response sendInvite');
            // console.log(data);
            _this.subscribeToUserIdParams();
        })
            .catch(function (error) {
            // console.log('error catch response sendInvite');
        });
    };
    OtherUserProfileComponent.prototype.isFriendOfCurrentUser = function (userFriends) {
        var _this = this;
        // console.log(this.currentUser._id);
        // console.log(userFriends);
        var friend = userFriends.find(function (index) {
            return index === _this.currentUser._id;
        });
        // console.log(friend);
        if (friend) {
            return true;
        }
        return false;
    };
    OtherUserProfileComponent.prototype.hasReceivedInviteFromCurrentUser = function (userReceivedInvites) {
        var _this = this;
        // console.log(this.currentUser._id);
        // console.log(userFriends);
        var invite = userReceivedInvites.find(function (index) {
            return index === _this.currentUser._id;
        });
        // console.log(friend);
        if (invite) {
            return true;
        }
        return false;
    };
    OtherUserProfileComponent.prototype.shareMessage = function () {
        var _this = this;
        console.log('sharing message');
        this.message._owner = this.user._id;
        this._apicallService.addMessageToTargetUser(this.message)
            .then(function (data) {
            // console.log('then response shareMessage');
            // console.log(data);
            _this.message = new message_1.Message();
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('catch response shareMessage');
            console.log(error);
        });
    };
    OtherUserProfileComponent.prototype.getMessages = function () {
        var _this = this;
        // console.log('getting current profile messages');
        if (this.user) {
            this._apicallService.getMessagesAndCommentsOfTargetUser(this.user._id)
                .then(function (data) {
                // console.log('Then response getting messages of current user profile');
                _this.userMessages = _this.sortMessages(data);
                _this.populateMessagesWithNewCommentModels(_this.userMessages);
                // console.log(this.userMessages);
            })
                .catch(function (error) {
                // console.log('Error response getting messages of current user profile');
                console.log(error);
            });
        }
    };
    OtherUserProfileComponent.prototype.sortMessages = function (messages) {
        return messages.sort(function (a, b) {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
        });
    };
    OtherUserProfileComponent.prototype.populateMessagesWithNewCommentModels = function (messages) {
        // console.log('populating comments');
        if (messages) {
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                var newComment = new Comment();
                message.newComment = newComment;
            }
        }
    };
    OtherUserProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OtherUserProfileComponent.prototype.formatDateTime = function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    };
    OtherUserProfileComponent.prototype.addLike = function (messageId) {
        var _this = this;
        // console.log('liking');
        var msgData = { messageId: messageId };
        this._apicallService.addLike(msgData)
            .then(function (data) {
            // console.log('then response');
            console.log(data);
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('then response');
            console.log(error);
        });
    };
    OtherUserProfileComponent.prototype.addComment = function (messageId, comment) {
        var _this = this;
        // console.log('adding comment');
        comment._message = messageId;
        comment.owner = this.user._id;
        comment.sender = this.currentUser._id;
        // console.log(comment);
        this._apicallService.addCommentToMessage(comment)
            .then(function (data) {
            // console.log('then response addComment');
            // console.log(data);
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('error response addComment');
            console.log(error);
        });
    };
    OtherUserProfileComponent.prototype.sendFriendRequest = function (userId) {
        var _this = this;
        // console.log('sendFriendRequest');
        var user_Id = { userId: userId };
        this._apicallService.sendInviteToUserById(user_Id)
            .then(function (data) {
            // console.log('sucess then response sendInvite');
            // console.log(data);
            _this.getCurrentUserInSession();
            _this.subscribeToUserIdParams();
        })
            .catch(function (error) {
            // console.log('error catch response sendInvite');
            console.log(error);
        });
    };
    OtherUserProfileComponent.prototype.isFriendOfCurrentUserId = function (userFriends) {
        var _this = this;
        // console.log(this.currentUser._id);
        // console.log(userFriends);
        var friend = userFriends.find(function (index) {
            return index._id === _this.currentUser._id;
        });
        // console.log(friend);
        if (friend) {
            return true;
        }
        return false;
    };
    OtherUserProfileComponent.prototype.hasReceivedInviteFromCurrentUserId = function (userReceivedInvites) {
        var _this = this;
        // console.log(this.currentUser._id);
        // console.log(userFriends);
        var invite = userReceivedInvites.find(function (index) {
            return index._id === _this.currentUser._id;
        });
        // console.log(friend);
        if (invite) {
            return true;
        }
        return false;
    };
    return OtherUserProfileComponent;
}());
OtherUserProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-other-user-profile',
        template: __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _d || Object])
], OtherUserProfileComponent);
exports.OtherUserProfileComponent = OtherUserProfileComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=other-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/current-profile/current-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/current-profile/current-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\n  <p class=\"btn btn-link\" style=\"margin-left: -13px;\"><a [routerLink]=\"['/home/profile/edit']\">Edit Profile</a></p>\n  \n  <p>Username: {{currentUser.username}}</p>\n  <p>Email: {{currentUser.email}}</p>\n  <p>First Name: {{currentUser.firstName}}</p>\n  <p>Last Name: {{currentUser.lastName}}</p>\n  <p>Description: {{currentUser.description}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/current-profile/current-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CurrentProfileComponent = (function () {
    function CurrentProfileComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.getCurrentUserInSession();
    }
    CurrentProfileComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            // console.log(data);
            if (data) {
                // console.log('success getting current user');
                _this.currentUser = data;
                // console.log(this.currentUser);
            }
            else {
                // console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            // console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    CurrentProfileComponent.prototype.ngOnInit = function () {
    };
    return CurrentProfileComponent;
}());
CurrentProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-current-profile',
        template: __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], CurrentProfileComponent);
exports.CurrentProfileComponent = CurrentProfileComponent;
var _a, _b;
//# sourceMappingURL=current-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);

// module
exports.push([module.i, "/*panel heading*/\nh1 {\n    text-align:center;\n    font-size: 28px;\n}\n/*panel align center*/\n.col-centered{\n    float: none;\n    margin: 0 auto;\n    padding-top:5px;\n}\n/*property for the bootstrap panel*/\n.panel  {\nbox-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);\n}\n\n.panel-default > .panel-heading {\n  color: #000 !important;\n  height:80px;\n}\n\n/*property for the HTML input placeholder*/\ninput:focus::-webkit-input-placeholder { color:transparent; }\ninput:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\ninput:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\n\n/*property for reset button*/\nbutton[type=\"reset\"]    {\n    background-color:transparent;\n    border:1px solid black;\n}\n\n/*Glyphicon color*/\n.blue   {\n    color: #80bfff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"currentUser\" class=\"row\">\n    <div class=\"col-sm-12 col-centered\">\n        <div class=\"panel panel-default\">\n            <!--<div class=\"panel-heading\" >\n                <h1>Edit Personal Details</h1>\n            </div>-->\n      <form (submit)=\"editCurrentUser()\">\n        <div class=\"panel-body\">\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope blue\"></i></span>\n                    <input type=\"text\" \n                            name=\"email\" \n                            required \n                            pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n                            [(ngModel)]=\"currentUser.email\"\n                            #email='ngModel'\n                            placeholder=\"Email\" class=\"form-control\" \n                    />\n                </div>\n                    <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                    <p *ngIf=\"email.errors.required\">Email is Required</p> \n                    <p *ngIf=\"email.errors.pattern\">Please enter a valid email</p> \n                  </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <input \n                      type=\"text\" \n                      name=\"firstName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"currentUser.firstName\"\n                      #firstName='ngModel' \n                      placeholder=\"First Name\" \n                      class=\"form-control\">\n                </div>\n                  <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n                  <p *ngIf=\"firstName.errors.required\">First Name is Required</p> \n                  <p *ngIf=\"firstName.errors.minlength\">First Name must be at least 2 characters long</p> \n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <input \n                      type=\"text\" \n                      name=\"lastName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"currentUser.lastName\"\n                      #lastName='ngModel'\n                      placeholder=\"Last Name\" \n                      class=\"form-control\">\n                </div>\n                  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n                    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n                    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n                  </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment blue\"></i></span>\n                    <textarea \n                      name=\"description\"\n                      placeholder=\"Description(optional)\"\n                      rows=\"4\" \n                      class=\"form-control\" \n                      [(ngModel)]=\"currentUser.description\"\n                      #description='ngModel'\n                      type=\"text\" ></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-picture blue\"></i></span>\n                    <input \n                      name=\"profileImageUrl\"\n                      placeholder=\"Profile Image(optional)\"\n                      class=\"form-control\" \n                      [(ngModel)]=\"currentUser.profileImageUrl\"\n                      #profileImageUrl='ngModel'\n                      type=\"text\" />\n                </div>\n            </div>\n            <div class=\"\">\n            <input type=\"submit\" class=\"btn btn-success pull-right\" [disabled] = \"lastName.invalid || firstName.invalid || email.invalid\" />\n            </div>\n        </div>\n        </form>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var EditProfileComponent = (function () {
    function EditProfileComponent(_apicallService, _router, _searchService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._searchService = _searchService;
        this.getCurrentUserInSession();
    }
    EditProfileComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            // console.log(data);
            if (data) {
                // console.log('success getting current user');
                _this.currentUser = data;
                // console.log(this.currentUser);
            }
            else {
                // console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            // console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    EditProfileComponent.prototype.editCurrentUser = function () {
        var _this = this;
        // console.log('controller updating current user information');
        this._apicallService.editCurrentUser(this.currentUser)
            .then(function (data) {
            // console.log('then response to update current user');
            _this._searchService.editUserEvent('it happened');
            _this._router.navigate(['/home/profile/current']);
        })
            .catch(function (error) {
            console.log('then response to update current user');
            console.log(error);
        });
    };
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    return EditProfileComponent;
}());
EditProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-profile',
        template: __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object])
], EditProfileComponent);
exports.EditProfileComponent = EditProfileComponent;
var _a, _b, _c;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n\n\n\n\n\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    background-color: #f0f3f5;\n    margin-top:40px;\n}\n/*==============================*/\n/*====== siderbar user profile =====*/\n/*==============================*/\n.nav>li>a.userdd {\n    padding: 5px 15px\n}\n.userprofile {\n    width: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin: 40px auto\n}\n.userprofile .userpic {\n\theight: 100px;\n\twidth: 100px;\n\tclear: both;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative; \n}\n.userprofile .userpic .userpicimg {\n\theight: auto;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.username {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tline-height: 20px;\n\tcolor: #000000;\n\tmargin-top: 20px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tline-height: 15px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n.settingbtn {\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0px;\n\tright: 0px;\n\tline-height: 30px;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: 0;\n\tbox-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n}\n.userprofile.small {\n\twidth: auto;\n\tclear: both;\n\tmargin: 0px auto;\n}\n.userprofile.small .userpic {\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 0 10px 0 0;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative;\n\tfloat: left;\n}\n.userprofile.small .textcontainer {\n\tfloat: left;\n\tmax-width: 100px;\n\tpadding: 0\n}\n.userprofile.small .userpic .userpicimg {\n\tmin-height: 100%;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.userprofile.small .username {\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 21px;\n\tcolor: #000000;\n\tmargin: 0px;\n\tfloat: left;\n\twidth: 100%;\n}\n.userprofile.small .username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tfloat: left;\n\twidth: 100%;\n\tmargin: 0;\n}\n/*==============================*/\n/*====== Social Profile css =====*/\n/*==============================*/\n.countlist h3 {\n\tmargin: 0;\n\tfont-weight: 400;\n\tline-height: 28px;\n}\n.countlist {\n\ttext-transform: uppercase\n}\n.countlist li {\n\tpadding: 15px 30px 15px 0;\n\tfont-size: 14px;\n\ttext-align: left;\n}\n.countlist li small {\n\tfont-size: 12px;\n\tmargin: 0\n}\n.followbtn {\n\tfloat: right;\n\tmargin: 22px;\n}\n.userprofile.social {\n\tbackground: url(http://www.prestigepublicity.com/wp-content/uploads/2013/04/bannerdeco.png) no-repeat top center;\n\tbackground-size: 100%;\n\tpadding: 50px 0;\n\tmargin: 0\n}\n.userprofile.social .username {\n\tcolor: #ffffff\n}\n.userprofile.social .username+p {\n\tcolor: #ffffff;\n\topacity: 0.8\n}\n.postbtn {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 9\n}\n.status-upload {\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 15px\n}\n.posttimeline .panel {\n\tmargin-bottom: 15px\n}\n.commentsblock {\n\tbackground: #f8f9fb;\n}\n.nopaddingbtm {\n\tmargin-bottom: 0\n}\n/*==============================*/\n/*====== Recently connected  heading =====*/\n/*==============================*/\n.memberblock {\n\twidth: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin-bottom: 15px\n}\n.member {\n\twidth: 24%;\n\tfloat: left;\n\tmargin: 2px 1% 2px 0;\n\tbackground: #ffffff;\n\tborder: 1px solid #d8d0c3;\n\tpadding: 3px;\n\tposition: relative;\n\toverflow: hidden\n}\n.memmbername {\n\tposition: absolute;\n\tbottom: -30px;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tcolor: #ffffff;\n\tline-height: 30px;\n\tpadding: 0 5px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 100%;\n\tfont-size: 11px;\n\ttransition: 0.5s ease all;\n}\n.member:hover .memmbername {\n\tbottom: 0\n}\n.member img {\n\twidth: 100%;\n\ttransition: 0.5s ease all;\n}\n.member:hover img {\n\topacity: 0.8;\n\t-webkit-transform: scale(1.2);\n\t        transform: scale(1.2)\n}\n\n.panel-default>.panel-heading {\n    color: #607D8B;\n    background-color: #ffffff;\n    font-weight: 400;\n    font-size: 15px;\n    border-radius: 0;\n    border-color: #e1eaef;\n}\n\n\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n\n.page-header.small {\n    position: relative;\n    line-height: 22px;\n    font-weight: 400;\n    font-size: 20px;\n}\n\n.favorite i {\n    color: #eb3147;\n}\n\n.btn i {\n    font-size: 17px;\n}\n\n.panel {\n    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: all ease 0.5s;\n    -moz-transition: all ease 0.5s;\n    -webkit-transition: all ease 0.5s;\n    -ms-transition: all ease 0.5s;\n    margin-bottom: 35px;\n    border-radius: 0px;\n    position: relative;\n    border: 0;\n    display: inline-block;\n    width: 100%;\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #ffffff;\n    border-top: 1px solid #eef2f4;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    color: #607d8b;\n}\n\n.panel-blue {\n    color: #ffffff;\n    background-color: #03A9F4;\n}\n\n.panel-red.userlist .username, .panel-green.userlist .username, .panel-yellow.userlist .username, .panel-blue.userlist .username {\n    color: #ffffff;\n}\n\n.panel-red.userlist p, .panel-green.userlist p, .panel-yellow.userlist p, .panel-blue.userlist p {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.panel-red.userlist p a, .panel-green.userlist p a, .panel-yellow.userlist p a, .panel-blue.userlist p a {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.progress-bar-success, .status.active, .panel-green, .panel-green > .panel-heading, .btn-success, .fc-event, .badge.green, .event_green {\n    color: white;\n    background-color: #8BC34A;\n}\n\n.progress-bar-warning, .panel-yellow, .status.pending, .panel-yellow > .panel-heading, .btn-warning, .fc-unthemed .fc-today, .badge.yellow, .event_yellow {\n    color: white;\n    background-color: #FFC107;\n}\n\n.progress-bar-danger, .panel-red, .status.inactive, .panel-red > .panel-heading, .btn-danger, .badge.red, .event_red {\n    color: white;\n    background-color: #F44336;\n}\n\n.media-object {\n    max-width: 50px;\n    border-radius: 50px;\n    box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n}\n\n.media:first-child {\n    margin-top: 15px;\n}\n\n.media-object {\n    display: block;\n}\n\n.dotbtn {\n    height: 40px;\n    width: 40px;\n    background: none;\n    border: 0;\n    line-height: 40px;\n    vertical-align: middle;\n    padding: 0;\n    margin-right: -15px;\n}\n\n.dots {\n    height: 4px;\n    width: 4px;\n    position: relative;\n    display: block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    margin: 0 auto;\n}\n\n.dots:after, .dots:before {\n    content: \" \";\n    height: 4px;\n    width: 4px;\n    position: absolute;\n    display: inline-block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    top: -7px;\n    left: 0;\n}\n\n.dots:after {\n    content: \" \";\n    top: auto;\n    bottom: -7px;\n    left: 0;\n}\n\n.photolist img {\n    width: 100%;\n}\n\n.photolist {\n    background: #e1eaef;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.profilegallery .grid-item a {\n    height: 100%;\n    display: block;\n}\n\n.grid a {\n    width: 100%;\n    display: block;\n    float: left;\n}\n\n.media-body {\n    color: #607D8B;\n    overflow: visible;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\n<div class=\"row\">\n      <div class=\"col-md-12 text-center \">\n        <div class=\"panel panel-default\">\n          <div class=\"userprofile social \">\n            <div class=\"userpic\" > <img src=\"{{currentUser.profileImageUrl}}\"  alt=\"\" class=\"userpicimg\"> </div>\n            <h3 class=\"username\">{{currentUser.firstName}} {{currentUser.lastName}}</h3>\n            <p>{{currentUser.username}}</p>\n            <div class=\"socials tex-center\"> <a href=\"\" class=\"btn btn-circle btn-primary \">\n            <i class=\"fa fa-facebook\"></i></a> <a href=\"\" class=\"btn btn-circle btn-danger \">\n            <i class=\"fa fa-google-plus\"></i></a> <a href=\"\" class=\"btn btn-circle btn-info \">\n            <i class=\"fa fa-twitter\"></i></a> <a href=\"\" class=\"btn btn-circle btn-warning \"><i class=\"fa fa-envelope\"></i></a>\n            </div>\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <!-- /.col-md-12 -->\n      <div class=\"col-md-4 col-sm-12 pull-right\">\n        <div class=\"panel panel-default\">\n          <div style=\"min-height: 330px;\" class=\"panel-heading\">\n            <h1 class=\"page-header small\">Personal Details</h1>\n            <router-outlet></router-outlet>\n          </div>\n\n          <div class=\"col-md-12 photolist\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"col-md-12\">\n            <div class=\"panel-body\">\n            <div class=\"tex-center\"> \n              <button (click)=\"checkRecentInvites()\" style=\"border-radius: 24px;\" class=\"btn btn-primary \">\n                Received {{currentUser.received_invites.length}} friend invites\n              </button> \n              <button (click)=\"checkSentInvites()\" style=\"border-radius: 24px;\" class=\"btn btn-info \">\n                Sent {{currentUser.sent_invites.length}} friend invites\n              </button> \n              <button (click)=\"disableCheckInvitesMode()\" class=\"btn btn-circle btn-danger \">\n                <i style=\"font-size: 14px;\" class=\"glyphicon glyphicon-remove\"></i>\n              </button> \n            </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div *ngIf=\"isCheckingRecent\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Most Recent Friend Invites</h1>\n          </div>\n          <div class=\"col-md-12\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngIf=\"currentUser.received_invites.length == 0\">You have no friend invites at this time</li>\n              <li *ngFor=\"let invite of currentUser.received_invites\" class=\"list-group-item\">\n                    <button class=\"btn btn-circle btn-success\" (click)=\"acceptInvite(invite._id)\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n                    <button class=\"btn btn-circle btn-danger\" (click)=\"rejectInvite(invite._id)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    <img style=\"height: 40px;\" src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\">\n                    <a [routerLink]=\"['/home/users', invite.userId]\">{{invite.firstName}}</a> wants to be your friend\n              </li>\n            </ul>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div *ngIf=\"isCheckingSent\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Your Sent Invites</h1>\n          </div>\n          <div class=\"col-md-12\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngIf=\"currentUser.sent_invites.length == 0\">You currently have not sent any invites</li>\n              <li *ngFor=\"let invite of currentUser.sent_invites\" class=\"list-group-item\">\n                    You have sent an invite to <img style=\"height: 40px;\" src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\"> <a [routerLink]=\"['/home/users', invite.userId]\">{{invite.firstName}}</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Friends <button class=\"btn btn-link\" (click)=\"setEditMode()\">Edit</button></h1>\n            <p class=\"page-subtitle small\">You have {{currentUser.friends.length}} friends</p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n              <span *ngFor=\"let friend of currentUser.friends\" class=\"member\">\n                <button *ngIf=\"editMode\" style=\"display: block; margin-left: 6%; z-index: 1\" class=\"btn btn-link\" (click)=\"removeFriend(friend._id)\">Remove</button>\n                <a [routerLink]=\"['/home/users', friend.userId]\" > \n                  <img src=\"{{friend.profileImageUrl}}\" alt=\"\">\n                </a>\n                <div class=\"memmbername\">{{friend.username}}</div>\n              </span> \n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n\n      <div class=\"col-md-8 col-sm-12 pull-left posttimeline\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div *ngIf=\"message\" class=\"status-upload nopaddingbtm\">\n\n              <form (submit)=\"shareMessage()\">\n                <textarea \n                  class=\"form-control\" \n                  name=\"content\"\n                  [(ngModel)]=\"message.content\"\n                  #content = \"ngModel\"\n                  placeholder=\"What are you doing right now?\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Audio\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Video\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Picture\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Share</button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n\n        <div *ngFor=\"let message of userMessages\" class=\"panel panel-default\">\n\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"{{currentUser.profileImageUrl}}\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{message._sender.firstName}} {{message._sender.lastName}}<br>\n                  <small><i class=\"fa fa-clock-o\"></i> {{formatDateTime(message.createdAt)}}</small> </h4>\n                <p>{{message.content}}</p>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a (click)=\"addLike(message._id)\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> {{message.likes}}</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> {{message._comments.length}}</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <!--comments block-->\n          <div *ngFor=\"let comment of message._comments\" class=\"col-md-12 commentsblock border-top\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"{{comment.sender.profileImageUrl}}\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{comment.sender.firstName}} {{comment.sender.lastName}}</h4>\n                <p>{{comment.content}}</p>\n                <!--<div class=\"media\">\n                  <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">Astha Smith</h4>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>-->\n              </div>\n            </div>\n            \n\n          </div>\n\n          <div class=\"col-md-12 border-top\">\n            <div class=\"status-upload\">\n\n              <form (submit)=\"addComment(message._id, message.newComment)\">\n                <label>Comment</label>\n                <textarea \n                  class=\"form-control\" \n                  name=\"content\"\n                  [(ngModel)] = \"message.newComment.content\"\n                  placeholder=\"Comment here\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Comment</button>\n              </form>\n\n            </div>\n          </div>\n        <!-- -->\n        </div>\n\n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var comment_1 = __webpack_require__("../../../../../src/app/models/comment.ts");
var message_1 = __webpack_require__("../../../../../src/app/models/message.ts");
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var ProfileComponent = (function () {
    function ProfileComponent(_apicallService, _router, _chatService, _searchService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._chatService = _chatService;
        this._searchService = _searchService;
        this.editMode = false;
        this.isCheckingRecent = false;
        this.isCheckingSent = false;
        this.message = new message_1.Message();
        this.comment = new comment_1.Comment();
        this.getCurrentUserInSession();
        // console.log(this.message.content);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.watchForEditUserEvent();
    };
    ProfileComponent.prototype.watchForEditUserEvent = function () {
        var _this = this;
        this.subscription = this._searchService.editUserEvent$.subscribe(function (search) {
            // console.log('hiiiii');
            // console.log(search);
            _this.getCurrentUserInSession();
        });
    };
    ProfileComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            if (data) {
                _this.currentUser = data;
                _this.getMessages();
            }
            else {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    ProfileComponent.prototype.acceptInvite = function (invite_id) {
        var _this = this;
        var receivedInvites = this.currentUser.received_invites;
        for (var _i = 0, receivedInvites_1 = receivedInvites; _i < receivedInvites_1.length; _i++) {
            var invite = receivedInvites_1[_i];
            if (invite._id === invite_id) {
                var inviteId = { inviteId: invite_id };
                this._apicallService.addFriendAndUpdateReceivedInvite(inviteId)
                    .then(function (data) {
                    _this.getCurrentUserInSession();
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        }
    };
    ProfileComponent.prototype.rejectInvite = function (invite_id) {
        var _this = this;
        var receivedInvites = this.currentUser.received_invites;
        for (var _i = 0, receivedInvites_2 = receivedInvites; _i < receivedInvites_2.length; _i++) {
            var invite = receivedInvites_2[_i];
            if (invite._id === invite_id) {
                var inviteId = { inviteId: invite_id };
                this._apicallService.rejectInvite(inviteId)
                    .then(function (data) {
                    _this.getCurrentUserInSession();
                })
                    .catch(function (error) {
                    // console.log('catch response rejectInvite');
                    console.log(error);
                });
            }
        }
    };
    ProfileComponent.prototype.removeFriend = function (friend_id) {
        var _this = this;
        var friendList = this.currentUser.friends;
        for (var _i = 0, friendList_1 = friendList; _i < friendList_1.length; _i++) {
            var friend = friendList_1[_i];
            if (friend._id === friend_id) {
                var friendId = { friendId: friend_id };
                this._apicallService.removeFriend(friendId)
                    .then(function (data) {
                    _this.getCurrentUserInSession();
                })
                    .catch(function (error) {
                    // console.log('catch response removeFriend');
                    console.log(error);
                });
            }
        }
    };
    ProfileComponent.prototype.setEditMode = function () {
        if (!this.editMode) {
            this.editMode = true;
        }
        else {
            this.editMode = false;
        }
    };
    ProfileComponent.prototype.checkRecentInvites = function () {
        if (!this.isCheckingRecent) {
            this.isCheckingRecent = true;
        }
        if (this.isCheckingSent) {
            this.isCheckingSent = false;
        }
    };
    ProfileComponent.prototype.checkSentInvites = function () {
        if (!this.isCheckingSent) {
            this.isCheckingSent = true;
        }
        if (this.isCheckingRecent) {
            this.isCheckingRecent = false;
        }
    };
    ProfileComponent.prototype.disableCheckInvitesMode = function () {
        if (this.isCheckingRecent || this.isCheckingSent) {
            this.isCheckingRecent = false;
            this.isCheckingSent = false;
        }
    };
    ProfileComponent.prototype.shareMessage = function () {
        var _this = this;
        // console.log('sharing message');
        this.message._owner = this.currentUser._id;
        this._apicallService.addMessageToCurrUser(this.message)
            .then(function (data) {
            // console.log('then response shareMessage');
            // console.log(data);
            _this.message = new message_1.Message();
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('catch response shareMessage');
            console.log(error);
        });
    };
    ProfileComponent.prototype.addComment = function (messageId, comment) {
        var _this = this;
        // console.log('adding comment');
        comment._message = messageId;
        comment.owner = this.currentUser._id;
        comment.sender = this.currentUser._id;
        // console.log(comment);
        this._apicallService.addCommentToMessage(comment)
            .then(function (data) {
            // console.log('then response addComment');
            // console.log(data);
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('error response addComment');
            // console.log(error);
        });
    };
    ProfileComponent.prototype.getMessages = function () {
        var _this = this;
        // console.log('getting current profile messages');
        this._apicallService.getMessagesAndCommentsOfCurrUser()
            .then(function (data) {
            // console.log('Then response getting messages of current user profile');
            _this.userMessages = _this.sortMessages(data);
            _this.populateMessagesWithNewCommentModels(_this.userMessages);
            // console.log(this.userMessages);
        })
            .catch(function (error) {
            // console.log('Error response getting messages of current user profile');
            // console.log(error);
        });
    };
    ProfileComponent.prototype.sortMessages = function (messages) {
        return messages.sort(function (a, b) {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
        });
    };
    // getTime(date?: Date) {
    //     return date != null ? date.getTime() : 0;
    // }
    ProfileComponent.prototype.formatDateTime = function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    };
    ProfileComponent.prototype.addLike = function (messageId) {
        var _this = this;
        // console.log('liking');
        var msgData = { messageId: messageId };
        this._apicallService.addLike(msgData)
            .then(function (data) {
            // console.log('then response');
            // console.log(data);
            _this.getMessages();
        })
            .catch(function (error) {
            // console.log('catch response');
            // console.log(error);
        });
    };
    ProfileComponent.prototype.populateMessagesWithNewCommentModels = function (messages) {
        // console.log('populating comments');
        if (messages) {
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                var newComment = new comment_1.Comment();
                message.newComment = newComment;
            }
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap{\n    position: absolute;\n    top: 60px;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/bg1.jpg) no-repeat center center fixed;\n}\nh3{\n    color: #CECECE;\n}\n\n#regisform{\n    width: 350px;\n    /* height: 600px; */\n    /* margin-left:550px; */\n    /* background-color:rgba(255,255,255,.3); */\n    padding:25px;\n    vertical-align: top;\n    border: 1px solid #428bca;\n    margin-top: 100px;\n}\n.regis0{\n    color: #CECECE;\n}\n\n.regis0a{\n    width: 100%;\n}\n.regis0b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis1{\n    color: #CECECE;\n}\n.regis1a{\n    width: 100%;\n}\n.regis1b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis2{\n    color: #CECECE;\n}\n.regis2a{\n    width: 100%;\n}\n.regis2b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis3{\n    color: #CECECE;\n}\n.regis3a{\n    width: 100%;\n}\n.regis3b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis4{\n    color: #CECECE;\n}\n.regis4a{\n    width: 100%;\n}\n.regis4b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis5{\n    color: #CECECE;\n}\n.regis5a{\n    width: 100%;\n}\n.regis5b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regisbtn{\n    margin-top: 15px;\n    background-color: #428bca;\n    width:100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n  \n  \n    <div class=\"header\">\n    <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n      <div class=\"container-fluid\">\n  \n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n        </div>\n  \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li> -->\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n            <li><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    </div>\n\n\n<div class=\"wrap\">\n<div class=\"container-fluid\" id=\"regisform\" class=\"col-sm-4 col-sm-offset-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-1 col-lg-4\"></div>\n          <!-- <div class=\"col-sm-12 col-md-12 col-lg-11\"> -->\n          <section class=\"col-sm-12 align-right\" style=\"margin-top: 20px;\">\n              <h3>Registration</h3>\n                <div style=\"color: red;\" *ngIf=\"isDuplicate && username\">\n                <p *ngIf=\"username.errors.required\">** Username has already been taken **</p> \n              </div>\n              <form (submit)=\"registerUser(); form.reset()\" #form=\"ngForm\" >\n                <p>\n                  <label for=\"username\" class=\"regis0\">Username:  </label>\n                    <input class=\"regis0a\"\n                      type=\"text\" \n                      name=\"username\" \n                      required \n                      minlength=\"5\" \n                      [(ngModel)]=\"user.username\"\n                      #username='ngModel'\n                    />\n                \n                </p>\n              <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n                <p class=\"regis0b\" *ngIf=\"username.errors.required\">** Username is Required **</p> \n                <p class=\"regis0b\" *ngIf=\"username.errors.minlength\">** Username must be at least 5 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"email\" class=\"regis1\">Email:</label>\n                      <input class=\"regis1a\"\n                        type=\"text\" \n                        name=\"email\" \n                        required \n                        pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n                        [(ngModel)]=\"user.email\"\n                        #email='ngModel'\n                      />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                <p class=\"regis1b\" *ngIf=\"email.errors.required\">** Email is Required **</p> \n                <p class=\"regis1b\" *ngIf=\"email.errors.pattern\">** Please enter a valid email **</p> \n              </div>\n                <p>\n                  <label for=\"firstname\" class=\"regis2\">First Name: </label>\n                    <input class=\"regis2a\"\n                      type=\"text\" \n                      name=\"firstName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"user.firstName\"\n                      #firstName='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n                <p class=\"regis2b\" *ngIf=\"firstName.errors.required\">** First Name is Required **</p> \n                <p class=\"regis2b\" *ngIf=\"firstName.errors.minlength\">** First Name must be at least 2 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"lastname\" class=\"regis3\">Last Name: </label>\n                    <input class=\"regis3a\"\n                      type=\"text\" \n                      name=\"lastName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"user.lastName\"\n                      #lastName='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n                <p class=\"regis3b\" *ngIf=\"lastName.errors.required\">** Last Name is Required **</p> \n                <p class=\"regis3b\" *ngIf=\"lastName.errors.minlength\">** Last Name must be at least 2 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"password\" class=\"regis4\">Password: </label>\n                    <input class=\"regis4a\"\n                      type=\"password\" \n                      name=\"password\" \n                      required \n                      minlength=\"8\" \n                      [(ngModel)]=\"user.password\"\n                      #password='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n                <p class=\"regis4b\" *ngIf=\"password.errors.required\">** Password is Required **</p> \n                <p class=\"regis4b\" *ngIf=\"password.errors.minlength\">** Password must be at least 8 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"passwordconfirm\" class=\"regis5\">Password Confirmation:</label>\n                    <input class=\"regis5a\" type=\"password\" name=\"passwordConfirmation\" required [(ngModel)] = \"user.passwordConfirmation\" pattern=\"{{user.password}}\" #passwordConfirmation=\"ngModel\"/>\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!passwordConfirmation.valid && (passwordConfirmation.dirty || passwordConfirmation.touched)\">\n                <p class=\"regis5b\" *ngIf=\"passwordConfirmation.errors.required\">** Password Confirmation is Required **</p> \n                <p class=\"regis5b\" *ngIf=\"passwordConfirmation.errors.pattern\">** Password Confirmation must match with Password **</p> \n              </div>\n                <input class=\"regisbtn\" type=\"submit\" value=\"Register\" [disabled] = \"password.invalid || lastName.invalid || firstName.invalid || passwordConfirmation.invalid || email.invalid || username.invalid\">\n              </form>\n      </section>\n    <!-- </div> -->\n    <div class=\"col-sm-1\"></div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var RegistrationComponent = (function () {
    function RegistrationComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.user = new user_1.User();
        this.isDuplicate = false;
        // console.log('hellooo registrations!!');
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        // console.log('registering User');
        // console.log(this.user);
        this._apicallService.registerAUser(this.user)
            .then(function (data) {
            // console.log(data);
            if (data.code) {
                // console.log(data.code);
                if (data.code === 11000) {
                    // console.log('duplicate data please try again');
                    _this.isDuplicate = true;
                }
                _this.user = new user_1.User();
            }
            else {
                // console.log('success registering user');
                _this.isDuplicate = false;
                _this.user = new user_1.User();
                _this._router.navigate(['/login']);
            }
        })
            .catch(function (error) {
            console.log('error registering user');
            console.log(error);
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-manager.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Search Results</h1>\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-manager.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
__webpack_require__("../../../../rxjs/add/operator/switchMap.js");
var SearchManagerComponent = (function () {
    function SearchManagerComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
    }
    SearchManagerComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            // console.log(data);
            if (data) {
                // console.log('success getting current user');
                _this.currentUser = data;
            }
            else {
                // console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            // console.log('error getting current user');
            // console.log(error);
            _this._router.navigate(['']);
        });
    };
    SearchManagerComponent.prototype.ngOnInit = function () {
    };
    return SearchManagerComponent;
}());
SearchManagerComponent = __decorate([
    core_1.Component({
        selector: 'app-search-manager',
        template: __webpack_require__("../../../../../src/app/search-manager/search-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SearchManagerComponent);
exports.SearchManagerComponent = SearchManagerComponent;
var _a, _b;
//# sourceMappingURL=search-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".music-results {\n    width: 90%;\n}\n\nfieldset {\n    width:70%;\n}\n\n\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n\n\n\n\n\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    background-color: #f0f3f5;\n    margin-top:40px;\n}\n/*==============================*/\n/*====== siderbar user profile =====*/\n/*==============================*/\n.nav>li>a.userdd {\n    padding: 5px 15px\n}\n.userprofile {\n    width: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin: 40px auto\n}\n.userprofile .userpic {\n\theight: 100px;\n\twidth: 100px;\n\tclear: both;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative; \n}\n.userprofile .userpic .userpicimg {\n\theight: auto;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.username {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tline-height: 20px;\n\tcolor: #000000;\n\tmargin-top: 20px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tline-height: 15px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n.settingbtn {\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0px;\n\tright: 0px;\n\tline-height: 30px;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: 0;\n\tbox-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n}\n.userprofile.small {\n\twidth: auto;\n\tclear: both;\n\tmargin: 0px auto;\n}\n.userprofile.small .userpic {\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 0 10px 0 0;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative;\n\tfloat: left;\n}\n.userprofile.small .textcontainer {\n\tfloat: left;\n\tmax-width: 100px;\n\tpadding: 0\n}\n.userprofile.small .userpic .userpicimg {\n\tmin-height: 100%;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.userprofile.small .username {\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 21px;\n\tcolor: #000000;\n\tmargin: 0px;\n\tfloat: left;\n\twidth: 100%;\n}\n.userprofile.small .username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tfloat: left;\n\twidth: 100%;\n\tmargin: 0;\n}\n/*==============================*/\n/*====== Social Profile css =====*/\n/*==============================*/\n.countlist h3 {\n\tmargin: 0;\n\tfont-weight: 400;\n\tline-height: 28px;\n}\n.countlist {\n\ttext-transform: uppercase\n}\n.countlist li {\n\tpadding: 15px 30px 15px 0;\n\tfont-size: 14px;\n\ttext-align: left;\n}\n.countlist li small {\n\tfont-size: 12px;\n\tmargin: 0\n}\n.followbtn {\n\tfloat: right;\n\tmargin: 22px;\n}\n.userprofile.social {\n\tbackground: url(http://www.prestigepublicity.com/wp-content/uploads/2013/04/bannerdeco.png) no-repeat top center;\n\tbackground-size: 100%;\n\tpadding: 50px 0;\n\tmargin: 0\n}\n.userprofile.social .username {\n\tcolor: #ffffff\n}\n.userprofile.social .username+p {\n\tcolor: #ffffff;\n\topacity: 0.8\n}\n.postbtn {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 9\n}\n.status-upload {\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 15px\n}\n.posttimeline .panel {\n\tmargin-bottom: 15px\n}\n.commentsblock {\n\tbackground: #f8f9fb;\n}\n.nopaddingbtm {\n\tmargin-bottom: 0\n}\n/*==============================*/\n/*====== Recently connected  heading =====*/\n/*==============================*/\n.memberblock {\n\twidth: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin-bottom: 15px\n}\n.member {\n\twidth: 24%;\n\tfloat: left;\n\tmargin: 2px 1% 2px 0;\n\tbackground: #ffffff;\n\tborder: 1px solid #d8d0c3;\n\tpadding: 3px;\n\tposition: relative;\n\toverflow: hidden\n}\n.memmbername {\n\tposition: absolute;\n\tbottom: -30px;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tcolor: #ffffff;\n\tline-height: 30px;\n\tpadding: 0 5px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 100%;\n\tfont-size: 11px;\n\ttransition: 0.5s ease all;\n}\n.member:hover .memmbername {\n\tbottom: 0\n}\n.member img {\n\twidth: 100%;\n\ttransition: 0.5s ease all;\n}\n.member:hover img {\n\topacity: 0.8;\n\t-webkit-transform: scale(1.2);\n\t        transform: scale(1.2)\n}\n\n.panel-default>.panel-heading {\n    color: #607D8B;\n    background-color: #ffffff;\n    font-weight: 400;\n    font-size: 15px;\n    border-radius: 0;\n    border-color: #e1eaef;\n}\n\n\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n\n.page-header.small {\n    position: relative;\n    line-height: 22px;\n    font-weight: 400;\n    font-size: 20px;\n}\n\n.favorite i {\n    color: #eb3147;\n}\n\n.btn i {\n    font-size: 17px;\n}\n\n.panel {\n    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: all ease 0.5s;\n    -moz-transition: all ease 0.5s;\n    -webkit-transition: all ease 0.5s;\n    -ms-transition: all ease 0.5s;\n    margin-bottom: 35px;\n    border-radius: 0px;\n    position: relative;\n    border: 0;\n    display: inline-block;\n    width: 100%;\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #ffffff;\n    border-top: 1px solid #eef2f4;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    color: #607d8b;\n}\n\n.panel-blue {\n    color: #ffffff;\n    background-color: #03A9F4;\n}\n\n.panel-red.userlist .username, .panel-green.userlist .username, .panel-yellow.userlist .username, .panel-blue.userlist .username {\n    color: #ffffff;\n}\n\n.panel-red.userlist p, .panel-green.userlist p, .panel-yellow.userlist p, .panel-blue.userlist p {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.panel-red.userlist p a, .panel-green.userlist p a, .panel-yellow.userlist p a, .panel-blue.userlist p a {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.progress-bar-success, .status.active, .panel-green, .panel-green > .panel-heading, .btn-success, .fc-event, .badge.green, .event_green {\n    color: white;\n    background-color: #8BC34A;\n}\n\n.progress-bar-warning, .panel-yellow, .status.pending, .panel-yellow > .panel-heading, .btn-warning, .fc-unthemed .fc-today, .badge.yellow, .event_yellow {\n    color: white;\n    background-color: #FFC107;\n}\n\n.progress-bar-danger, .panel-red, .status.inactive, .panel-red > .panel-heading, .btn-danger, .badge.red, .event_red {\n    color: white;\n    background-color: #F44336;\n}\n\n.media-object {\n    max-width: 50px;\n    border-radius: 50px;\n    box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n}\n\n.media:first-child {\n    margin-top: 15px;\n}\n\n.media-object {\n    display: block;\n}\n\n.dotbtn {\n    height: 40px;\n    width: 40px;\n    background: none;\n    border: 0;\n    line-height: 40px;\n    vertical-align: middle;\n    padding: 0;\n    margin-right: -15px;\n}\n\n.dots {\n    height: 4px;\n    width: 4px;\n    position: relative;\n    display: block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    margin: 0 auto;\n}\n\n.dots:after, .dots:before {\n    content: \" \";\n    height: 4px;\n    width: 4px;\n    position: absolute;\n    display: inline-block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    top: -7px;\n    left: 0;\n}\n\n.dots:after {\n    content: \" \";\n    top: auto;\n    bottom: -7px;\n    left: 0;\n}\n\n.photolist img {\n    width: 100%;\n}\n\n.photolist {\n    background: #e1eaef;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.profilegallery .grid-item a {\n    height: 100%;\n    display: block;\n}\n\n.grid a {\n    width: 100%;\n    display: block;\n    float: left;\n}\n\n.media-body {\n    color: #607D8B;\n    overflow: visible;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n <div *ngIf=\"trackSearchResults\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\"><span *ngIf=\"!tracks\">Top Ten </span>Tracks</h1>\n            <p *ngIf=\"tracks\" class=\"page-subtitle small\">Found {{tracks['opensearch:totalResults']}} songs based on \"{{prevSearchVal}}\" </p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n              <span *ngFor=\"let track of trackSearchResults\">\n                <span style=\"width:19%;\" *ngIf=\"track.image[2]['#text'] != ''\" class=\"member\">\n                  <a href=\"{{track.url}}\" target=\"_blank\" > \n                    <img src=\"{{track.image[2]['#text']}}\" alt=\"\">\n                  </a>\n                  <div *ngIf=\"!track.artist.name\" class=\"memmbername\">{{track.name}} by {{track.artist}}</div>\n                  <div *ngIf=\"track.artist.name\" class=\"memmbername\">{{track.name}} by {{track.artist.name}}</div>\n                </span> \n                \n                <span style=\"width:19%;\" *ngIf=\"track.image[2]['#text'] == ''\" class=\"member\">\n                  <a href=\"{{track.url}}\" target=\"_blank\" > \n                    <img style=\"margin-top: 33%;\" src=\"http://colonieems.org/wp-content/uploads/2015/05/placeholder.jpg\" alt=\"\">\n                  </a>\n                  <div *ngIf=\"!track.artist.name\" class=\"memmbername\">{{track.name}} by {{track.artist}}</div>\n                  <div *ngIf=\"track.artist.name\" class=\"memmbername\">{{track.name}} by {{track.artist.name}}</div>\n                </span> \n              </span>\n\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n <div *ngIf=\"albumSearchResults\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Albums</h1>\n            <p *ngIf=\"albums\" class=\"page-subtitle small\">Found {{albums['opensearch:totalResults']}} albums based on \"{{prevSearchVal}}\" </p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n            <span *ngFor=\"let album of albumSearchResults\">\n\n              <span style=\"width:19%;\" *ngIf=\"album.image[2]['#text'] != ''\" class=\"member\">\n                <a href=\"{{album.url}}\" target=\"_blank\" > \n                  <img src=\"{{album.image[2]['#text']}}\" alt=\"\">\n                </a>\n                <div class=\"memmbername\">{{album.name}} by {{album.artist}}</div>\n              </span>\n              <span style=\"width:19%; \" *ngIf=\"album.image[2]['#text'] == ''\" class=\"member\">\n                <a href=\"{{album.url}}\" target=\"_blank\" > \n                  <img style=\"margin-top: 33%;\" src=\"http://colonieems.org/wp-content/uploads/2015/05/placeholder.jpg\" alt=\"\">\n                </a>\n                <div class=\"memmbername\">{{album.name}} by {{album.artist}}</div>\n              </span>\n\n            </span>\n\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n <div *ngIf=\"artistSearchResults\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\"><span *ngIf=\"!artists\">Top Ten </span>Artists</h1>\n            <p *ngIf=\"artists\" class=\"page-subtitle small\">Found {{artists['opensearch:totalResults']}} artists based on \"{{prevSearchVal}}\" </p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n\n              <span *ngFor=\"let artist of artistSearchResults\">\n\n                <span style=\"width:19%;\" *ngIf=\"artist.image[2]['#text'] != ''\" class=\"member\">\n                  <a href=\"{{artist.url}}\" target=\"_blank\" > \n                    <img src=\"{{artist.image[2]['#text']}}\" alt=\"\">\n                  </a>\n                  <div class=\"memmbername\">{{artist.name}}</div>\n                </span> \n                <span style=\"width:19%; \" *ngIf=\"artist.image[2]['#text'] == ''\" class=\"member\">\n                  <a href=\"{{artist.url}}\" target=\"_blank\" > \n                    <img style=\"margin-top: 33%;\" src=\"http://colonieems.org/wp-content/uploads/2015/05/placeholder.jpg\" alt=\"\">\n                  </a>\n                  <div class=\"memmbername\">{{artist.name}}</div>\n                </span> \n                \n              </span>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var last_fm_api_service_1 = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchMusicComponent = (function () {
    function SearchMusicComponent(_route, _lastFmApiService, _searchService, _appComponent) {
        this._route = _route;
        this._lastFmApiService = _lastFmApiService;
        this._searchService = _searchService;
        this._appComponent = _appComponent;
        this.searchVal = '';
    }
    SearchMusicComponent.prototype.ngOnInit = function () {
        this._appComponent.setIsInMusicBrowser();
        this.subscribeToParams();
        this.subscribeToSearchVal();
    };
    SearchMusicComponent.prototype.subscribeToParams = function () {
        var _this = this;
        this.subscription = this._route.paramMap.subscribe(function (params) {
            _this.searchVal = params.get('q');
        });
        if (this.searchVal && this.searchVal.length > 0) {
            this.searchMusic(this.searchVal);
        }
        else {
            this.getTopMusic();
        }
    };
    SearchMusicComponent.prototype.subscribeToSearchVal = function () {
        var _this = this;
        this.subscription2 = this._searchService.searchValueMusic$.subscribe(function (music) {
            // console.log('hiiiii');
            // console.log(search);
            _this.searchMusic(music);
            _this.prevSearchVal = music;
        });
    };
    SearchMusicComponent.prototype.searchMusic = function (search) {
        var _this = this;
        if (search) {
            this._lastFmApiService.searchTrack(search)
                .then(function (data) {
                _this.tracks = data.results;
                // console.log(this.tracks);
                _this.trackSearchResults = data.results.trackmatches.track;
                // console.log(this.trackSearchResults);
            })
                .catch(function (error) {
                // console.log(error);
            });
            this._lastFmApiService.searchAlbum(search)
                .then(function (data) {
                _this.albums = data.results;
                // console.log(this.albums);
                _this.albumSearchResults = data.results.albummatches.album;
                // console.log(this.albumSearchResults);
            })
                .catch(function (error) {
                // console.log(error);
            });
            this._lastFmApiService.searchArtist(search)
                .then(function (data) {
                _this.artists = data.results;
                // console.log(this.artists);
                _this.artistSearchResults = data.results.artistmatches.artist;
                // console.log(this.artistSearchResults);
            })
                .catch(function (error) {
                // console.log(error);
            });
        }
    };
    SearchMusicComponent.prototype.getTopMusic = function () {
        var _this = this;
        this._lastFmApiService.getTopArtist()
            .then(function (data) {
            _this.artistSearchResults = data.artists.artist;
            // console.log(this.artistSearchResults);
        })
            .catch(function (error) {
            // console.log(error);
        });
        this._lastFmApiService.getTopTracks()
            .then(function (data) {
            _this.trackSearchResults = data.tracks.track;
            // console.log(this.trackSearchResults);
        })
            .catch(function (error) {
            // console.log(error);
        });
    };
    SearchMusicComponent.prototype.ngOnDestroy = function () {
        // console.log('search music component destroy');
        this._appComponent.setIsInMusicBrowser();
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    return SearchMusicComponent;
}());
SearchMusicComponent = __decorate([
    core_1.Component({
        selector: 'app-search-music',
        template: __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof last_fm_api_service_1.LastFmApiService !== "undefined" && last_fm_api_service_1.LastFmApiService) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object, typeof (_d = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _d || Object])
], SearchMusicComponent);
exports.SearchMusicComponent = SearchMusicComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=search-music.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:300,400,500,700);", ""]);

// module
exports.push([module.i, ".container { margin-top: 20px; }\n.mb20 { margin-bottom: 20px; } \n\nhgroup { padding-left: 15px; border-bottom: 1px solid #ccc; }\nhgroup h1 { font: 500 normal 1.625em \"Roboto\",Arial,Verdana,sans-serif; color: #2a3644; margin-top: 0; line-height: 1.15; }\nhgroup h2.lead { font: normal normal 1.125em \"Roboto\",Arial,Verdana,sans-serif; color: #2a3644; margin: 0; padding-bottom: 10px; }\n\n.search-result .thumbnail { border-radius: 0 !important; }\n.search-result:first-child { margin-top: 0 !important; }\n.search-result { margin-top: 20px; }\n.search-result .col-md-2 { border-right: 1px dotted #ccc; min-height: 140px; }\n.search-result ul { padding-left: 0 !important; list-style: none;  }\n.search-result ul li { font: 400 normal .85em \"Roboto\",Arial,Verdana,sans-serif;  line-height: 30px; }\n.search-result ul li i { padding-right: 5px; }\n.search-result .col-md-7 { position: relative; }\n.search-result h3 { font: 500 normal 1.375em \"Roboto\",Arial,Verdana,sans-serif; margin-top: 0 !important; margin-bottom: 10px !important; }\n.search-result h3 > a, .search-result i { color: #248dc1 !important; }\n.search-result p { font: normal normal 1.125em \"Roboto\",Arial,Verdana,sans-serif; } \n.search-result span.plus { position: absolute; right: 0; top: 126px; }\n.search-result span.plus a { background-color: #248dc1; padding: 5px 5px 3px 5px; }\n.search-result span.plus a:hover { background-color: #414141; }\n.search-result span.plus a i { color: #fff !important; }\n.search-result span.border { display: block; width: 97%; margin: 0 15px; border-bottom: 1px dotted #ccc; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>Search User Results</h1>\n<table>\n  <tr>\n    <th>Title</th>\n    <th>Owner</th>\n  </tr>\n      <td><a [routerLink]=\"['/home/room', room.roomId]\">{{room.title}}</a>\n      </td>\n      <td><a [routerLink]=\"['/home/users', room._owner.userId]\">{{room._owner.username}}</a>\n      </td>\n</table>-->\n\n\n\n<div *ngIf=\"searchResults.length > 0\">\n  <div class=\"mb20\">\n      <h2 class=\"lead\"><strong class=\"text-danger\">{{showSearchResultRooms.length}}</strong> results were found for the search for <span *ngIf=\"searchVal==''\"></span><strong class=\"text-danger\">{{searchVal}}</strong></h2>\t\t\t\t\t\t\t\t\n  </div>\n\n    <section class=\"col-xs-12 col-sm-6 col-md-12 \">\n      <div *ngFor=\"let room of showSearchResultRooms\">\n          <article class=\"search-result row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-3\">\n              <a [routerLink]=\"['/home/room', room.roomId]\" title=\"Lorem ipsum\" style=\"max-width: 68%;\" class=\"thumbnail center-block\"><img src=\"https://hbr.org/resources/images/article_assets/hbr/1410/R1410E_WORKPLACE6.jpg\" ></a>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-2\">\n              <ul class=\"meta-search\">\n                <li>\n                  <i class=\"glyphicon glyphicon-plus\"></i><span><a [routerLink]=\"['/home/room', room.roomId]\" title=\"Lorem ipsum\">Join Room</a></span>\n                </li>\n                \t\t\t\t\t<li><i class=\"glyphicon glyphicon-eye-open\"></i> <span>Room: {{room.title}}</span></li>\n              </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-7 excerpet\">\n              <h3>Description</h3>\n              <p>{{room.description}}</p>\t\t\t\t\t\t\n            </div>\n            <span class=\"clearfix borda\"></span>\n          </article>\t\n      </div>\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchRoomsComponent = (function () {
    function SearchRoomsComponent(_router, _route, _apicallService, _searchService) {
        this._router = _router;
        this._route = _route;
        this._apicallService = _apicallService;
        this._searchService = _searchService;
        this.searchResults = [];
        this.showSearchResultRooms = [];
        this.searchVal = '';
        this.subscribeToSearchVal();
    }
    SearchRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription2 = this._route.paramMap.subscribe(function (params) {
            _this.searchVal = params.get('q');
            // console.log(this.searchVal);
        });
        this.getAllRooms(this.searchVal);
    };
    SearchRoomsComponent.prototype.subscribeToSearchVal = function () {
        var _this = this;
        this.subscription = this._searchService.searchRoom$.subscribe(function (search) {
            // console.log('hiiiii');
            // console.log(search);
            _this.showSearchResultRooms = _this.filterRooms(_this.searchResults, search);
        });
    };
    SearchRoomsComponent.prototype.filterRooms = function (data, val) {
        // console.log('filtering....');
        return data.filter(function (index) {
            return index.title.toLowerCase().includes(val.toLowerCase());
        });
    };
    SearchRoomsComponent.prototype.getAllRooms = function (val) {
        var _this = this;
        this._apicallService.getRooms().then(function (data) {
            // console.log('success then response getting all users');
            _this.searchResults = data;
            _this.showSearchResultRooms = _this.filterRooms(data, val);
            // console.log(this.showSearchResultUsers);
        });
    };
    SearchRoomsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    return SearchRoomsComponent;
}());
SearchRoomsComponent = __decorate([
    core_1.Component({
        selector: 'app-search-rooms',
        template: __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object])
], SearchRoomsComponent);
exports.SearchRoomsComponent = SearchRoomsComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=search-rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:300,400,500,700);", ""]);

// module
exports.push([module.i, ".container { margin-top: 20px; }\n.mb20 { margin-bottom: 20px; } \n\nhgroup { padding-left: 15px; border-bottom: 1px solid #ccc; }\nhgroup h1 { font: 500 normal 1.625em \"Roboto\",Arial,Verdana,sans-serif; color: #2a3644; margin-top: 0; line-height: 1.15; }\nhgroup h2.lead { font: normal normal 1.125em \"Roboto\",Arial,Verdana,sans-serif; color: #2a3644; margin: 0; padding-bottom: 10px; }\n\n.search-result .thumbnail { border-radius: 0 !important; }\n.search-result:first-child { margin-top: 0 !important; }\n.search-result { margin-top: 20px; }\n.search-result .col-md-2 { border-right: 1px dotted #ccc; min-height: 140px; }\n.search-result ul { padding-left: 0 !important; list-style: none;  }\n.search-result ul li { font: 400 normal .85em \"Roboto\",Arial,Verdana,sans-serif;  line-height: 30px; }\n.search-result ul li i { padding-right: 5px; }\n.search-result .col-md-7 { position: relative; }\n.search-result h3 { font: 500 normal 1.375em \"Roboto\",Arial,Verdana,sans-serif; margin-top: 0 !important; margin-bottom: 10px !important; }\n.search-result h3 > a, .search-result i { color: #248dc1 !important; }\n.search-result p { font: normal normal 1.125em \"Roboto\",Arial,Verdana,sans-serif; } \n.search-result span.plus { position: absolute; right: 0; top: 126px; }\n.search-result span.plus a { background-color: #248dc1; padding: 5px 5px 3px 5px; }\n.search-result span.plus a:hover { background-color: #414141; }\n.search-result span.plus a i { color: #fff !important; }\n.search-result span.border { display: block; width: 97%; margin: 0 15px; border-bottom: 1px dotted #ccc; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"mb20\">\n\t\t<h2 class=\"lead\"><strong class=\"text-danger\">{{showSearchResultUsers.length}}</strong> results were found for the search for <strong class=\"text-danger\">{{searchVal}}</strong></h2>\t\t\t\t\t\t\t\t\n\t</div>\n\n    <section class=\"col-xs-12 col-sm-6 col-md-12\">\n<div *ngFor=\"let user of showSearchResultUsers\">\n\t\t<article class=\"search-result row\">\n\t\t\t<div *ngIf=\"user && user._id != currentUser._id\" class=\"col-xs-12 col-sm-12 col-md-3\">\n\t\t\t\t<a [routerLink]=\"['/home/users', user.userId]\" title=\"Lorem ipsum\" class=\"thumbnail\"><img class=\"img-fluid\" style=\"max-width:43%\" src=\"{{user.profileImageUrl}}\" alt=\"Lorem ipsum\" /></a>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"user && user._id == currentUser._id\" class=\"col-xs-12 col-sm-12 col-md-3\">\n\t\t\t\t<a [routerLink]=\"['/home/profile/current']\" title=\"Lorem ipsum\" class=\"thumbnail\"><img class=\"img-fluid\" style=\"max-width:43%\" src=\"{{user.profileImageUrl}}\" alt=\"Lorem ipsum\" /></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-2\">\n\t\t\t\t<ul class=\"meta-search\">\n\t\t\t\t\t<li *ngIf=\"user.received_invites.includes(currentUser._id)\"><i class=\"glyphicon glyphicon-ok-circle\"></i> <span>Invite Sent</span></li>\n\t\t\t\t\t<li *ngIf=\"isFriendOfCurrentUser(user.friends)\"><i class=\"glyphicon glyphicon-tags\"></i> <span>Friend</span></li>\n\t\t\t\t\t<li *ngIf=\"!user.received_invites.includes(currentUser._id) && !isFriendOfCurrentUser(user.friends) && user._id != currentUser._id\"><i class=\"glyphicon glyphicon-share-alt\"></i> <button class=\"btn btn-link\" (click)=\"sendInvite(user.userId)\">Send Invite</button></li>\n\t\t\t\t\t<li><i class=\"glyphicon glyphicon-eye-open\"></i> <span>Username: {{user.username}}</span></li>\n\t\t\t\t\t<li><i class=\"glyphicon glyphicon-info-sign\"></i> <span>Name: {{user.firstName}} {{user.lastName}}</span></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"user && user._id != currentUser._id\" class=\"col-xs-12 col-sm-12 col-md-7 excerpet\">\n\t\t\t\t<h3>Description</h3>\n\t\t\t\t<p>{{user.description}}</p>\t\t\t\t\t\t\n                <span class=\"plus\"  ><a style=\"color: white;\" [routerLink]=\"['/home/users', user.userId]\" title=\"Lorem ipsum\"><i class=\"glyphicon glyphicon-plus\"></i>  See More</a></span>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"user && user._id == currentUser._id\" class=\"col-xs-12 col-sm-12 col-md-7 excerpet\">\n\t\t\t\t<h3>Description</h3>\n\t\t\t\t<p>{{user.description}}</p>\t\t\t\t\t\t\n                <span class=\"plus\"  ><a style=\"color: white;\" [routerLink]=\"['/home/profile/current']\" title=\"Lorem ipsum\"><i class=\"glyphicon glyphicon-plus\"></i>  See More</a></span>\n\t\t\t</div>\n\t\t\t<span class=\"clearfix borda\"></span>\n\t\t</article>\t\n</div>\n\n\t</section>"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_service_1 = __webpack_require__("../../../../../src/app/search.service.ts");
var api_call_service_1 = __webpack_require__("../../../../../src/app/api-call.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchUsersComponent = (function () {
    function SearchUsersComponent(_router, _route, _apicallService, _searchService) {
        this._router = _router;
        this._route = _route;
        this._apicallService = _apicallService;
        this._searchService = _searchService;
        this.searchResults = [];
        this.showSearchResultUsers = [];
        this.searchVal = '';
        this.getCurrentUserInSession();
        this.subscribeToSearchVal();
    }
    SearchUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription2 = this._route.paramMap.subscribe(function (params) {
            _this.searchVal = params.get('q');
            // console.log(this.searchVal);
        });
        this.getAllUsers(this.searchVal);
    };
    SearchUsersComponent.prototype.subscribeToSearchVal = function () {
        var _this = this;
        this.subscription = this._searchService.searchValue$.subscribe(function (search) {
            // console.log('hiiiii');
            // console.log(search);
            _this.showSearchResultUsers = _this.filterUsers(_this.searchResults, search);
        });
    };
    SearchUsersComponent.prototype.getAllUsers = function (search) {
        var _this = this;
        if (!search) {
            search = '';
        }
        this._apicallService.getAllUsers()
            .then(function (data) {
            // console.log('success then response getting all users');
            _this.searchResults = data;
            _this.showSearchResultUsers = _this.filterUsers(data, search);
            // console.log(this.showSearchResultUsers);
        })
            .catch(function (error) {
            // console.log('error catch response getting all users');
            // console.log(error);
        });
    };
    SearchUsersComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            // console.log(data);
            if (data) {
                // console.log('success getting current user');
                _this.currentUser = data;
            }
            else {
                // console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            // console.log('error getting current user');
            // console.log(error);
            _this._router.navigate(['']);
        });
    };
    SearchUsersComponent.prototype.filterUsers = function (data, val) {
        // console.log('filtering....');
        return data.filter(function (index) {
            return index.username.toLowerCase().includes(val.toLowerCase()) || index.firstName.toLowerCase().includes(val.toLowerCase()) || index.lastName.toLowerCase().includes(val.toLowerCase());
        });
    };
    SearchUsersComponent.prototype.sendInvite = function (userId) {
        var _this = this;
        var user_Id = { userId: userId };
        this._apicallService.sendInviteToUserById(user_Id)
            .then(function (data) {
            // console.log('sucess then response sendInvite');
            // console.log(data);
            _this.getAllUsers(_this.searchVal);
        })
            .catch(function (error) {
            // console.log('error catch response sendInvite');
        });
    };
    SearchUsersComponent.prototype.isFriendOfCurrentUser = function (userFriends) {
        var _this = this;
        var friend = userFriends.find(function (index) {
            return index._id === _this.currentUser._id;
        });
        // console.log(friend);
        if (friend) {
            return true;
        }
        return false;
    };
    SearchUsersComponent.prototype.ngAfterViewInit = function () {
    };
    SearchUsersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    return SearchUsersComponent;
}());
SearchUsersComponent = __decorate([
    core_1.Component({
        selector: 'app-search-users',
        template: __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof api_call_service_1.ApiCallService !== "undefined" && api_call_service_1.ApiCallService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object])
], SearchUsersComponent);
exports.SearchUsersComponent = SearchUsersComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=search-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
var SearchService = (function () {
    function SearchService() {
        // Observable string sources
        this.searchValueSource = new BehaviorSubject_1.BehaviorSubject('');
        this.searchValueMusicSource = new BehaviorSubject_1.BehaviorSubject('');
        this.searchRoomSource = new BehaviorSubject_1.BehaviorSubject('');
        this.editUserEventSource = new Subject_1.Subject();
        // Observable string streams
        this.searchValue$ = this.searchValueSource.asObservable();
        this.searchRoom$ = this.searchRoomSource.asObservable();
        this.searchValueMusic$ = this.searchValueMusicSource.asObservable();
        this.editUserEvent$ = this.editUserEventSource.asObservable();
    }
    // Service message commands
    SearchService.prototype.searchUsers = function (searchVal) {
        this.searchValueSource.next(searchVal);
    };
    SearchService.prototype.searchRooms = function (searchVal) {
        this.searchRoomSource.next(searchVal);
    };
    SearchService.prototype.searchMusic = function (searchVal) {
        this.searchValueMusicSource.next(searchVal);
    };
    SearchService.prototype.editUserEvent = function (event) {
        this.editUserEventSource.next(event);
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map