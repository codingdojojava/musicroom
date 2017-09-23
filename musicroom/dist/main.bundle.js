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
        console.log('service sending user data for registration');
        return this._http.post('/api/users/register', userData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.loginUser = function (userData) {
        console.log('service sending user data for login');
        return this._http.post('/api/users/login', userData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getCurrentUserInSession = function () {
        console.log('service getting current user session');
        return this._http.get('/api/users/current')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.logoutUser = function () {
        console.log('service logging out current user');
        return this._http.get('/api/users/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getAllUsers = function () {
        console.log('service getting all users');
        return this._http.get('/api/users')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.getUserByUserId = function (userParams) {
        console.log('service getting users by id');
        return this._http.get('/api/users/' + userParams)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ApiCallService.prototype.sendInviteToUserById = function (userIdData) {
        console.log('service sending invite to user by id');
        return this._http.post('/api/users/invite', userIdData)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'home', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'home/profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'search/results', component: __WEBPACK_IMPORTED_MODULE_1__search_manager_search_manager_component__["a" /* SearchManagerComponent */] },
    { path: 'home/users/:id', component: __WEBPACK_IMPORTED_MODULE_0__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Nav Bar</h1>\n\n  <a *ngIf=\"!currentUser\" [routerLink]=\"['/login']\">Login</a>\n  <a *ngIf=\"!currentUser\" [routerLink]=\"['/register']\">Register</a>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/home']\">Home</a>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/home/profile']\">Profile</a>\n  <div style=\"display: inline-block;\">\n    <form *ngIf=\"currentUser\" (submit) = \"redirectToSearchPageWithSearchVal()\">\n      <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\" (keyup) = \"searchUsers()\" />\n      <input type=\"submit\" value=\"Search Users\" />\n    </form>\n  </div>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/search/results']\">Browse Users</a>\n  <a *ngIf=\"currentUser\" [routerLink]=\"['/logout']\">Logout</a>\n\n\n<router-outlet></router-outlet>\n<div>\n  <input type=\"text\" #msgInput name=\"\" value=\"\">\n  <button (click)=\"sendMsg(msgInput.value)\">Send</button>\n  <br>\n  <p>{{msg}}  </p>\n</div>\nasdf"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
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





var AppComponent = (function () {
    function AppComponent(chatService, _route, _searchService, _apicallService) {
        this.chatService = chatService;
        this._route = _route;
        this._searchService = _searchService;
        this._apicallService = _apicallService;
        this.msg = "";
        this.searchVal = '';
        this.getCurrentUserInSession();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService
            .getMessage()
            .subscribe(function (data) {
            console.log("GOT IT");
            // console.log(data);
            _this.msg = data;
        });
    };
    AppComponent.prototype.sendMsg = function (msg) {
        this.chatService.sendMessage(msg);
    };
    AppComponent.prototype.searchUsers = function () {
        console.log('hello');
        this._searchService.searchUsers(this.searchVal);
    };
    AppComponent.prototype.redirectToSearchPageWithSearchVal = function () {
        console.log('redirecting to Search page with keyword SearchVal');
        console.log(this.searchVal);
        this._route.navigate(['search', 'results', { q: this.searchVal }]);
    };
    AppComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            console.log(data);
            if (data) {
                console.log('success getting current user');
                _this.currentUser = data;
            }
            else {
                console.log('user not in session');
                _this.currentUser = false;
            }
        })
            .catch(function (error) {
            console.log('error getting current user');
            console.log(error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_call_service__["a" /* ApiCallService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_manager_search_manager_component__ = __webpack_require__("../../../../../src/app/search-manager/search-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__other_user_profile_other_user_profile_component__ = __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__search_manager_search_manager_component__["a" /* SearchManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__other_user_profile_other_user_profile_component__["a" /* OtherUserProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__api_call_service__["a" /* ApiCallService */],
            __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
    ChatService.prototype.getMessage = function () {
        return this.socket
            .fromEvent("msg")
            .map(function (data) {
            console.log(data);
            return data.msg;
        });
    };
    ChatService.prototype.sendMessage = function (msg) {
        console.log("SENDING EVENT");
        this.socket
            .emit("msg", msg);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>You are now in Home Page</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
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
    function DashboardComponent(_apicallService, _router) {
        this._apicallService = _apicallService;
        this._router = _router;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
        this.getCurrentUserInSession();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            console.log(data);
            if (data) {
                console.log('success getting current user');
                _this.currentUser = data;
            }
            else {
                console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  index works!\n</p>\n<h1>Design Cover Page here</h1>\n"

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

module.exports = "<fieldset>\n  <legend>Login</legend>\n<form (submit)=\"loginUser()\">\n  <p>\n    <label>Username: \n      <input type=\"text\" name=\"username\" required [(ngModel)] = \"user.username\" #username=\"ngModel\"/>\n    </label>\n  </p>\n    <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n      <p *ngIf=\"username.errors.required\">Username is Required</p> \n    </div>\n  <p>\n    <label>Password: \n      <input type=\"password\" name=\"password\" required [(ngModel)] = \"user.password\" #password=\"ngModel\" />\n    </label>\n  </p>\n    <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\">Password is Required</p> \n    </div>\n  <input type=\"submit\" value=\"Login\" [disabled] = \"password.invalid || username.invalid\" />\n</form>\n</fieldset>\n"

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
    function LoginComponent(_apicallService, _router, _appComponent) {
        this._apicallService = _apicallService;
        this._router = _router;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log('login User');
        console.log(this.user);
        this._apicallService.loginUser(this.user)
            .then(function (data) {
            console.log('success logging in user');
            console.log(data);
            _this._appComponent.getCurrentUserInSession();
            _this._router.navigate(['/home']);
        })
            .catch(function (error) {
            console.log('error logging in user');
            console.log(error);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
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
            console.log('success logging user out');
            _this._appComponent.getCurrentUserInSession();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            console.log('error logging user out');
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userId, username, email, firstName, lastName, password, description, favoriteSongs, joinedRooms, ownedRooms, friends, received_invites, sent_invites, created_at, updated_at) {
        if (userId === void 0) { userId = null; }
        if (username === void 0) { username = ''; }
        if (email === void 0) { email = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (password === void 0) { password = ''; }
        if (description === void 0) { description = ''; }
        if (favoriteSongs === void 0) { favoriteSongs = []; }
        if (joinedRooms === void 0) { joinedRooms = []; }
        if (ownedRooms === void 0) { ownedRooms = []; }
        if (friends === void 0) { friends = []; }
        if (received_invites === void 0) { received_invites = []; }
        if (sent_invites === void 0) { sent_invites = []; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.description = description;
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

module.exports = "<div *ngIf=\"user\">\n  <h1>Current User's Profile</h1>\n  <h2>Username: {{user.username}}</h2>\n  <p>Email: {{user.email}}</p>\n  <p>First Name: {{user.firstName}}</p>\n  <p>Last Name: {{user.lastName}}</p>\n  <p>Description: {{user.description}}</p>\n<h3>Friends</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr>\n      <td>usernames goes here</td>\n      <td>\n        <a href=\"#\">Show Profile</a>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/other-user-profile/other-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherUserProfileComponent; });
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



var OtherUserProfileComponent = (function () {
    function OtherUserProfileComponent(_apicallService, _route) {
        this._apicallService = _apicallService;
        this._route = _route;
        this.subscribeToUserIdParams();
    }
    OtherUserProfileComponent.prototype.ngOnInit = function () {
    };
    OtherUserProfileComponent.prototype.subscribeToUserIdParams = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            console.log('got params id: ' + params.get('id'));
            return _this._apicallService.getUserByUserId(params.get('id'));
        }).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    return OtherUserProfileComponent;
}());
OtherUserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-other-user-profile',
        template: __webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/other-user-profile/other-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], OtherUserProfileComponent);

var _a, _b;
//# sourceMappingURL=other-user-profile.component.js.map

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

module.exports = "<div *ngIf=\"currentUser\">\n  <h1>Current User's Profile</h1>\n  <h2>Username: {{currentUser.username}}</h2>\n  <p>Email: {{currentUser.email}}</p>\n  <p>First Name: {{currentUser.firstName}}</p>\n  <p>Last Name: {{currentUser.lastName}}</p>\n  <p>Description: {{currentUser.description}}</p>\n  <h3>Invites</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr>\n      <td>usernames goes here</td>\n      <td>\n        <a href=\"#\">Accept Invite</a>\n        <a href=\"#\">Reject Invite</a>\n      </td>\n    </tr>\n  </table>\n  <h3>Friends</h3>\n  <table>\n    <tr>\n      <th>Username</th>\n      <th>Actions</th>\n    </tr>\n    <tr>\n      <td>usernames goes here</td>\n      <td>\n        <a href=\"#\">Show Profile</a>\n        <a href=\"#\">Remove Friend</a>\n      </td>\n    </tr>\n  </table>\n</div>\n\n"

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
            console.log(data);
            if (data) {
                console.log('success getting current user');
                _this.currentUser = data;
                console.log(_this.currentUser);
            }
            else {
                console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Registration</legend>\n    <div style=\"color: red;\" *ngIf=\"isDuplicate\">\n    <p *ngIf=\"username.errors.required\">Username has already been taken.</p> \n  </div>\n  <form (submit)=\"registerUser(); form.reset()\" #form=\"ngForm\" >\n    <p>\n      <label>Username: \n        <input \n          type=\"text\" \n          name=\"username\" \n          required \n          minlength=\"5\" \n          [(ngModel)]=\"user.username\"\n          #username='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!username.valid && (username.dirty || username.touched)\">\n    <p *ngIf=\"username.errors.required\">Username is Required</p> \n    <p *ngIf=\"username.errors.minlength\">Username must be at least 5 characters long</p> \n  </div>\n    <p>\n      <label>Email: \n          <input \n            type=\"text\" \n            name=\"email\" \n            required \n            pattern='(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))'\n            [(ngModel)]=\"user.email\"\n            #email='ngModel'\n          />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n    <p *ngIf=\"email.errors.required\">Email is Required</p> \n    <p *ngIf=\"email.errors.pattern\">Please enter a valid email</p> \n  </div>\n    <p>\n      <label>First Name: \n        <input \n          type=\"text\" \n          name=\"firstName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"user.firstName\"\n          #firstName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!firstName.valid && (firstName.dirty || firstName.touched)\">\n    <p *ngIf=\"firstName.errors.required\">First Name is Required</p> \n    <p *ngIf=\"firstName.errors.minlength\">First Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Last Name: \n        <input \n          type=\"text\" \n          name=\"lastName\" \n          required \n          minlength=\"2\" \n          [(ngModel)]=\"user.lastName\"\n          #lastName='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!lastName.valid && (lastName.dirty || lastName.touched)\">\n    <p *ngIf=\"lastName.errors.required\">Last Name is Required</p> \n    <p *ngIf=\"lastName.errors.minlength\">Last Name must be at least 2 characters long</p> \n  </div>\n    <p>\n      <label>Password: \n        <input \n          type=\"password\" \n          name=\"password\" \n          required \n          minlength=\"8\" \n          [(ngModel)]=\"user.password\"\n          #password='ngModel'\n        />\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n    <p *ngIf=\"password.errors.required\">Password is Required</p> \n    <p *ngIf=\"password.errors.minlength\">Password must be at least 8 characters long</p> \n  </div>\n    <p>\n      <label>Password Confirmation: \n        <input type=\"password\" name=\"passwordConfirmation\" required [(ngModel)] = \"user.passwordConfirmation\" pattern=\"{{user.password}}\" #passwordConfirmation=\"ngModel\"/>\n      </label>\n    </p>\n  <div style=\"color: red;\" *ngIf=\"!passwordConfirmation.valid && (passwordConfirmation.dirty || passwordConfirmation.touched)\">\n    <p *ngIf=\"passwordConfirmation.errors.required\">Password Confirmation is Required</p> \n    <p *ngIf=\"passwordConfirmation.errors.pattern\">Password Confirmation must match with Password</p> \n  </div>\n    <input type=\"submit\" value=\"Register\" [disabled] = \"password.invalid || lastName.invalid || firstName.invalid || passwordConfirmation.invalid || email.invalid || username.invalid\">\n  </form>\n</fieldset>\n"

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
        console.log('hellooo registrations!!');
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        console.log('registering User');
        console.log(this.user);
        this._apicallService.registerAUser(this.user)
            .then(function (data) {
            console.log(data);
            if (data.code) {
                if (data.code === 11000) {
                    console.log('duplicate data please try again');
                    _this.isDuplicate = true;
                    _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
                }
            }
            else {
                console.log('success registering user');
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

module.exports = "\n<h1>Search User Results</h1>\n<table>\n  <tr>\n    <th>Username</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let user of showSearchResultUsers\">\n      <td *ngIf=\"user && user._id != currentUser._id\">{{user.username}}</td>\n      <td *ngIf=\"user && user._id != currentUser._id\">\n        <a [routerLink]=\"['/home/users', user.userId]\">Show Profile</a>\n        <button *ngIf=\"!user.received_invites.includes(currentUser._id)\" (click)=\"sendInvite(user.userId)\">Send Invite</button>\n        <span *ngIf=\"user.received_invites.includes(currentUser._id)\">Invite Sent</span>\n      </td>\n  </tr>\n</table>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/search-manager/search-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_call_service__ = __webpack_require__("../../../../../src/app/api-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
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
    function SearchManagerComponent(_router, _route, _apicallService, _searchService) {
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
    SearchManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription2 = this._route.paramMap.subscribe(function (params) {
            _this.searchVal = params.get('q');
            console.log(_this.searchVal);
        });
        this.getAllUsers(this.searchVal);
    };
    SearchManagerComponent.prototype.subscribeToSearchVal = function () {
        var _this = this;
        this.subscription = this._searchService.searchValue$.subscribe(function (search) {
            console.log('hiiiii');
            console.log(search);
            _this.showSearchResultUsers = _this.filterUsers(_this.searchResults, search);
        });
    };
    SearchManagerComponent.prototype.getAllUsers = function (search) {
        var _this = this;
        if (!search) {
            search = '';
        }
        this._apicallService.getAllUsers()
            .then(function (data) {
            console.log('success then response getting all users');
            _this.searchResults = data;
            _this.showSearchResultUsers = _this.filterUsers(data, search);
            console.log(_this.showSearchResultUsers);
        })
            .catch(function (error) {
            console.log('error catch response getting all users');
            console.log(error);
        });
    };
    SearchManagerComponent.prototype.getCurrentUserInSession = function () {
        var _this = this;
        this._apicallService.getCurrentUserInSession()
            .then(function (data) {
            console.log(data);
            if (data) {
                console.log('success getting current user');
                _this.currentUser = data;
            }
            else {
                console.log('user not in session');
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('error getting current user');
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    SearchManagerComponent.prototype.filterUsers = function (data, val) {
        console.log('filtering....');
        return data.filter(function (index) {
            return index.username.toLowerCase().includes(val.toLowerCase()) || index.firstName.toLowerCase().includes(val.toLowerCase()) || index.lastName.toLowerCase().includes(val.toLowerCase());
        });
    };
    SearchManagerComponent.prototype.sendInvite = function (userId) {
        var _this = this;
        var user_Id = { userId: userId };
        this._apicallService.sendInviteToUserById(user_Id)
            .then(function (data) {
            console.log('sucess then response sendInvite');
            console.log(data);
            _this.getAllUsers(_this.searchVal);
        })
            .catch(function (error) {
            console.log('error catch response sendInvite');
        });
    };
    SearchManagerComponent.prototype.ngAfterViewInit = function () {
    };
    SearchManagerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    return SearchManagerComponent;
}());
SearchManagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-search-manager',
        template: __webpack_require__("../../../../../src/app/search-manager/search-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-manager/search-manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_call_service__["a" /* ApiCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _d || Object])
], SearchManagerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-manager.component.js.map

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
        // Observable string streams
        this.searchValue$ = this.searchValueSource.asObservable();
    }
    // Service message commands
    SearchService.prototype.searchUsers = function (searchVal) {
        this.searchValueSource.next(searchVal);
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