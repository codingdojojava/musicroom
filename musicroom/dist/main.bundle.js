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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiCallService = (function () {
    function ApiCallService(_http) {
        this._http = _http;
    }
    ApiCallService.prototype.registerAUser = function (userData) {
        // console.log('service sending user data for registration');
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
        console.log("MESSAGE");
        console.log(message);
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
    return ApiCallService;
}());
ApiCallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiCallService);

var _a;
//# sourceMappingURL=api-call.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_manager_search_rooms_search_rooms_component__ = __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_room_new_room_component__ = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_room_room_component__ = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_manager_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_manager_search_music_search_music_component__ = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_current_profile_current_profile_component__ = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_14__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */], children: [
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
                    { path: 'current', component: __WEBPACK_IMPORTED_MODULE_5__profile_current_profile_current_profile_component__["a" /* CurrentProfileComponent */] }
                ] },
            { path: 'search/results', component: __WEBPACK_IMPORTED_MODULE_8__search_manager_search_manager_component__["a" /* SearchManagerComponent */], children: [
                    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_4__search_manager_search_music_search_music_component__["a" /* SearchMusicComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__search_manager_search_users_search_users_component__["a" /* SearchUsersComponent */] },
                    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_0__search_manager_search_rooms_search_rooms_component__["a" /* SearchRoomsComponent */] }
                ] },
            { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_7__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */] },
            { path: 'room/new', component: __WEBPACK_IMPORTED_MODULE_1__new_room_new_room_component__["a" /* NewRoomComponent */] },
            { path: 'room/:id', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_room_room_component__["a" /* RoomComponent */] },
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_16__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_16__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Nav Bar</legend>\n  <a *ngIf=\"!currentUser\" [routerLink]=\"['/']\">Home</a>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/home/profile/current']\">Home</a>\n  <a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\">Login</a>\n  <a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\">Register</a>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/home/profile/current']\">My Profile</a>\n\n  <div *ngIf=\"searchMode==='users'\" style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchPageWithSearchVal()\">\n      <input type=\"text\" name=\"searchU\" placeholder=\"Search User\" [(ngModel)]=\"searchVal\" (keyup) = \"searchUsers()\" />\n      <input type=\"submit\" value=\"Search Users\" />\n    </form>\n  </div>\n\n  <div *ngIf=\"searchMode==='music'\"style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"searchMusic()\">\n      <input type=\"text\" name=\"searchM\" placeholder=\"Search Music\" [(ngModel)]=\"searchVal2\" />\n      <input type=\"submit\" value=\"Search Music\" />\n    </form>\n  </div>\n\n  <div *ngIf=\"searchMode==='rooms'\"style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchRoomPageWithSearchVal3()\">\n      <input type=\"text\" name=\"searchM\" placeholder=\"Search Chatrooms\" [(ngModel)]=\"searchVal3\" (keyup) = \"searchRooms()\"/>\n      <input type=\"submit\" value=\"Search Rooms\" />\n    </form>\n  </div>\n\n  <select *ngIf=\"currentUser\" name=\"searchMode\" [(ngModel)]=\"searchMode\">\n    <option value=\"users\">Users</option>\n    <option value=\"music\">Music</option>\n    <option value=\"rooms\">Chatrooms</option>\n  </select>\n\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/home','logout']\">Logout</a>\n</fieldset>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__ = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        // this._apicallService.logoutUser()
        //   .then(data => {
        //     console.log(data);
        //   });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__["a" /* LastFmApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__["a" /* LastFmApiService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__ = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_room_room_component__ = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_current_profile_current_profile_component__ = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__search_manager_search_music_search_music_component__ = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_manager_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__new_room_new_room_component__ = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_manager_search_rooms_search_rooms_component__ = __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









 // <-- Import FormsModule
 // <-- Import HttpModule















var config = { url: 'http://localhost:8000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_manager_search_manager_component__["a" /* SearchManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_19__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__profile_current_profile_current_profile_component__["a" /* CurrentProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_22__search_manager_search_music_search_music_component__["a" /* SearchMusicComponent */],
            __WEBPACK_IMPORTED_MODULE_23__search_manager_search_users_search_users_component__["a" /* SearchUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_24__new_room_new_room_component__["a" /* NewRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_25__search_manager_search_rooms_search_rooms_component__["a" /* SearchRoomsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_7__api_call_service__["a" /* ApiCallService */],
            __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__["a" /* LastFmApiService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(socket, _apiCallService) {
        this.socket = socket;
        this._apiCallService = _apiCallService;
    }
    ChatService.prototype.getMessage = function (id) {
        return this.socket
            .fromEvent("msg" + id)
            .map(function (data) {
            console.log("GOT EVENT");
            return true;
        });
    };
    ChatService.prototype.sendMessage = function (id) {
        console.log("SENDING EVENT");
        this.socket
            .emit("msg", id);
    };
    ChatService.prototype.loginEvent = function (currentUser) {
        console.log('loginEvent Triggered: Sending currentuser data to server event name: login');
        this.socket.emit('login', currentUser);
    };
    ChatService.prototype.getLoginEvent = function (id) {
        return this.socket
            .fromEvent("online" + id)
            .map(function (data) {
            console.log('got login event');
            return true;
        });
    };
    ChatService.prototype.logoutEvent = function (currentUser) {
        console.log('logoutEvent triggered: Sending currentuser data to server event name: logout');
        this.socket.emit('logout', currentUser);
    };
    ChatService.prototype.getLogoutEvent = function (currentUserid) {
        return this.socket.fromEvent("offline" + currentUserid)
            .map(function (data) {
            console.log("GOT LOGOUT EVENT");
            return true;
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _b || Object])
], ChatService);

var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <router-outlet></router-outlet> -->\n<!-- <a [routerLink]=\"['room']\">qqqq</a> -->\n<div *ngIf=\"currentUser\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n            <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a [routerLink]='[\"room\",\"new\"]'>Friends Online</a></li>\n            <li *ngFor=\"let friend of onlineFriends\">\n                <a [routerLink]=\"['home','users', friend.userId]\">{{friend.username}}</a>\n            </li>\n            </ul>\n            <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a [routerLink]='[\"room\",\"new\"]'>+ Create Room</a></li>\n            <li *ngFor=\"let room of currentUser.joinedRooms\">\n                <a [routerLink]=\"['room', room.roomId]\">{{room.title}}</a>\n            </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n\n           \n            <router-outlet></router-outlet>\n\n        </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_apicallService, _router, chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.chatService = chatService;
        this.onlineFriends = [];
        this.allRooms = [];
        this.userRooms = [];
        this.room = {};
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
        console.log('Client On: Now Watching for Current User Friends Logging in');
        this.subscription = this.chatService.getLoginEvent(id).subscribe(function (data) {
            console.log('Login Event Happened');
            _this.getCurrentUserInSession();
            _this._apicallService.getOnlineFriends().then(function (data) {
                console.log('list of online friends');
                console.log(data);
                _this.onlineFriends = data;
            });
        });
    };
    DashboardComponent.prototype.watchForFriendLogoutEvent = function (id) {
        var _this = this;
        console.log('Client On: Now Watching for Current User Friends Logging out');
        this.subscription2 = this.chatService.getLogoutEvent(id).subscribe(function (data) {
            console.log('a friend is offline');
            _this.getCurrentUserInSession();
            console.log("getting online friends");
            _this._apicallService.getOnlineFriends().then(function (data) {
                console.log('list of online friends');
                console.log(data);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid black;\">\n  <p>Name: {{room.title}}</p>\n  <p>Description: {{room.description}}</p>\n  <p>Users in room</p>\n  <div id='usersInRoom'>\n    <p *ngFor=\"let user of room._roomMembers\">{{user.username}}</p>\n  </div>\n  <hr>\n  <div *ngIf=\"userInRoom\">\n    <button *ngIf=\"!isOwner\" (click)=\"leaveRoom()\">Leave Room</button>\n    <button *ngIf=\"isOwner\" (click)=\"deleteRoom()\">Delete Room</button>\n    <div id=\"allMessages\">\n      <p *ngFor=\"let msg of room.chatlog\">{{msg.user}}: {{msg.message}}</p>\n    </div>\n    <form (submit)=\"sendMessage()\">\n      <input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" name=\"msg\">\n      <input type=\"submit\" value=\"Send\">\n    </form>\n  </div>\n  <div *ngIf=\"!userInRoom\">\n    <div *ngIf=\"room.isPublic\">\n      <button (click)=\"joinRoom()\">Join Room</button>\n    </div>\n    <div *ngIf=\"!room.isPublic\">\n      <input type=\"text\" name=\"roomPassword\" [(ngModel)]=\"roomPW\" placeholder=\"Enter password\">\n      <button (click)=\"joinRoom()\" [disabled]=\"roomPW != room.password\">Join Room</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("FFFFF");
        this._route.paramMap.subscribe(function (params) {
            var self = _this;
            _this.apiService.getRoomById(params.get('id')).then(function (data) {
                console.log("GOT ROOM");
                console.log(data);
                _this.room = data;
                console.log(_this.room);
                _this.checkUserInRoom();
                _this.chatService
                    .getMessage(_this.room.roomId)
                    .subscribe(function (data) {
                    console.log("GOT IT");
                    self.refreshRoom();
                });
            });
        });
    };
    RoomComponent.prototype.refreshRoom = function () {
        var _this = this;
        this.apiService.getRoomById(this.room.roomId).then(function (data) {
            _this.room = data;
            _this.checkUserInRoom();
        });
    };
    RoomComponent.prototype.sendMessage = function () {
        console.log('SENDING');
        var self = this;
        this.apiService.sendMessage(this.room.roomId, this.message).then(function (data) {
            console.log('SENT');
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
            console.log("RESULT");
            console.log(result);
            console.log(_this.room._roomMembers);
            console.log(_this.room._owner);
            _this.userInRoom = false;
            for (var i = 0; i < _this.room._roomMembers.length; i++) {
                if (_this.room._roomMembers[i]._id == result._id)
                    _this.userInRoom = true;
            }
            if (_this.room._owner._id == result._id) {
                _this.userInRoom = true;
                _this.isOwner = true;
            }
            console.log(_this.userInRoom);
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
    return RoomComponent;
}());
RoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-room',
        template: __webpack_require__("../../../../../src/app/dashboard/room/room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/room/room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RoomComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover {\n    height: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"cover\">\n  <legend>Cover Page</legend>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/last-fm-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastFmApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LastFmApiService = (function () {
    function LastFmApiService(_http) {
        this._http = _http;
    }
    LastFmApiService.prototype.searchTrack = function (searchVal) {
        console.log('calling last fm api to search tracks by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.searchAlbum = function (searchVal) {
        console.log('calling last fm api to search albus by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.searchArtist = function (searchVal) {
        console.log('calling last fm api to search artist by search value');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + searchVal + '&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getTopArtist = function () {
        console.log('calling last fm api to get current top artisst');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&limit=10&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getTopTracks = function () {
        console.log('calling last fm api to get current top tracks');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=c595e718d23c51ef68c0d547f1511fe7&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    LastFmApiService.prototype.getAuthSession = function (token, sig) {
        console.log('calling last fm api to get current top tracks');
        return this._http.get('http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=' + token + '&api_key=c595e718d23c51ef68c0d547f1511fe7&api_sig=' + sig + '&format=json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return LastFmApiService;
}());
LastFmApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LastFmApiService);

var _a;
//# sourceMappingURL=last-fm-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Login</legend>\n<div style=\"color: red;\" *ngIf=\"incorrectLogin\">\n  <p>Invalid Login Credentials. Please try again.</p> \n</div>\n<form (submit)=\"loginUser(); form.reset()\" #form=\"ngForm\">\n  <p>\n    <label>Username: \n      <input type=\"text\" name=\"username\" required [(ngModel)] = \"user.username\" #username=\"ngModel\"/>\n    </label>\n  </p>\n    <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n      <p *ngIf=\"username.errors.required\">Username is Required</p> \n    </div>\n  <p>\n    <label>Password: \n      <input type=\"password\" name=\"password\" required [(ngModel)] = \"user.password\" #password=\"ngModel\" />\n    </label>\n  </p>\n    <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\">Password is Required</p> \n    </div>\n  <input type=\"submit\" value=\"Login\" [disabled] = \"password.invalid || username.invalid\" />\n</form>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    // currentUser;
    function LoginComponent(_apicallService, _router, _appComponent, _chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this._chatService = _chatService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
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
                _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
            }
            else {
                _this.incorrectLogin = false;
                _this._appComponent.getCurrentUserInSession();
                _this.getCurrentUserInSession();
                console.log(_this.currentUser);
                _this._router.navigate(['home', 'profile', 'current']);
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
            console.log(error);
        });
    };
    LoginComponent.prototype.emitLoginEvent = function (friendsData) {
        console.log('emitLoginEvent');
        this._chatService.loginEvent(friendsData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], LoginComponent);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            console.log('success logging user out refreshing user session');
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
        console.log('Client Emitting Logout Event');
        this._chatService.logoutEvent(currentUser);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], LogoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
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

//# sourceMappingURL=room.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
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

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"createRoom()\">\n  <div><label>Title: </label><input [(ngModel)] = \"room.title\" type=\"text\" name='roomtitle'></div>\n  <div>\n      <label>Privacy:</label>\n      <select name=\"public\" id=\"\" [(ngModel)]=\"room.isPublic\">\n          <option value=\"true\">Public</option>\n          <option value=\"false\">Private</option>\n      </select>\n  </div>\n  <div><label>Password: </label><input type=\"text\" [disabled]=\"room.isPublic == 'true'\" name=\"pw\" [(ngModel)]=\"room.password\"></div>\n  <div><label>Description: </label><input [(ngModel)]=\"room.description\" type=\"text\" name='description'></div>\n  <div><input type=\"submit\" value=\"Create Room\"></div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-room/new-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_room__ = __webpack_require__("../../../../../src/app/models/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewRoomComponent = (function () {
    function NewRoomComponent(_apicallService, dashComp) {
        this._apicallService = _apicallService;
        this.dashComp = dashComp;
        this.room = new __WEBPACK_IMPORTED_MODULE_2__models_room__["a" /* Room */]();
    }
    NewRoomComponent.prototype.ngOnInit = function () {
    };
    NewRoomComponent.prototype.createRoom = function () {
        var self = this;
        console.log("ROOM");
        console.log(this.room);
        this._apicallService.createRoom(this.room).then(function (data) {
            console.log("ROOM CREATION");
            console.log(data);
            self.dashComp.getCurrentUserInSession();
        });
        this.room = new __WEBPACK_IMPORTED_MODULE_2__models_room__["a" /* Room */]();
    };
    return NewRoomComponent;
}());
NewRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-new-room',
        template: __webpack_require__("../../../../../src/app/new-room/new-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-room/new-room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]) === "function" && _b || Object])
], NewRoomComponent);

var _a, _b;
//# sourceMappingURL=new-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 90px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n\n\n\n\n\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    background-color: #f0f3f5;\n    margin-top:40px;\n}\n/*==============================*/\n/*====== siderbar user profile =====*/\n/*==============================*/\n.nav>li>a.userdd {\n    padding: 5px 15px\n}\n.userprofile {\n    width: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin: 40px auto\n}\n.userprofile .userpic {\n\theight: 100px;\n\twidth: 100px;\n\tclear: both;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative; \n}\n.userprofile .userpic .userpicimg {\n\theight: auto;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.username {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tline-height: 20px;\n\tcolor: #000000;\n\tmargin-top: 20px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tline-height: 15px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n.settingbtn {\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0px;\n\tright: 0px;\n\tline-height: 30px;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: 0;\n\tbox-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);\n}\n.userprofile.small {\n\twidth: auto;\n\tclear: both;\n\tmargin: 0px auto;\n}\n.userprofile.small .userpic {\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 0 10px 0 0;\n\tdisplay: block;\n\tborder-radius: 100%;\n\tbox-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\t-ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n\tposition: relative;\n\tfloat: left;\n}\n.userprofile.small .textcontainer {\n\tfloat: left;\n\tmax-width: 100px;\n\tpadding: 0\n}\n.userprofile.small .userpic .userpicimg {\n\tmin-height: 100%;\n\twidth: 100%;\n\tborder-radius: 100%;\n}\n.userprofile.small .username {\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 21px;\n\tcolor: #000000;\n\tmargin: 0px;\n\tfloat: left;\n\twidth: 100%;\n}\n.userprofile.small .username+p {\n\tcolor: #607d8b;\n\tfont-size: 13px;\n\tfloat: left;\n\twidth: 100%;\n\tmargin: 0;\n}\n/*==============================*/\n/*====== Social Profile css =====*/\n/*==============================*/\n.countlist h3 {\n\tmargin: 0;\n\tfont-weight: 400;\n\tline-height: 28px;\n}\n.countlist {\n\ttext-transform: uppercase\n}\n.countlist li {\n\tpadding: 15px 30px 15px 0;\n\tfont-size: 14px;\n\ttext-align: left;\n}\n.countlist li small {\n\tfont-size: 12px;\n\tmargin: 0\n}\n.followbtn {\n\tfloat: right;\n\tmargin: 22px;\n}\n.userprofile.social {\n\tbackground: url(http://www.prestigepublicity.com/wp-content/uploads/2013/04/bannerdeco.png) no-repeat top center;\n\tbackground-size: 100%;\n\tpadding: 50px 0;\n\tmargin: 0\n}\n.userprofile.social .username {\n\tcolor: #ffffff\n}\n.userprofile.social .username+p {\n\tcolor: #ffffff;\n\topacity: 0.8\n}\n.postbtn {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 9\n}\n.status-upload {\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 15px\n}\n.posttimeline .panel {\n\tmargin-bottom: 15px\n}\n.commentsblock {\n\tbackground: #f8f9fb;\n}\n.nopaddingbtm {\n\tmargin-bottom: 0\n}\n/*==============================*/\n/*====== Recently connected  heading =====*/\n/*==============================*/\n.memberblock {\n\twidth: 100%;\n\tfloat: left;\n\tclear: both;\n\tmargin-bottom: 15px\n}\n.member {\n\twidth: 24%;\n\tfloat: left;\n\tmargin: 2px 1% 2px 0;\n\tbackground: #ffffff;\n\tborder: 1px solid #d8d0c3;\n\tpadding: 3px;\n\tposition: relative;\n\toverflow: hidden\n}\n.memmbername {\n\tposition: absolute;\n\tbottom: -30px;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tcolor: #ffffff;\n\tline-height: 30px;\n\tpadding: 0 5px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 100%;\n\tfont-size: 11px;\n\ttransition: 0.5s ease all;\n}\n.member:hover .memmbername {\n\tbottom: 0\n}\n.member img {\n\twidth: 100%;\n\ttransition: 0.5s ease all;\n}\n.member:hover img {\n\topacity: 0.8;\n\t-webkit-transform: scale(1.2);\n\t        transform: scale(1.2)\n}\n\n.panel-default>.panel-heading {\n    color: #607D8B;\n    background-color: #ffffff;\n    font-weight: 400;\n    font-size: 15px;\n    border-radius: 0;\n    border-color: #e1eaef;\n}\n\n\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n\n.page-header.small {\n    position: relative;\n    line-height: 22px;\n    font-weight: 400;\n    font-size: 20px;\n}\n\n.favorite i {\n    color: #eb3147;\n}\n\n.btn i {\n    font-size: 17px;\n}\n\n.panel {\n    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: all ease 0.5s;\n    -moz-transition: all ease 0.5s;\n    -webkit-transition: all ease 0.5s;\n    -ms-transition: all ease 0.5s;\n    margin-bottom: 35px;\n    border-radius: 0px;\n    position: relative;\n    border: 0;\n    display: inline-block;\n    width: 100%;\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #ffffff;\n    border-top: 1px solid #eef2f4;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    color: #607d8b;\n}\n\n.panel-blue {\n    color: #ffffff;\n    background-color: #03A9F4;\n}\n\n.panel-red.userlist .username, .panel-green.userlist .username, .panel-yellow.userlist .username, .panel-blue.userlist .username {\n    color: #ffffff;\n}\n\n.panel-red.userlist p, .panel-green.userlist p, .panel-yellow.userlist p, .panel-blue.userlist p {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.panel-red.userlist p a, .panel-green.userlist p a, .panel-yellow.userlist p a, .panel-blue.userlist p a {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.progress-bar-success, .status.active, .panel-green, .panel-green > .panel-heading, .btn-success, .fc-event, .badge.green, .event_green {\n    color: white;\n    background-color: #8BC34A;\n}\n\n.progress-bar-warning, .panel-yellow, .status.pending, .panel-yellow > .panel-heading, .btn-warning, .fc-unthemed .fc-today, .badge.yellow, .event_yellow {\n    color: white;\n    background-color: #FFC107;\n}\n\n.progress-bar-danger, .panel-red, .status.inactive, .panel-red > .panel-heading, .btn-danger, .badge.red, .event_red {\n    color: white;\n    background-color: #F44336;\n}\n\n.media-object {\n    max-width: 50px;\n    border-radius: 50px;\n    box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n    -ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);\n}\n\n.media:first-child {\n    margin-top: 15px;\n}\n\n.media-object {\n    display: block;\n}\n\n.dotbtn {\n    height: 40px;\n    width: 40px;\n    background: none;\n    border: 0;\n    line-height: 40px;\n    vertical-align: middle;\n    padding: 0;\n    margin-right: -15px;\n}\n\n.dots {\n    height: 4px;\n    width: 4px;\n    position: relative;\n    display: block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    margin: 0 auto;\n}\n\n.dots:after, .dots:before {\n    content: \" \";\n    height: 4px;\n    width: 4px;\n    position: absolute;\n    display: inline-block;\n    background: rgba(0,0,0,0.5);\n    border-radius: 2px;\n    top: -7px;\n    left: 0;\n}\n\n.dots:after {\n    content: \" \";\n    top: auto;\n    bottom: -7px;\n    left: 0;\n}\n\n.photolist img {\n    width: 100%;\n}\n\n.photolist {\n    background: #e1eaef;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.profilegallery .grid-item a {\n    height: 100%;\n    display: block;\n}\n\n.grid a {\n    width: 100%;\n    display: block;\n    float: left;\n}\n\n.media-body {\n    color: #607D8B;\n    overflow: visible;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"user\">\n  <h1>Other User's Profile</h1>\n  <h2>Username: {{user.username}}</h2>\n  <p>Email: {{user.email}}</p>\n  <p>First Name: {{user.firstName}}</p>\n  <p>Last Name: {{user.lastName}}</p>\n  <p>Description: {{user.description}}</p>\n<h3>Friends</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let friend of user.friends\">\n      <td ><a [routerLink]=\"['/home/users', friend.userId]\">{{friend.username}}</a></td>\n      <td *ngIf=\"friend && friend._id != user._id\">\n\n      </td>\n    </tr>\n  </table>\n</div>\n-->\n\n<div *ngIf=\"user\">\n<div class=\"row\">\n      <div class=\"col-md-12 text-center \">\n        <div class=\"panel panel-default\">\n          <div class=\"userprofile social \">\n            <div class=\"userpic\" > <img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\"  alt=\"\" class=\"userpicimg\"> </div>\n            <h3 class=\"username\">{{user.firstName}} {{user.lastName}}</h3>\n            <p>{{user.username}}</p>\n            <div class=\"socials tex-center\"> <a href=\"\" class=\"btn btn-circle btn-primary \">\n            <i class=\"fa fa-facebook\"></i></a> <a href=\"\" class=\"btn btn-circle btn-danger \">\n            <i class=\"fa fa-google-plus\"></i></a> <a href=\"\" class=\"btn btn-circle btn-info \">\n            <i class=\"fa fa-twitter\"></i></a> <a href=\"\" class=\"btn btn-circle btn-warning \"><i class=\"fa fa-envelope\"></i></a>\n            </div>\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <!-- /.col-md-12 -->\n      <div class=\"col-md-4 col-sm-12 pull-right\">\n        <div class=\"panel panel-default\">\n          <div style=\"min-height: 490px;\" class=\"panel-heading\">\n            <h1 class=\"page-header small\">Personal Details</h1>\n              <p>Username: {{user.username}}</p>\n              <p>Email: {{user.email}}</p>\n              <p>First Name: {{user.firstName}}</p>\n              <p>Last Name: {{user.lastName}}</p>\n              <p>Description: {{user.description}}</p>\n            </div>\n\n\n\n          </div>\n\n          <div class=\"col-md-12 photolist\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Friends <button class=\"btn btn-link\" (click)=\"setEditMode()\">Edit</button></h1>\n            <p class=\"page-subtitle small\"> {{user.friends.length}} friends</p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n              <span *ngFor=\"let friend of user.friends\" class=\"member\">\n                  <button *ngIf=\"!hasReceivedInviteFromCurrentUser(friend.received_invites) && !isFriendOfCurrentUser(friend.friends) && friend._id != currentUser._id\" style=\"display: block; margin-left: -12%; z-index: 1\" class=\"btn btn-link\" (click)=\"sendInvite(friend.userId)\">Friend Request</button>\n                  <span style=\"display: block; z-index: 1\" *ngIf=\"hasReceivedInviteFromCurrentUser(friend.received_invites)\">Invite Sent</span>\n                  <span style=\"display: block; z-index: 1\" *ngIf=\"isFriendOfCurrentUser(friend.friends)\">Your Friend</span>\n                  <span style=\"display: block; z-index: 1\" *ngIf=\"friend._id == currentUser._id\">You</span>\n                  <a [routerLink]=\"['/home/users', friend.userId]\" > \n                    <img src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\">\n                  </a>\n                  <div class=\"memmbername\">{{friend.firstName}}</div>\n              </span> \n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n      </div>\n      </div>\n\n      <div class=\"col-md-8 col-sm-12 pull-left posttimeline\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div class=\"status-upload nopaddingbtm\">\n              <form>\n                <textarea class=\"form-control\" placeholder=\"What are you doing right now?\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Audio\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Video\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Picture\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Share</button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Lucky Sans<br>\n                  <small><i class=\"fa fa-clock-o\"></i> Yesterday, 2:00 am</small> </h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio. </p>\n\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> 2015</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> 25</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-share-alt\"></i> 15</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 commentsblock border-top\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Astha Smith</h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Lucky Sans</h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>\n                <div class=\"media\">\n                  <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">Astha Smith</h4>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\"> Lucky Sans<br>\n                  <small><i class=\"fa fa-clock-o\"></i> Yesterday, 2:00 am</small> </h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio. </p>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> 2015</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> 25</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-share-alt\"></i> 15</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 border-top\">\n            <div class=\"status-upload\">\n              <form>\n                <label>Comment</label>\n                <textarea class=\"form-control\" placeholder=\"Comment here\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Comment</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherUserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherUserProfileComponent = (function () {
    function OtherUserProfileComponent(_apicallService, _route, _router, chatService) {
        this._apicallService = _apicallService;
        this._route = _route;
        this._router = _router;
        this.chatService = chatService;
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
    OtherUserProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return OtherUserProfileComponent;
}());
OtherUserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-other-user-profile',
        template: __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], OtherUserProfileComponent);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-current-profile',
        template: __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CurrentProfileComponent);

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

module.exports = "<!--<div *ngIf=\"currentUser\">\n<form>\n  <input style=\"margin-left: -13px;\" class=\"btn btn-link\" type=\"submit\" value=\"Save\" >\n  <p>Username: {{currentUser.username}}</p>\n\n\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-2 col-form-label\">First Name:</label> \n      <div class=\"col-10\">\n        <input id=\"\" class=\"form-control\" \n          type=\"text\" \n          name=\"firstName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"currentUser.firstName\"\n          #firstName='ngModel'\n        />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-2 col-form-label\">Last Name:</label> \n      <div class=\"col-10\">\n        <input id=\"\" class=\"form-control\" \n          type=\"text\" \n          name=\"lastName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"currentUser.lastName\"\n          #lastName='ngModel'\n        />\n      </div>\n    </div>\n  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n  </div>\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-2 col-form-label\">Description (optional):</label> \n        <input id=\"\" class=\"form-control\"\n          type=\"text\" \n          name=\"description\" \n          [(ngModel)]=\"currentUser.description\"\n          #description='ngModel'\n        />\n      \n    </div>\n  </form>\n</div>-->\n\n<div *ngIf=\"currentUser\" class=\"row\">\n    <div class=\"col-sm-12 col-centered\">\n        <div class=\"panel panel-default\">\n            <!--<div class=\"panel-heading\" >\n                <h1>Edit Personal Details</h1>\n            </div>-->\n      <form (submit)=\"editCurrentUser()\">\n        <div class=\"panel-body\">\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope blue\"></i></span>\n                    <input type=\"text\" \n                            name=\"email\" \n                            required \n                            pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n                            [(ngModel)]=\"currentUser.email\"\n                            #email='ngModel'\n                            placeholder=\"Email\" class=\"form-control\" \n                    />\n                </div>\n                    <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                    <p *ngIf=\"email.errors.required\">Email is Required</p> \n                    <p *ngIf=\"email.errors.pattern\">Please enter a valid email</p> \n                  </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <input \n                      type=\"text\" \n                      name=\"firstName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"currentUser.firstName\"\n                      #firstName='ngModel' \n                      placeholder=\"First Name\" \n                      class=\"form-control\">\n                </div>\n                  <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n                  <p *ngIf=\"firstName.errors.required\">First Name is Required</p> \n                  <p *ngIf=\"firstName.errors.minlength\">First Name must be at least 2 characters long</p> \n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user blue\"></i></span>\n                    <input \n                      type=\"text\" \n                      name=\"lastName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"currentUser.lastName\"\n                      #lastName='ngModel'\n                      placeholder=\"Last Name\" \n                      class=\"form-control\">\n                </div>\n                  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n                    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n                    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n                  </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-comment blue\"></i></span>\n                    <textarea \n                      name=\"description\"\n                      placeholder=\"Description(optional)\"\n                      rows=\"6\" \n                      class=\"form-control\" \n                      [(ngModel)]=\"currentUser.description\"\n                      #description='ngModel'\n                      type=\"text\" ></textarea>\n                </div>\n            </div>\n            <div class=\"\">\n            <input type=\"submit\" class=\"btn btn-success pull-right\" [disabled] = \"lastName.invalid || firstName.invalid || email.invalid\" />\n            </div>\n        </div>\n        </form>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileComponent = (function () {
    function EditProfileComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
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
            // console.log(data);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-edit-profile',
        template: __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditProfileComponent);

var _a, _b;
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

module.exports = "<div *ngIf=\"currentUser\">\n<div class=\"row\">\n      <div class=\"col-md-12 text-center \">\n        <div class=\"panel panel-default\">\n          <div class=\"userprofile social \">\n            <div class=\"userpic\" > <img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\"  alt=\"\" class=\"userpicimg\"> </div>\n            <h3 class=\"username\">{{currentUser.firstName}} {{currentUser.lastName}}</h3>\n            <p>{{currentUser.username}}</p>\n            <div class=\"socials tex-center\"> <a href=\"\" class=\"btn btn-circle btn-primary \">\n            <i class=\"fa fa-facebook\"></i></a> <a href=\"\" class=\"btn btn-circle btn-danger \">\n            <i class=\"fa fa-google-plus\"></i></a> <a href=\"\" class=\"btn btn-circle btn-info \">\n            <i class=\"fa fa-twitter\"></i></a> <a href=\"\" class=\"btn btn-circle btn-warning \"><i class=\"fa fa-envelope\"></i></a>\n            </div>\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <!-- /.col-md-12 -->\n      <div class=\"col-md-4 col-sm-12 pull-right\">\n        <div class=\"panel panel-default\">\n          <div style=\"min-height: 490px;\" class=\"panel-heading\">\n            <h1 class=\"page-header small\">Personal Details</h1>\n            <router-outlet></router-outlet>\n          </div>\n\n          <div class=\"col-md-12 photolist\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n              <div class=\"col-sm-3 col-xs-3\"><img src=\"http://style.anu.edu.au/_anu/4/images/placeholders/person.png\" class=\"\" alt=\"\"> </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"col-md-12\">\n            <div class=\"panel-body\">\n            <div class=\"tex-center\"> \n              <button (click)=\"checkRecentInvites()\" style=\"border-radius: 24px;\" class=\"btn btn-primary \">\n                Received {{currentUser.received_invites.length}} friend invites\n              </button> \n              <button (click)=\"checkSentInvites()\" style=\"border-radius: 24px;\" class=\"btn btn-info \">\n                Sent {{currentUser.sent_invites.length}} friend invites\n              </button> \n              <button (click)=\"disableCheckInvitesMode()\" class=\"btn btn-circle btn-danger \">\n                <i style=\"font-size: 14px;\" class=\"glyphicon glyphicon-remove\"></i>\n              </button> \n            </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div *ngIf=\"isCheckingRecent\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Most Recent Friend Invites</h1>\n          </div>\n          <div class=\"col-md-12\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngIf=\"currentUser.received_invites.length == 0\">You have no friend invites at this time</li>\n              <li *ngFor=\"let invite of currentUser.received_invites\" class=\"list-group-item\">\n                    <button class=\"btn btn-circle btn-success\" (click)=\"acceptInvite(invite._id)\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n                    <button class=\"btn btn-circle btn-danger\" (click)=\"rejectInvite(invite._id)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    <img style=\"height: 40px;\" src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\">\n                    <a [routerLink]=\"['/home/users', invite.userId]\">{{invite.firstName}}</a> wants to be your friend\n              </li>\n            </ul>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div *ngIf=\"isCheckingSent\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Your Sent Invites</h1>\n          </div>\n          <div class=\"col-md-12\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngIf=\"currentUser.sent_invites.length == 0\">You currently have not sent any invites</li>\n              <li *ngFor=\"let invite of currentUser.sent_invites\" class=\"list-group-item\">\n                    You have sent an invite to <img style=\"height: 40px;\" src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\"> <a [routerLink]=\"['/home/users', invite.userId]\">{{invite.firstName}}</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h1 class=\"page-header small\">Friends <button class=\"btn btn-link\" (click)=\"setEditMode()\">Edit</button></h1>\n            <p class=\"page-subtitle small\">You have {{currentUser.friends.length}} friends</p>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"memberblock\">\n              <span *ngFor=\"let friend of currentUser.friends\" class=\"member\">\n                <button *ngIf=\"editMode\" style=\"display: block; margin-left: 6%; z-index: 1\" class=\"btn btn-link\" (click)=\"removeFriend(friend._id)\">Remove</button>\n                <a [routerLink]=\"['/home/users', friend.userId]\" > \n                  <img src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\">\n                </a>\n                <div class=\"memmbername\">{{friend.username}}</div>\n              </span> \n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n\n      <div class=\"col-md-8 col-sm-12 pull-left posttimeline\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div class=\"status-upload nopaddingbtm\">\n              <form>\n                <textarea class=\"form-control\" placeholder=\"What are you doing right now?\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Audio\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Video\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Picture\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Share</button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Lucky Sans<br>\n                  <small><i class=\"fa fa-clock-o\"></i> Yesterday, 2:00 am</small> </h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio. </p>\n\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> 2015</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> 25</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-share-alt\"></i> 15</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 commentsblock border-top\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Astha Smith</h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Lucky Sans</h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>\n                <div class=\"media\">\n                  <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img alt=\"64x64\" src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" class=\"media-object\"> </a> </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">Astha Smith</h4>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"btn-group pull-right postbtn\">\n            <button type=\"button\" class=\"dotbtn dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <span class=\"dots\"></span> </button>\n            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n              <li><a href=\"javascript:void(0)\">Hide this</a></li>\n              <li><a href=\"javascript:void(0)\">Report</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <div class=\"media-left\"> <a href=\"javascript:void(0)\"> <img src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" alt=\"\" class=\"media-object\"> </a> </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\"> Lucky Sans<br>\n                  <small><i class=\"fa fa-clock-o\"></i> Yesterday, 2:00 am</small> </h4>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio. </p>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> 2015</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\" glyphicon glyphicon-comment\"></i> 25</a></li>\n                  <li><a href=\"\" title=\"\"><i class=\"glyphicon glyphicon-share-alt\"></i> 15</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 border-top\">\n            <div class=\"status-upload\">\n              <form>\n                <label>Comment</label>\n                <textarea class=\"form-control\" placeholder=\"Comment here\"></textarea>\n                <br>\n                <ul class=\"nav nav-pills pull-left \">\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-bullhorn\"></i></a></li>\n                  <li><a title=\"\"><i class=\" glyphicon glyphicon-facetime-video\"></i></a></li>\n                  <li><a title=\"\"><i class=\"glyphicon glyphicon-picture\"></i></a></li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-success pull-right\"> Comment</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(_apicallService, _router, _chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._chatService = _chatService;
        this.editMode = false;
        this.isCheckingRecent = false;
        this.isCheckingSent = false;
        this.getCurrentUserInSession();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.getCurrentUserInSession = function () {
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
                    console.log('catch response rejectInvite');
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
                    console.log('catch response removeFriend');
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
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#flipkart-navbar {\n    background-color: #2874f0;\n    color: #FFFFFF;\n}\n\n.row1{\n    padding-top: 10px;\n}\n\n.row2 {\n    padding-bottom: 20px;\n}\n\n.flipkart-navbar-input {\n    padding: 11px 16px;\n    border-radius: 2px 0 0 2px;\n    border: 0 none;\n    outline: 0 none;\n    font-size: 15px;\n}\n\n.flipkart-navbar-button {\n    background-color: #ffe11b;\n    border: 1px solid #ffe11b;\n    border-radius: 0 2px 2px 0;\n    color: #565656;\n    padding: 10px 0;\n    height: 43px;\n    cursor: pointer;\n}\n\n.cart-button {\n    background-color: #2469d9;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\n    padding: 10px 0;\n    text-align: center;\n    height: 41px;\n    border-radius: 2px;\n    font-weight: 500;\n    width: 120px;\n    display: inline-block;\n    color: #FFFFFF;\n    text-decoration: none;\n    color: inherit;\n    border: none;\n    outline: none;\n}\n\n.cart-button:hover{\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n}\n\n.cart-svg {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n    margin-right: 8px;\n}\n\n.item-number {\n    border-radius: 3px;\n    background-color: rgba(0, 0, 0, .1);\n    height: 20px;\n    padding: 3px 6px;\n    font-weight: 500;\n    display: inline-block;\n    color: #fff;\n    line-height: 12px;\n    margin-left: 10px;\n}\n\n.upper-links {\n    display: inline-block;\n    padding: 0 11px;\n    line-height: 23px;\n    font-family: 'Roboto', sans-serif;\n    letter-spacing: 0;\n    color: inherit;\n    border: none;\n    outline: none;\n    font-size: 12px;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin-bottom: 0px;\n}\n\n.dropdown:hover {\n    background-color: #fff;\n}\n\n.dropdown:hover .links {\n    color: #000;\n}\n\n.dropdown:hover .dropdown-menu {\n    display: block;\n}\n\n.dropdown .dropdown-menu {\n    position: absolute;\n    top: 100%;\n    display: none;\n    background-color: #fff;\n    color: #333;\n    left: 0px;\n    border: 0;\n    border-radius: 0;\n    box-shadow: 0 4px 8px -3px #555454;\n    margin: 0;\n    padding: 0px;\n}\n\n.links {\n    color: #fff;\n    text-decoration: none;\n}\n\n.links:hover {\n    color: #fff;\n    text-decoration: none;\n}\n\n.profile-links {\n    font-size: 12px;\n    font-family: 'Roboto', sans-serif;\n    border-bottom: 1px solid #e9e9e9;\n    box-sizing: border-box;\n    display: block;\n    padding: 0 11px;\n    line-height: 23px;\n}\n\n.profile-li{\n    padding-top: 2px;\n}\n\n.largenav {\n    display: none;\n}\n\n.smallnav{\n    display: block;\n}\n\n.smallsearch{\n    margin-left: 15px;\n    margin-top: 15px;\n}\n\n.menu{\n    cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n    .largenav {\n        display: block;\n    }\n    .smallnav{\n        display: none;\n    }\n    .smallsearch{\n        margin: 0px;\n    }\n}\n\n/*Sidenav*/\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #fff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    box-shadow: 0 4px 8px -3px #555454;\n    padding-top: 0px;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n    color: #fff;        \n}\n\n@media screen and (max-height: 450px) {\n  .sidenav a {font-size: 18px;}\n}\n\n.sidenav-heading{\n    font-size: 36px;\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Registration</legend>\n    <div style=\"color: red;\" *ngIf=\"isDuplicate && username\">\n    <p *ngIf=\"username.errors.required\">Username has already been taken.</p> \n  </div>\n  <form (submit)=\"registerUser(); form.reset()\" #form=\"ngForm\" >\n    <p>\n      <label>Username: \n        <input \n          type=\"text\" \n          name=\"username\" \n          required \n          minlength=\"5\" \n          [(ngModel)]=\"user.username\"\n          #username='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n    <p *ngIf=\"username.errors.required\">Username is Required</p> \n    <p *ngIf=\"username.errors.minlength\">Username must be at least 5 characters long</p> \n  </div>\n    <p>\n      <label>Email: \n          <input \n            type=\"text\" \n            name=\"email\" \n            required \n            pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n            [(ngModel)]=\"user.email\"\n            #email='ngModel'\n          />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n    <p *ngIf=\"email.errors.required\">Email is Required</p> \n    <p *ngIf=\"email.errors.pattern\">Please enter a valid email</p> \n  </div>\n    <p>\n      <label>First Name: \n        <input \n          type=\"text\" \n          name=\"firstName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"user.firstName\"\n          #firstName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n    <p *ngIf=\"firstName.errors.required\">First Name is Required</p> \n    <p *ngIf=\"firstName.errors.minlength\">First Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Last Name: \n        <input \n          type=\"text\" \n          name=\"lastName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"user.lastName\"\n          #lastName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Password: \n        <input \n          type=\"password\" \n          name=\"password\" \n          required \n          minlength=\"8\" \n          [(ngModel)]=\"user.password\"\n          #password='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n    <p *ngIf=\"password.errors.required\">Password is Required</p> \n    <p *ngIf=\"password.errors.minlength\">Password must be at least 8 characters long</p> \n  </div>\n    <p>\n      <label>Password Confirmation: \n        <input type=\"password\" name=\"passwordConfirmation\" required [(ngModel)] = \"user.passwordConfirmation\" pattern=\"{{user.password}}\" #passwordConfirmation=\"ngModel\"/>\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!passwordConfirmation.valid && (passwordConfirmation.dirty || passwordConfirmation.touched)\">\n    <p *ngIf=\"passwordConfirmation.errors.required\">Password Confirmation is Required</p> \n    <p *ngIf=\"passwordConfirmation.errors.pattern\">Password Confirmation must match with Password</p> \n  </div>\n    <input type=\"submit\" value=\"Register\" [disabled] = \"password.invalid || lastName.invalid || firstName.invalid || passwordConfirmation.invalid || email.invalid || username.invalid\">\n  </form>\n</fieldset>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
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
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
            }
            else {
                // console.log('success registering user');
                _this.isDuplicate = false;
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegistrationComponent);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-search-manager',
        template: __webpack_require__("../../../../../src/app/search-manager/search-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchManagerComponent);

var _a, _b;
//# sourceMappingURL=search-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".music-results {\n    width: 90%;\n}\n\nfieldset {\n    width:70%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Search Music Results</p>\n<fieldset *ngIf=\"trackSearchResults\">\n  <legend>Tracks</legend>\n  <table class=\"music-results\" >\n    <tr>\n      <th>Title</th>\n      <th>Artist</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let track of trackSearchResults\">\n      <td>{{track.name}}</td>\n      <td>{{track.artist}}</td>\n      <td>\n        <a href=\"#\">Add to Favorites</a>\n      </td>\n    </tr>\n  </table>\n</fieldset>\n<fieldset *ngIf=\"albumSearchResults\">\n  <legend>Album</legend>\n  <table class=\"music-results\" >\n    <tr>\n      <th>Title</th>\n      <th>Artist</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let album of albumSearchResults\">\n      <td>{{album.name}}</td>\n      <td>{{album.artist}}</td>\n      <td>\n        <a href=\"#\">Browse Album's Songs</a>\n      </td>\n    </tr>\n  </table>\n</fieldset>\n<!--<fieldset *ngIf=\"artistSearchResults\">\n  <legend>Artist</legend>\n  <table class=\"music-results\" >\n    <tr>\n      <th>Name</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let artist of artistSearchResults\">\n      <td>{{artist.name}}</td>\n      <td>\n        <a href=\"#\">Browse Artist's Albums</a>\n        <a href=\"#\">Browse Artist's Songs</a>\n      </td>\n    </tr>\n  </table>\n</fieldset>-->"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-music/search-music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__ = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            console.log('hiiiii');
            // console.log(search);
            _this.searchMusic(music);
        });
    };
    SearchMusicComponent.prototype.searchMusic = function (search) {
        var _this = this;
        if (search) {
            this._lastFmApiService.searchTrack(search)
                .then(function (data) {
                _this.trackSearchResults = data.results.trackmatches.track;
                console.log(_this.trackSearchResults);
            })
                .catch(function (error) {
                console.log(error);
            });
            this._lastFmApiService.searchAlbum(search)
                .then(function (data) {
                _this.albumSearchResults = data.results.albummatches.album;
                console.log(_this.albumSearchResults);
            })
                .catch(function (error) {
                console.log(error);
            });
            this._lastFmApiService.searchArtist(search)
                .then(function (data) {
                _this.artistSearchResults = data.results.artistmatches.artist;
                console.log(_this.artistSearchResults);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    SearchMusicComponent.prototype.getTopMusic = function () {
        var _this = this;
        this._lastFmApiService.getTopArtist()
            .then(function (data) {
            _this.artistSearchResults = data;
            console.log(_this.artistSearchResults);
        })
            .catch(function (error) {
            console.log(error);
        });
        this._lastFmApiService.getTopTracks()
            .then(function (data) {
            _this.trackSearchResults = data;
            console.log(_this.trackSearchResults);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SearchMusicComponent.prototype.ngOnDestroy = function () {
        console.log('search music component destroy');
        this._appComponent.setIsInMusicBrowser();
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    return SearchMusicComponent;
}());
SearchMusicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-search-music',
        template: __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__["a" /* LastFmApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__["a" /* LastFmApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], SearchMusicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-music.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search User Results</h1>\n<table>\n  <tr>\n    <th>Title</th>\n    <th>Owner</th>\n  </tr>\n  <tr *ngFor=\"let room of showSearchResultRooms\">\n      <td><a [routerLink]=\"['/home/room', room.roomId]\">{{room.title}}</a>\n      </td>\n      <td><a [routerLink]=\"['/home/users', room._owner.userId]\">{{room._owner.username}}</a>\n      </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-search-rooms',
        template: __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _d || Object])
], SearchRoomsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search User Results</h1>\n<table>\n  <tr>\n    <th>Username</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let user of showSearchResultUsers\">\n      <td *ngIf=\"user && user._id != currentUser._id\">{{user.username}}</td>\n      <td *ngIf=\"user && user._id != currentUser._id\">\n        <a [routerLink]=\"['/home/users', user.userId]\">Show Profile</a>\n        <button *ngIf=\"!user.received_invites.includes(currentUser._id) && !isFriendOfCurrentUser(user.friends)\" (click)=\"sendInvite(user.userId)\">Send Invite</button>\n        <span *ngIf=\"user.received_invites.includes(currentUser._id)\">Invite Sent</span>\n        <span *ngIf=\"isFriendOfCurrentUser(user.friends)\">Friend</span>\n      </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-users/search-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-search-users',
        template: __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _d || Object])
], SearchUsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
        // Observable string sources
        this.searchValueSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.searchValueMusicSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.searchRoomSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        // Observable string streams
        this.searchValue$ = this.searchValueSource.asObservable();
        this.searchRoom$ = this.searchRoomSource.asObservable();
        this.searchValueMusic$ = this.searchValueMusicSource.asObservable();
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
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

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