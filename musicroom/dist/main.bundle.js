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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_handler_session_handler_component__ = __webpack_require__("../../../../../src/app/session-handler/session-handler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_room_new_room_component__ = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_room_room_component__ = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_manager_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_manager_search_music_search_music_component__ = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_current_profile_current_profile_component__ = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_15__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'logout', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */], children: [
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
                    { path: 'current', component: __WEBPACK_IMPORTED_MODULE_6__profile_current_profile_current_profile_component__["a" /* CurrentProfileComponent */] }
                ] },
            { path: 'search/results', component: __WEBPACK_IMPORTED_MODULE_9__search_manager_search_manager_component__["a" /* SearchManagerComponent */], children: [
                    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_5__search_manager_search_music_search_music_component__["a" /* SearchMusicComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__search_manager_search_users_search_users_component__["a" /* SearchUsersComponent */] },
                    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_0__search_manager_search_rooms_search_rooms_component__["a" /* SearchRoomsComponent */] }
                ] },
            { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_8__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */] },
            { path: 'room/new', component: __WEBPACK_IMPORTED_MODULE_2__new_room_new_room_component__["a" /* NewRoomComponent */] },
            { path: 'room/:id', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_room_room_component__["a" /* RoomComponent */] },
        ] },
    { path: 'session', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__session_handler_session_handler_component__["a" /* SessionHandlerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_17__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_17__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <fieldset style=\"height:0px;\">\n  <div *ngIf=\"searchMode==='users'\" style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchPageWithSearchVal()\">\n      <input type=\"text\" name=\"searchU\" placeholder=\"Search User\" [(ngModel)]=\"searchVal\" (keyup) = \"searchUsers()\" />\n      <input type=\"submit\" value=\"Search Users\" />\n    </form>\n  </div>\n\n  <div *ngIf=\"searchMode==='music'\"style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"searchMusic()\">\n      <input type=\"text\" name=\"searchM\" placeholder=\"Search Music\" [(ngModel)]=\"searchVal2\" />\n      <input type=\"submit\" value=\"Search Music\" />\n    </form>\n  </div>\n\n  <div *ngIf=\"searchMode==='rooms'\"style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchRoomPageWithSearchVal3()\">\n      <input type=\"text\" name=\"searchM\" placeholder=\"Search Chatrooms\" [(ngModel)]=\"searchVal3\" (keyup) = \"searchRooms()\"/>\n      <input type=\"submit\" value=\"Search Rooms\" />\n    </form>\n  </div>\n\n  <select *ngIf=\"currentUser\" name=\"searchMode\" [(ngModel)]=\"searchMode\">\n    <option value=\"users\">Users</option>\n    <option value=\"music\">Music</option>\n    <option value=\"rooms\">Chatrooms</option>\n  </select>\n\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/logout']\">Logout</a>\n</fieldset> -->\n\n<router-outlet></router-outlet>"

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
    // sendMsg(msg){
    //    this.chatService.sendMessage(msg);
    // }
    AppComponent.prototype.searchUsers = function () {
        // console.log('hello');
        this._searchService.searchUsers(this.searchVal);
    };
    AppComponent.prototype.searchRooms = function () {
        // console.log('hello');
        this._searchService.searchRooms(this.searchVal3);
    };
    AppComponent.prototype.searchMusic = function () {
        // console.log('hello');
        if (!this.isInMusicBrowser) {
            console.log('not in music browser so redirecting');
            this._route.navigate(['home', 'search', 'results', 'music', { q: this.searchVal2 }]);
            this.searchVal2 = '';
        }
        else {
            console.log('in music browser so just updating search results');
            this._searchService.searchMusic(this.searchVal2);
            this.searchVal2 = '';
        }
    };
    AppComponent.prototype.redirectToSearchPageWithSearchVal = function () {
        // console.log('redirecting to Search page with keyword SearchVal');
        // console.log(this.searchVal);
        this._route.navigate(['home', 'search', 'results', 'users', { q: this.searchVal }]);
    };
    AppComponent.prototype.redirectToSearchRoomPageWithSearchVal3 = function () {
        // console.log('redirecting to Search page with keyword SearchVal');
        // console.log(this.searchVal);
        this._route.navigate(['home', 'search', 'results', 'rooms', { q: this.searchVal3 }]);
    };
    AppComponent.prototype.getCurrentUserInSession = function () {
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
                _this.currentUser = false;
            }
        })
            .catch(function (error) {
            // console.log('error getting current user');
            // console.log(error);
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__["a" /* LastFmApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__last_fm_api_service__["a" /* LastFmApiService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__last_fm_api_service__ = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_room_room_component__ = __webpack_require__("../../../../../src/app/dashboard/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_current_profile_current_profile_component__ = __webpack_require__("../../../../../src/app/profile/current-profile/current-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_manager_search_music_search_music_component__ = __webpack_require__("../../../../../src/app/search-manager/search-music/search-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__search_manager_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/search-manager/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__session_handler_session_handler_component__ = __webpack_require__("../../../../../src/app/session-handler/session-handler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__new_room_new_room_component__ = __webpack_require__("../../../../../src/app/new-room/new-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_manager_search_rooms_search_rooms_component__ = __webpack_require__("../../../../../src/app/search-manager/search-rooms/search-rooms.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__search_manager_search_manager_component__["a" /* SearchManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_22__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__profile_current_profile_current_profile_component__["a" /* CurrentProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__search_manager_search_music_search_music_component__["a" /* SearchMusicComponent */],
            __WEBPACK_IMPORTED_MODULE_26__search_manager_search_users_search_users_component__["a" /* SearchUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_27__session_handler_session_handler_component__["a" /* SessionHandlerComponent */],
            __WEBPACK_IMPORTED_MODULE_28__new_room_new_room_component__["a" /* NewRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_29__search_manager_search_rooms_search_rooms_component__["a" /* SearchRoomsComponent */],
        ],
        imports: [
            // ngx-bootstrap
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_10__api_call_service__["a" /* ApiCallService */],
            __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_1__last_fm_api_service__["a" /* LastFmApiService */],
            __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__["Md5"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function ChatService(socket) {
        this.socket = socket;
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
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n.wrapper {\n    height: 100vh;\n}\n\n.inblock {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.joined {\n    height:95%;\n    width: 10%;\n}\n\n.main {\n    height: 95%;\n    width: 73%;\n}\n\n.secondary {\n    height: 95%;\n    width: 10%;\n}\n\n.subcomponents {\n    height: 45%;\n}\n\n.online {\n\n}\n\n.favorites {\n\n}\n\n.router {\n    height: 85%;\n}\n\n.active-music {\n    height: 8%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n\n<div class=\"header\">\n    <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n        <div class=\"container-fluid\">\n      \n        <div class=\"navbar-header\" dropdown>\n            <button type=\"button\" class=\"navbar-toggle collapsed dropdown\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n        </div>\n      \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li>\n            <li><span *ngIf=\"searchMode==='users'\" style=\"display: inline-block;\">\n                <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchPageWithSearchVal()\">\n                <input type=\"text\" name=\"searchU\" placeholder=\"Search User\" [(ngModel)]=\"searchVal\" (keyup) = \"searchUsers()\" />\n                <input type=\"submit\" value=\"Search Users\" />\n                </form>\n                </span>\n            </li>\n            <li><span *ngIf=\"searchMode==='music'\"style=\"display: inline-block;\">\n                <form *ngIf=\"currentUser\" (submit) = \"searchMusic()\">\n                <input type=\"text\" name=\"searchM\" placeholder=\"Search Music\" [(ngModel)]=\"searchVal2\" />\n                <input type=\"submit\" value=\"Search Music\" />\n                </form>\n                </span>           \n            </li>\n            <li><span *ngIf=\"searchMode==='rooms'\"style=\"display: inline-block;\">\n                <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchRoomPageWithSearchVal3()\">\n                <input type=\"text\" name=\"searchM\" placeholder=\"Search Chatrooms\" [(ngModel)]=\"searchVal3\" (keyup) = \"searchRooms()\"/>\n                <input type=\"submit\" value=\"Search Rooms\" />\n                </form>\n                </span>    \n            </li>\n            <li><select *ngIf=\"currentUser\" name=\"searchMode\" [(ngModel)]=\"searchMode\">\n                <option selected value=\"users\">Users</option>\n                <option value=\"music\">Music</option>\n                <option value=\"rooms\">Chatrooms</option>\n                </select>\n            </li>\n            <li><a *ngIf=\"currentUser\" [routerLink]=\"['/logout']\">Logout</a></li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n    </nav>\n</div>\n<a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a>\n<a *ngIf=\"currentUser\" [routerLink]=\"['/home/profile/current']\">My Profile</a>\n\n<!-- <p>You now in dashboard</p> -->\n\n<!-- <router-outlet></router-outlet> -->\n<!-- <a [routerLink]=\"['room']\">qqqq</a> -->\n<fieldset class=\"wrapper\">\n    <h3>Hello! {{ user }} </h3>\n    <fieldset class=\"joined inblock\">\n        <legend>Joined Rooms</legend>\n        <a [routerLink]='[\"room\",\"new\"]' >Create Room</a>\n        <div *ngFor=\"let room of currentUser.joinedRooms\">\n            <a [routerLink]=\"['room', room.roomId]\">{{room.title}}</a>\n        </div>\n    </fieldset>\n    <fieldset class=\"main inblock\">\n        <legend>Main View</legend>\n        <fieldset class=\"router\">\n            <legend>Router-Outlet</legend>\n            <router-outlet></router-outlet>\n        </fieldset>\n    <fieldset class=\"active-music\">\n        <legend>Active MusicRoom/Player present if active room is minimized</legend>\n    </fieldset>\n    </fieldset>\n    <fieldset class=\"secondary inblock\">\n        <legend>Secondary View</legend>\n        <fieldset class=\"online subcomponents\">\n            <legend>See who's online</legend>\n        </fieldset>\n        <fieldset class=\"favorites subcomponents\">\n            <legend>Current User's Favorite Songs</legend>\n        </fieldset>\n    </fieldset>\n\n\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
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





var DashboardComponent = (function () {
    function DashboardComponent(_apicallService, _router, chatService) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.chatService = chatService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.allRooms = [];
        this.userRooms = [];
        this.room = {};
        this.getCurrentUserInSession();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var self = this;
        this.getAllRooms();
        // this.chatService
        // .getMessage(this.room.roomId)
        // .subscribe(data => {
        //   console.log("GOT IT");
        //   self.getCurrentUserInSession();
        // });
    };
    DashboardComponent.prototype.getCurrentUserInSession = function () {
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
    DashboardComponent.prototype.getAllRooms = function () {
        var _this = this;
        this._apicallService.getRooms().then(function (rooms) {
            _this.allRooms = rooms;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _c || Object])
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

module.exports = "<div style=\"border: 1px solid black;\">\n  {{room.title}}\n  <div *ngIf=\"userInRoom\">\n    <div id=\"allMessages\">\n      <p *ngFor=\"let msg of room.chatlog\">{{msg.user}}: {{msg.message}}</p>\n    </div>\n    <form (submit)=\"sendMessage()\">\n      <input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" name=\"msg\">\n      <input type=\"submit\" value=\"Send\">\n    </form>\n  </div>\n  <div *ngIf=\"!userInRoom\">\n    <div *ngIf=\"room.isPublic\">\n      <button (click)=\"joinRoom()\">Join Room</button>\n    </div>\n    <div *ngIf=\"!room.isPublic\">\n      <input type=\"text\" name=\"roomPassword\" [(ngModel)]=\"roomPW\" placeholder=\"Enter password\">\n      <button (click)=\"joinRoom()\" [disabled]=\"roomPW != room.password\">Join Room</button>\n    </div>\n  </div>\n</div>"

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
    function RoomComponent(_route, apiService, chatService, _dashboardComp) {
        this._route = _route;
        this.apiService = apiService;
        this.chatService = chatService;
        this._dashboardComp = _dashboardComp;
        this.message = "";
        this.userInRoom = false;
        this.roomPW = "";
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
            console.log(_this.room._roomMembers[0]);
            console.log(_this.room._owner);
            if (_this.room._roomMembers.includes(result._id) || _this.room._owner == result._id)
                _this.userInRoom = true;
            else
                _this.userInRoom = false;
            console.log(_this.userInRoom);
        });
    };
    RoomComponent.prototype.joinRoom = function () {
        var self = this;
        this.apiService.joinRoom(this.room.roomId, this.roomPW).then(function (result) {
            self.refreshRoom();
            self._dashboardComp.getCurrentUserInSession();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]) === "function" && _d || Object])
], RoomComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-dp{\n    min-width: 250px;\n    padding: 0 14px 14px 0;\n    overflow:hidden;\n    background-color:rgba(255,255,255,.8);\n}\n#login-dp .help-block{\n    font-size:12px    \n}\n#login-dp .bottom{\n    background-color:rgba(255,255,255,.8);\n    border-top:1px solid #ddd;\n    clear:both;\n    padding:14px;\n}\n#login-dp .form-group {\n    margin-bottom: 10px;\n}\nh1{\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size:70pt;\n    color: white;\n    /* color: rgba(255, 255, 255, 0.4); */\n    letter-spacing: 2px;\n    margin: 0px;\n}\n.bigwrapper{\n    -ms-flex-line-pack: center;\n        align-content: center;\n    width: 600px;\n    height:auto;\n    vertical-align: top;\n    \n}\n\n/* background video */\n.header-container{\n    width: 100%;\n    height: 1080px;\n    border-left: none;\n    border-right: none;\n    position: fixed;\n    padding: 20px;\n    background-color: black;\n    margin-bottom: 0;\n    border-radius: 0;\n}\n.video-container{\n    vertical-align: top;\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/squaredot.png) center fixed;\n    /* background: url(/record_player.jpg) no-repeat center center fixed; */\n}\nvideo{\n    position: fixed;\n    z-index: -1;\n    /* opacity: 0.8; */\n    width: 100%;\n    \n}\n\n/* #carousel-box{\n    margin: 200px 0 0 200px;\n    max-width:500px;\n    height:500px;\n    background-color: white;\n    vertical-align: top;\n} */\n\n#myCarousel{\n    padding-top:15px;\n    height: 530px;\n    border: 1px solid grey;\n    margin-top:250px;\n}\n\n/* Carousel */\n.img-main-carousel{\n    max-width: 500px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n\n  <div class=\"header\">\n  <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\" dropdown>\n        <button type=\"button\" class=\"navbar-toggle collapsed dropdown\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li> -->\n          <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n          <li><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n          <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  </div>\n\n  <!-- background video -->\n  <div class=\"bigwrapper\">\n    \n  <div class=\"header-container\">\n    <img src=\"/logo2.png\" style=\"max-height: 100px;\">\n    <div id=\"title\" class=\"col-sm-4 col-sm-offset-1\" style=\"max-width:500px;\">\n      <p style=\"color:white; font-size: 16pt; margin-bottom: 0;\">welcome to </p>\n      <h1>CHATTERBOX </h1>\n      <p style=\"color:white; font-size: 16pt;\">a place to chat about music</p>\n    </div>\n    <div class=\"video-container\">\n      <video preload=\"true\" autoplay=\"autoplay\" loop=\"loop\" volume=\"0\" poster=\"/record_player.jpg\">\n        <source src=\"/record_player.mp4\" type=\"video/mp4\">\n        <source src=\"/record_player.webm\" type=\"video/webm\">\n        <source src=\"/record_player.ogv\" type=\"video/ogg\">\n      </video>\n    </div>\n  </div>\n</div>\n\n\n  <!-- carousel box -->\n  <!-- <div id=\"carousel-box\" class=\"pad-section\">\n    <div class=\"container\">\n    <div class=\"row\"> -->\n    <div id=\"myCarousel\" class=\"carousel slide\" class=\"col-sm-4 col-sm-offset-2\" style=\"max-width:500px;\">\n      <carousel class=\"text-center\">\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-bruno-mars-01.jpg\" alt=\"First slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Taylor Swift</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-Alicia-Keys-03.jpg\" alt=\"Second slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Alicia Keys</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-Blake-shelton-01.jpg\" alt=\"Third slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Blake Shelton</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-Selena-Gomez-01.jpg\" alt=\"Fourth slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Selena Gomez</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-Rhianna-01.jpg\" alt=\"Fifth slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Rhianna</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-Lady-Gaga-01.jpg\" alt=\"Six slide\">\n          <!-- <div class=\"carousel-caption\">\n            <h4>Lady Gaga</h4>\n          </div> -->\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-justin-bieber-01.jpg\" alt=\"Seven slide\">\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-John-Legend-01.jpg\" alt=\"Eight slide\">\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-IZ-01.jpg\" alt=\"Nine slide\">\n        </slide>\n        <slide>\n          <img class=\"img-main-carousel\" src=\"/album/500-celine-dion-01.jpg\" alt=\"Ten slide\">\n        </slide>\n      </carousel>\n    <!-- </div>\n    </div>\n    </div> -->\n  </div>"

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
exports.push([module.i, ".wrap{\n    position: absolute;\n    top: 60px;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/bg1.jpg) no-repeat center center fixed;\n}\nh3{\n    color: #CECECE;\n}\n\n#loginform{\n    width: 350px;\n    /* height: 600px; */\n    /* margin-left:550px; */\n    /* background-color:rgba(255,255,255,.3); */\n    padding:25px;\n    vertical-align: top;\n    border: 1px solid grey;\n    margin-top: 100px;\n}\n.login1{\n    color: #CECECE;\n}\n.login1a{\n    width: 100%;\n}\n.login1b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n\n.login2{\n    margin-top: 20px;\n    color: #CECECE;\n}\n.login2a{\n    width: 100%;\n}\n.login2b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.loginbtn{\n    margin-top: 15px;\n    background-color: #7E6443;\n    width:100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  \n  \n    <div class=\"header\">\n    <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n      <div class=\"container-fluid\">\n  \n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n        </div>\n  \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n            <li><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    </div>\n\n<div class=\"wrap\">\n<div class=\"container-fluid\" id=\"loginform\" class=\"col-sm-4 col-sm-offset-5\">\n  <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n        <!-- <div class=\"col-sm-12 col-md-12 col-lg-11\"> -->\n        <section class=\"col-sm-12 align-right\" style=\"margin-top: 20px;\">\n       \n          <h3>Login</h3>\n          <div style=\"color: red;\" *ngIf=\"incorrectLogin\">\n            <p>Invalid Login Credentials. Please try again.</p> \n          </div>\n\n          <div class=\"container-fluid\"></div>\n          <form id=\"\" (submit)=\"loginUser(); form.reset()\" #form=\"ngForm\">\n\n              <label for=\"username\" class=\"login1\">Username: </label>\n              <input class=\"login1a\" type=\"text\" name=\"username\" required [(ngModel)] = \"user.username\" #username=\"ngModel\"/>\n              <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n                <p class=\"login1b\" *ngIf=\"username.errors.required\">** Username is Required **</p> \n              </div>\n            <p>\n              <label for=\"password\" class=\"login2\">Password: </label>\n              <input class=\"login2a\" type=\"password\" name=\"password\" required [(ngModel)] = \"user.password\" #password=\"ngModel\" />\n            </p>\n              <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n                <p class=\"login2b\" *ngIf=\"password.errors.required\">** Password is Required **</p> \n              </div>\n            <input class=\"loginbtn\" type=\"submit\" value=\"Login\" [disabled] = \"password.invalid || username.invalid\" />\n          </form>\n        </section>\n      <!-- </div> -->\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
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





var LoginComponent = (function () {
    // currentUser;
    function LoginComponent(_apicallService, _router, _appComponent) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.incorrectLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        // console.log('login User');
        // console.log(this.user);
        this._apicallService.loginUser(this.user)
            .then(function (data) {
            // console.log('success logging in user');
            // console.log(data);
            if (!data) {
                _this.incorrectLogin = true;
                _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
            }
            else {
                // this.currentUser = data;
                _this.incorrectLogin = false;
                _this._appComponent.getCurrentUserInSession();
                // console.log(this.currentUser);
                // if (!this.currentUser.lastfmSessionToken && !this.currentUser.lastfmSessionSig) {
                //   window.location.href = 'http://www.last.fm/api/auth/?api_key=c595e718d23c51ef68c0d547f1511fe7&cb=http://localhost:8000/session/';
                // } else {
                // add a test if session token is valid later
                // ---------------
                _this._router.navigate(['home']);
                // }
            }
        })
            .catch(function (error) {
            // console.log('error logging in user');
            // console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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




var LogoutComponent = (function () {
    function LogoutComponent(_apicallService, _router, _appComponent) {
        var _this = this;
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this._apicallService.logoutUser()
            .then(function (data) {
            // console.log('success logging user out');
            _this._appComponent.getCurrentUserInSession();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            // console.log('error logging user out');
            _this._router.navigate(['']);
        });
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
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
    function User(_id, userId, username, email, firstName, lastName, password, description, profileImageUrl, isLoggedIn, favoriteSongs, joinedRooms, ownedRooms, friends, received_invites, sent_invites, created_at, updated_at) {
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h1>Other User's Profile</h1>\n  <h2>Username: {{user.username}}</h2>\n  <p>Email: {{user.email}}</p>\n  <p>First Name: {{user.firstName}}</p>\n  <p>Last Name: {{user.lastName}}</p>\n  <p>Description: {{user.description}}</p>\n<h3>Friends</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let friend of user.friends\">\n      <td *ngIf=\"friend && friend._id != currentUser._id\"><a [routerLink]=\"['/home/users', friend.userId]\">{{friend.username}}</a></td>\n      <td *ngIf=\"friend && friend._id != currentUser._id\">\n        <button *ngIf=\"!friend.received_invites.includes(currentUser._id) && !isFriendOfCurrentUser(friend.friends, currentUser._id)\" (click)=\"sendInvite(friend.userId)\">Send Invite</button>\n        <span *ngIf=\"friend.received_invites.includes(currentUser._id)\">Invite Sent</span>\n        <span *ngIf=\"isFriendOfCurrentUser(friend.friends, currentUser._id)\">Friend</span>\n      </td>\n    </tr>\n  </table>\n</div>\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], OtherUserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=other-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/current-profile/current-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/current-profile/current-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\n  <a [routerLink]=\"['/home/profile/edit']\">Edit Profile</a>\n  <p>Username: {{currentUser.username}}</p>\n  <p>Email: {{currentUser.email}}</p>\n  <p>First Name: {{currentUser.firstName}}</p>\n  <p>Last Name: {{currentUser.lastName}}</p>\n  <p>Description: {{currentUser.description}}</p>\n</div>\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CurrentProfileComponent);

var _a, _b;
//# sourceMappingURL=current-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\n  <form (submit)=\"editCurrentUser()\">\n  <input type=\"submit\" value=\"Save\" [disabled] = \"lastName.invalid || firstName.invalid || email.invalid\">\n  <p>Username: {{currentUser.username}}</p>\n  <p>\n    <label>Email: \n        <input \n          type=\"text\" \n          name=\"email\" \n          required \n          pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n          [(ngModel)]=\"currentUser.email\"\n          #email='ngModel'\n        />\n    </label>\n  </p>\n  <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n    <p *ngIf=\"email.errors.required\">Email is Required</p> \n    <p *ngIf=\"email.errors.pattern\">Please enter a valid email</p> \n  </div>\n    <p>\n      <label>First Name: \n        <input \n          type=\"text\" \n          name=\"firstName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"currentUser.firstName\"\n          #firstName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n    <p *ngIf=\"firstName.errors.required\">First Name is Required</p> \n    <p *ngIf=\"firstName.errors.minlength\">First Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Last Name: \n        <input \n          type=\"text\" \n          name=\"lastName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"currentUser.lastName\"\n          #lastName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Description (optional): \n        <textarea \n          type=\"text\" \n          name=\"description\" \n          [(ngModel)]=\"currentUser.description\"\n          #description='ngModel'\n        ></textarea>\n      </label>\n    </p>\n  </form>\n</div>\n\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], EditProfileComponent);

var _a, _b;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\n  <h1>My Profile</h1>\n  <router-outlet></router-outlet>\n  <h3>Invites</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let invite of currentUser.received_invites\">\n      <td>{{invite.username}}</td>\n      <td>\n        <button (click)=\"acceptInvite(invite._id)\">Accept Invite</button>\n        <button (click)=\"rejectInvite(invite._id)\">Reject Invite</button>\n      </td>\n    </tr>\n  </table>\n  <h3>Friends</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let friend of currentUser.friends\">\n      <td>\n        <a [routerLink]=\"['/home/users', friend.userId]\">{{friend.username}}</a>\n      </td>\n      <td>\n        <button (click)=\"removeFriend(friend._id)\">Remove Friend</button>\n      </td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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



var ProfileComponent = (function () {
    function ProfileComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.getCurrentUserInSession();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.getCurrentUserInSession = function () {
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
    ProfileComponent.prototype.acceptInvite = function (invite_id) {
        var _this = this;
        // console.log('controller accepting invite');
        var receivedInvites = this.currentUser.received_invites;
        for (var _i = 0, receivedInvites_1 = receivedInvites; _i < receivedInvites_1.length; _i++) {
            var invite = receivedInvites_1[_i];
            if (invite._id === invite_id) {
                // console.log('found invite');
                var inviteId = { inviteId: invite_id };
                this._apicallService.addFriendAndUpdateReceivedInvite(inviteId)
                    .then(function (data) {
                    // console.log('then response addFriendAndUpdateReceivedInvite');
                    // console.log(data);
                    _this.getCurrentUserInSession();
                })
                    .catch(function (error) {
                    // console.log('catch response addFriendAndUpdateReceivedInvite');
                    // console.log(error);
                });
            }
        }
    };
    ProfileComponent.prototype.rejectInvite = function (invite_id) {
        var _this = this;
        // console.log('controller rejecting invite');
        var receivedInvites = this.currentUser.received_invites;
        for (var _i = 0, receivedInvites_2 = receivedInvites; _i < receivedInvites_2.length; _i++) {
            var invite = receivedInvites_2[_i];
            if (invite._id === invite_id) {
                // console.log('found invite');
                var inviteId = { inviteId: invite_id };
                this._apicallService.rejectInvite(inviteId)
                    .then(function (data) {
                    // console.log('then response rejectInvite');
                    // console.log(data);
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
        // console.log('controller removing friend');
        var friendList = this.currentUser.friends;
        for (var _i = 0, friendList_1 = friendList; _i < friendList_1.length; _i++) {
            var friend = friendList_1[_i];
            if (friend._id === friend_id) {
                // console.log('found invite');
                var friendId = { friendId: friend_id };
                this._apicallService.removeFriend(friendId)
                    .then(function (data) {
                    // console.log('then response removeFriend');
                    // console.log(data);
                    _this.getCurrentUserInSession();
                })
                    .catch(function (error) {
                    console.log('catch response removeFriend');
                    console.log(error);
                });
            }
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap{\n    position: absolute;\n    top: 60px;\n    left: 0%;\n    height: 1080px;\n    width: 100%;\n    overflow: hidden;\n    background: url(/bg1.jpg) no-repeat center center fixed;\n}\nh3{\n    color: #CECECE;\n}\n\n#regisform{\n    width: 350px;\n    /* height: 600px; */\n    /* margin-left:550px; */\n    /* background-color:rgba(255,255,255,.3); */\n    padding:25px;\n    vertical-align: top;\n    border: 1px solid grey;\n}\n.regis0{\n    color: #CECECE;\n}\n\n.regis0a{\n    width: 100%;\n}\n.regis0b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis1{\n    color: #CECECE;\n}\n.regis1a{\n    width: 100%;\n}\n.regis1b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis2{\n    color: #CECECE;\n}\n.regis2a{\n    width: 100%;\n}\n.regis2b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis3{\n    color: #CECECE;\n}\n.regis3a{\n    width: 100%;\n}\n.regis3b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis4{\n    color: #CECECE;\n}\n.regis4a{\n    width: 100%;\n}\n.regis4b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regis5{\n    color: #CECECE;\n}\n.regis5a{\n    width: 100%;\n}\n.regis5b{\n    font-size: 9pt;\n    text-align: right;\n    margin-top: 5px;\n    vertical-align: top;\n}\n.regisbtn{\n    margin-top: 15px;\n    background-color: #7E6443;\n    width:100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n  \n  \n    <div class=\"header\">\n    <nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\" style=\"vertical-align: top; margin-bottom: 0; height: 60px; border-radius:0;\">\n      <div class=\"container-fluid\">\n  \n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px; color:white;\">CHATTERBOX</a>\n        </div>\n  \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/']\" style=\"padding-top:19px;\">Home</a></li> -->\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\" style=\"padding-top:19px;\"><b>Register</b> <span class=\"caret\"></span></a></li>\n            <li><p class=\"navbar-text\" style=\"padding-top:4px;\">Already have an account?</p></li>\n            <li><a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\" style=\"padding-top:19px;\"><b>Login</b> <span class=\"caret\"></span></a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    </div>\n\n\n<div class=\"wrap\">\n<div class=\"container-fluid\" id=\"regisform\" class=\"col-sm-4 col-sm-offset-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-1 col-lg-4\"></div>\n          <!-- <div class=\"col-sm-12 col-md-12 col-lg-11\"> -->\n          <section class=\"col-sm-12 align-right\" style=\"margin-top: 20px;\">\n              <h3>Registration</h3>\n                <div style=\"color: red;\" *ngIf=\"isDuplicate && username\">\n                <p *ngIf=\"username.errors.required\">** Username has already been taken **</p> \n              </div>\n              <form (submit)=\"registerUser(); form.reset()\" #form=\"ngForm\" >\n                <p>\n                  <label for=\"username\" class=\"regis0\">Username:  </label>\n                    <input class=\"regis0a\"\n                      type=\"text\" \n                      name=\"username\" \n                      required \n                      minlength=\"5\" \n                      [(ngModel)]=\"user.username\"\n                      #username='ngModel'\n                    />\n                \n                </p>\n              <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n                <p class=\"regis0b\" *ngIf=\"username.errors.required\">** Username is Required **</p> \n                <p class=\"regis0b\" *ngIf=\"username.errors.minlength\">** Username must be at least 5 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"email\" class=\"regis1\">Email:</label>\n                      <input class=\"regis1a\"\n                        type=\"text\" \n                        name=\"email\" \n                        required \n                        pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n                        [(ngModel)]=\"user.email\"\n                        #email='ngModel'\n                      />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                <p class=\"regis1b\" *ngIf=\"email.errors.required\">** Email is Required **</p> \n                <p class=\"regis1b\" *ngIf=\"email.errors.pattern\">** Please enter a valid email **</p> \n              </div>\n                <p>\n                  <label for=\"firstname\" class=\"regis2\">First Name: </label>\n                    <input class=\"regis2a\"\n                      type=\"text\" \n                      name=\"firstName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"user.firstName\"\n                      #firstName='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n                <p class=\"regis2b\" *ngIf=\"firstName.errors.required\">** First Name is Required **</p> \n                <p class=\"regis2b\" *ngIf=\"firstName.errors.minlength\">** First Name must be at least 2 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"lastname\" class=\"regis3\">Last Name: </label>\n                    <input class=\"regis3a\"\n                      type=\"text\" \n                      name=\"lastName\" \n                      required \n                      minlength=\"2\" \n                      [(ngModel)]=\"user.lastName\"\n                      #lastName='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n                <p class=\"regis3b\" *ngIf=\"lastName.errors.required\">** Last Name is Required **</p> \n                <p class=\"regis3b\" *ngIf=\"lastName.errors.minlength\">** Last Name must be at least 2 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"password\" class=\"regis4\">Password: </label>\n                    <input class=\"regis4a\"\n                      type=\"password\" \n                      name=\"password\" \n                      required \n                      minlength=\"8\" \n                      [(ngModel)]=\"user.password\"\n                      #password='ngModel'\n                    />\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n                <p class=\"regis4b\" *ngIf=\"password.errors.required\">** Password is Required **</p> \n                <p class=\"regis4b\" *ngIf=\"password.errors.minlength\">** Password must be at least 8 characters long **</p> \n              </div>\n                <p>\n                  <label for=\"passwordconfirm\" class=\"regis5\">Password Confirmation:</label>\n                    <input class=\"regis5a\" type=\"password\" name=\"passwordConfirmation\" required [(ngModel)] = \"user.passwordConfirmation\" pattern=\"{{user.password}}\" #passwordConfirmation=\"ngModel\"/>\n                </p>\n              <div style=\"color: red;\" *ngIf=\"!passwordConfirmation.valid && (passwordConfirmation.dirty || passwordConfirmation.touched)\">\n                <p class=\"regis5b\" *ngIf=\"passwordConfirmation.errors.required\">** Password Confirmation is Required **</p> \n                <p class=\"regis5b\" *ngIf=\"passwordConfirmation.errors.pattern\">** Password Confirmation must match with Password **</p> \n              </div>\n                <input class=\"regisbtn\" type=\"submit\" value=\"Register\" [disabled] = \"password.invalid || lastName.invalid || firstName.invalid || passwordConfirmation.invalid || email.invalid || username.invalid\">\n              </form>\n      </section>\n    <!-- </div> -->\n    <div class=\"col-sm-1\"></div>\n  </div>\n</div>\n</div>\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _d || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _d || Object])
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

/***/ "../../../../../src/app/session-handler/session-handler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session-handler/session-handler.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  session-handler works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/session-handler/session-handler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__ = __webpack_require__("../../../../../src/app/last-fm-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionHandlerComponent = (function () {
    function SessionHandlerComponent(_route, _lastfmApiService, _apiCallService, _md5) {
        var _this = this;
        this._route = _route;
        this._lastfmApiService = _lastfmApiService;
        this._apiCallService = _apiCallService;
        this._md5 = _md5;
        this.subscription = this._route.events.subscribe(function (data) {
            if (data instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* URLSearchParams */](data.url.split('?')[1]);
                _this.authToken = params.get('token');
                console.log(_this.authToken);
                _this.apiSig = _this.hashIntoApiSig(_this.authToken);
                console.log(_this.apiSig);
                _this.fetchLastFmSessionToken(_this.authToken, _this.apiSig);
                console.log(_this.lastFmSessionToken);
                _this._route.navigate(['/home']);
            }
        });
    }
    SessionHandlerComponent.prototype.ngOnInit = function () {
    };
    SessionHandlerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SessionHandlerComponent.prototype.hashIntoApiSig = function (token) {
        var apikey = 'c595e718d23c51ef68c0d547f1511fe7';
        var apisecret = 'e66072ab2029e8df10acdf1845093b59';
        var hash = this._md5.appendStr('api_key' + apikey + 'methodauth.getSessiontoken' + token + apisecret).end();
        return hash;
    };
    SessionHandlerComponent.prototype.fetchLastFmSessionToken = function (authToken, apiSig) {
        var _this = this;
        this._lastfmApiService.getAuthSession(authToken, apiSig)
            .then(function (data) {
            console.log('then response fetchLastFmSessionToken');
            console.log(data);
            _this.lastFmSessionToken = data.session.key;
            _this.lastFmSessionSig = _this.hashIntoApiSig(_this.lastFmSessionToken);
            _this.saveLastFmSessionTokenAndSigToUserInSession(_this.lastFmSessionToken, _this.lastFmSessionSig);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SessionHandlerComponent.prototype.saveLastFmSessionTokenAndSigToUserInSession = function (lastFmSessionT, lastFMSessionS) {
        var _this = this;
        var lastFmSessionData = { lastFmSession: lastFmSessionT, lastFmSessionSig: lastFMSessionS };
        this._apiCallService.saveLastFmSessionTokenAndSigToUserInSession(lastFmSessionData)
            .then(function (data) {
            console.log('then response saveLastFmSessionTokenAndSigToUserInSession');
            console.log(data);
            if (data) {
                _this._route.navigate(['home']);
            }
            else {
                console.log('error adding token to currentUser');
                _this._apiCallService.logoutUser();
                _this._route.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return SessionHandlerComponent;
}());
SessionHandlerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-session-handler',
        template: __webpack_require__("../../../../../src/app/session-handler/session-handler.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session-handler/session-handler.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__["a" /* LastFmApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__last_fm_api_service__["a" /* LastFmApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__["Md5"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__["Md5"]) === "function" && _d || Object])
], SessionHandlerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=session-handler.component.js.map

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