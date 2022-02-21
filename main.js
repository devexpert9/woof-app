(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Woof\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'http://localhost:3000/',
    apiUrl: 'http://3.17.11.111:3000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J5XG":
/*!******************************************!*\
  !*** ./src/app/core/eventbus.service.ts ***!
  \******************************************/
/*! exports provided: EventbusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventbusService", function() { return EventbusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let EventbusService = class EventbusService {
    constructor() {
        this.cred = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.cred$ = this.cred.asObservable();
        this.sideMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.sideMenu$ = this.sideMenu.asObservable();
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
EventbusService.ctorParameters = () => [];
EventbusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EventbusService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_eventbus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/eventbus.service */ "J5XG");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/utility.service */ "ZtwD");








let AppComponent = class AppComponent {
    constructor(translate, utility, eventBus, platform) {
        this.translate = translate;
        this.utility = utility;
        this.eventBus = eventBus;
        this.platform = platform;
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: 'Appointments',
                url: '/tabs/appointments',
                icon: 'calendar',
            },
            {
                title: 'Park Near To Me',
                url: '/tabs/park-near-me',
                icon: 'leaf',
            },
            {
                title: 'My Product',
                url: '/tabs/my-products',
                icon: 'leaf',
            },
            {
                title: 'Cart',
                url: '/tabs/cart',
                icon: 'leaf',
            },
            {
                title: 'QR Generation',
                url: '/tabs/qr-code',
                icon: 'qr-code',
            },
            {
                title: 'Payments',
                url: '/tabs/subscription-transactions',
                icon: 'card',
            },
            {
                title: 'Settings',
                url: '/account-settings',
                icon: 'settings',
            },
            {
                title: 'Logout',
                url: '',
                icon: 'log-out',
            },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.translate.setDefaultLang('en');
        this.utility.setSideMenuUserDetail();
    }
    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
        }
        this.eventBus.cred$.subscribe((res) => {
            if (res) {
                this.utility.userEmail = res.userEmail;
                this.utility.username = res.username;
                this.utility.userImage = res.userImage;
                this.utility.dogFooterImage = res.dogFooterImage;
            }
        });
        this.handleSidemnuEvent();
    }
    logout(p) {
        if (p.title.toLowerCase() === 'logout') {
            localStorage.clear();
            this.utility.navigateRoot('/login');
        }
    }
    handleSidemnuEvent() {
        this.eventBus.sideMenu$.subscribe((res) => {
            if (res == 'service-provider') {
                this.appPages = [
                    {
                        title: 'Appointments',
                        url: '/tabs/appointments',
                        icon: 'calendar',
                    },
                    {
                        title: 'Settings',
                        url: '/account-settings',
                        icon: 'settings',
                    },
                    {
                        title: 'Logout',
                        url: '',
                        icon: 'log-out',
                    },
                ];
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_eventbus_service__WEBPACK_IMPORTED_MODULE_6__["EventbusService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <div class=\"top-icosf\" *ngIf=\"utility.refreshDetail\">\r\n          <div class=\"icon-sf\">\r\n            <img\r\n              [src]=\"\r\n                utility.userImage\r\n                  ? utility.userImage\r\n                  : 'assets/images/user11.jpg'\r\n              \"\r\n            />\r\n          </div>\r\n          <div class=\"rify\">\r\n            <h3>{{ utility.username }}</h3>\r\n            <h5>{{ utility.userEmail }}</h5>\r\n          </div>\r\n        </div>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-menu-toggle\r\n            auto-hide=\"false\"\r\n            *ngFor=\"let p of appPages; let i = index\"\r\n          >\r\n            <ion-item\r\n              class=\"icon-sf\"\r\n              (click)=\"selectedIndex = i; logout(p)\"\r\n              routerDirection=\"root\"\r\n              [routerLink]=\"[p.url]\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              [class.selected]=\"selectedIndex == i\"\r\n            >\r\n              <span class=\"ic-sf\">\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  [ios]=\"p.icon + '-outline'\"\r\n                  [md]=\"p.icon + '-sharp'\"\r\n                ></ion-icon>\r\n              </span>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n              <span class=\"rigt-arro\" slot=\"end\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n              </span>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <!--ion-list id=\"labels-list\">\r\n          <ion-list-header>Labels</ion-list-header>\r\n\r\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\r\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\r\n            <ion-label>{{ label }}</ion-label>\r\n          </ion-item>\r\n        </ion-list-->\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"> </ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor */ "qQYu");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]],
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _core_interceptor__WEBPACK_IMPORTED_MODULE_11__["MyInterceptor"], multi: true },
            ,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "ZtwD":
/*!*****************************************!*\
  !*** ./src/app/core/utility.service.ts ***!
  \*****************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _eventbus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventbus.service */ "J5XG");








let UtilityService = class UtilityService {
    constructor(http, bHttp, router, loadingController, alertController, navController, toastController, eventBus) {
        this.http = http;
        this.bHttp = bHttp;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navController = navController;
        this.toastController = toastController;
        this.eventBus = eventBus;
        this.isLoading = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service/';
        this.addPet = 'add';
        this.updatePet = 'update/{petId}';
        this.deletePet = 'delete/{petId}';
        this.getServiceDetail = 'details';
        this.getSinglePet = 'get/{petId}';
        this.refreshDetail = true;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            authorization: this.getToken(),
        });
    }
    navigate(url) {
        this.navController.navigateForward(url);
        // this.router.navigateByUrl(url);
    }
    getToken() {
        return this.getLocal('token');
    }
    getLocal(key) {
        return localStorage.getItem(key);
    }
    setLocal(key, value) {
        localStorage.setItem(key, value);
    }
    getUserId() {
        const user = JSON.parse(localStorage.getItem('userObj'));
        return user['_id'];
    }
    getImageUrl(image) {
        console.log(image);
        return JSON.parse(image).map((v) => {
            v = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'uploads/' + v;
            return v;
        });
    }
    getPetImageUrl(image) {
        console.log(image);
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'uploads/' + image;
    }
    showAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                message: msg,
                buttons: [
                    // {
                    //   text: 'Cancel',
                    //   role: 'cancel',
                    //   cssClass: 'secondary',
                    //   handler: (blah) => {
                    //     console.log('Confirm Cancel: blah');
                    //   },
                    // },
                    {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Okay');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    confirmationAlert(cb) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmation',
                message: 'Are you sure want to delete this?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            cb(false);
                        },
                    },
                    {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Okay');
                            cb(true);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    goBack() {
        this.navController.back();
    }
    navigateRoot(url) {
        this.navController.navigateRoot(url);
    }
    showLoader() {
        this.loadingController
            .create({
            message: 'Please wait...',
        })
            .then((res) => {
            res.present();
        });
    }
    // Hide the loader if already created otherwise return error
    hideLoader() {
        this.loadingController
            .dismiss()
            .then((res) => {
            console.log('Loading dismissed!', res);
        })
            .catch((error) => {
            console.log('error', error);
            this.loadingController.dismiss();
        });
    }
    pop() {
        this.navController.pop();
    }
    presentToastWithOptions(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Message',
                message: msg,
                position: 'top',
                buttons: [
                    {
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield toast.present();
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController
                .create({
                message: 'Please wait...',
            })
                .then((a) => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController
                .dismiss()
                .then(() => console.log('dismissed'));
        });
    }
    customAlert(btn1 = 'Cancel', btn2 = 'Ok', msg, cb) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                message: msg,
                buttons: [
                    {
                        text: btn1,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            cb(false);
                        },
                    },
                    {
                        text: btn2,
                        handler: () => {
                            console.log('Confirm Okay');
                            cb(true);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    subscriptionAlert(btn1 = 'Cancel', btn2 = 'Ok', btn3 = 'Cancel', msg, cb) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                message: msg,
                buttons: [
                    {
                        text: btn1,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            cb(false);
                        },
                    },
                    {
                        text: btn2,
                        handler: () => {
                            console.log('Confirm Okay');
                            cb(true);
                        },
                    },
                    {
                        text: btn3,
                        handler: () => {
                            console.log('Confirm null');
                            cb(null);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    setSideMenuUserDetail() {
        const user = JSON.parse(this.getLocal('userObj')) || {};
        this.userEmail = user.email;
        this.userImage = user.image ? this.getPetImageUrl(user.image) : undefined;
        this.dogFooterImage = user.dogFooterImage
            ? this.getPetImageUrl(user.dogFooterImage)
            : undefined;
        this.username = user.firstname + ' ' + user.lastname;
        console.log(this.username);
        let data = {
            userEmail: this.userEmail,
            userImage: this.userImage,
            username: this.username,
            dogFooterImage: this.dogFooterImage,
        };
        console.log(data, 'data');
        this.eventBus.cred.next(data);
    }
    prompt(msg, cb) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            cb(true);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    getRole() {
        return JSON.parse(this.getLocal('userObj')).role;
    }
};
UtilityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpBackend"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _eventbus_service__WEBPACK_IMPORTED_MODULE_6__["EventbusService"] }
];
UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UtilityService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility.service */ "ZtwD");
/* harmony import */ var _eventbus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventbus.service */ "J5XG");






let CoreModule = class CoreModule {
    constructor(core) {
        if (core) {
            throw new Error('You Shall not run');
        }
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        providers: [_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _eventbus_service__WEBPACK_IMPORTED_MODULE_5__["EventbusService"]],
    })
], CoreModule);



/***/ }),

/***/ "qQYu":
/*!*************************************!*\
  !*** ./src/app/core/interceptor.ts ***!
  \*************************************/
/*! exports provided: MyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility.service */ "ZtwD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let MyInterceptor = class MyInterceptor {
    constructor(utility) {
        this.utility = utility;
    }
    intercept(req, next) {
        // this.utility.showLoading();
        let headerObj = {
            authorization: this.utility.getToken(),
            'Content-Type': 'application/json',
        };
        if (this.utility.getToken() != null) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerObj);
            let cloneReq = req.clone({ headers });
            // cloneReq = req.clone({});
            console.log(cloneReq);
            return next.handle(cloneReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => this.handleError(err)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                // this.utility.hideLoading();
            }));
        }
        else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                // this.utility.navigate('/login');
                // this.utility.hideLoading();
            }));
        }
    }
    /**
     * If API call returns an error, check if the error is unauthorized error.
     *
     * @private
     * @param {HttpErrorResponse} err
     * @return {*}  {Observable<any>}
     * @memberof AuthInterceptor
     */
    handleError(err) {
        if (err.status === 401) {
            //redirect to login page on unauthorized request.
            this.utility.navigate('/login');
            // this.utility.hideLoading();
            // this.auth.clearLoginState();
        }
        else {
            // handle your auth error or rethrow
            // this.utility.hideLoading();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
    }
};
MyInterceptor.ctorParameters = () => [
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
MyInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MyInterceptor);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then((m) => m.TabsPageModule),
    }, {
        path: 'service',
        loadChildren: () => __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ./services/services.module */ "334H")).then((m) => m.ServicesPageModule),
    },
    {
        path: 'add-product',
        loadChildren: () => Promise.all(/*! import() | add-product-add-product-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-product-add-product-module")]).then(__webpack_require__.bind(null, /*! ./add-product/add-product.module */ "gp+k")).then((m) => m.AddProductPageModule),
    },
    {
        path: 'my-products',
        loadChildren: () => Promise.all(/*! import() | my-product-my-product-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("my-product-my-product-module")]).then(__webpack_require__.bind(null, /*! ./my-product/my-product.module */ "A/il")).then((m) => m.MyProductPageModule),
    },
    {
        path: 'adoption-profile-owner',
        loadChildren: () => __webpack_require__.e(/*! import() | adoption-profile-owner-adoption-profile-owner-module */ "adoption-profile-owner-adoption-profile-owner-module").then(__webpack_require__.bind(null, /*! ./adoption-profile-owner/adoption-profile-owner.module */ "5EQl")).then((m) => m.AdoptionProfileOwnerPageModule),
    },
    {
        path: 'adoption-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | adoption-profile-adoption-profile-module */ "adoption-profile-adoption-profile-module").then(__webpack_require__.bind(null, /*! ./adoption-profile/adoption-profile.module */ "Jd14")).then((m) => m.AdoptionProfilePageModule),
    },
    {
        path: 'adoptions',
        loadChildren: () => Promise.all(/*! import() | adoptions-adoptions-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("adoptions-adoptions-module")]).then(__webpack_require__.bind(null, /*! ./adoptions/adoptions.module */ "7q4L")).then((m) => m.AdoptionsPageModule),
    },
    {
        path: 'appointments',
        loadChildren: () => Promise.all(/*! import() | appointments-appointments-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("appointments-appointments-module")]).then(__webpack_require__.bind(null, /*! ./appointments/appointments.module */ "MCT3")).then((m) => m.AppointmentsPageModule),
    },
    {
        path: 'booking-detail',
        loadChildren: () => Promise.all(/*! import() | request-appointment-details-request-appointment-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("request-appointment-details-request-appointment-details-module")]).then(__webpack_require__.bind(null, /*! ./request-appointment-details/request-appointment-details.module */ "sME1")).then(m => m.RequestAppointmentDetailsPageModule)
    },
    {
        path: 'appointment-details',
        loadChildren: () => Promise.all(/*! import() | appointment-detailsnew-appointment-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("appointment-detailsnew-appointment-details-module")]).then(__webpack_require__.bind(null, /*! ./appointment-detailsnew/appointment-details.module */ "DVVy")).then((m) => m.AppointmentDetailsPageModule),
    },
    {
        path: 'availability',
        loadChildren: () => Promise.all(/*! import() | availability-availability-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("availability-availability-module")]).then(__webpack_require__.bind(null, /*! ./availability/availability.module */ "/MNG")).then((m) => m.AvailabilityPageModule),
    },
    {
        path: 'calendar',
        loadChildren: () => Promise.all(/*! import() | calendar-calendar-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "O51e")).then((m) => m.CalendarPageModule),
    },
    {
        path: 'chat-single',
        loadChildren: () => Promise.all(/*! import() | chat-detail-chat-detail-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("chat-detail-chat-detail-module")]).then(__webpack_require__.bind(null, /*! ./chat-detail/chat-detail.module */ "3Vyh")).then((m) => m.ChatDetailPageModule),
    },
    {
        path: 'chat',
        loadChildren: () => Promise.all(/*! import() | chat-new-chat-new-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("chat-new-chat-new-module")]).then(__webpack_require__.bind(null, /*! ./chat-new/chat-new.module */ "u4GQ")).then((m) => m.ChatNewPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
    },
    {
        path: 'join-the-walk',
        loadChildren: () => Promise.all(/*! import() | join-the-walk-join-the-walk-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("join-the-walk-join-the-walk-module")]).then(__webpack_require__.bind(null, /*! ./join-the-walk/join-the-walk.module */ "yFZh")).then((m) => m.JoinTheWalkPageModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() | map-map-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("map-map-module")]).then(__webpack_require__.bind(null, /*! ./map/map.module */ "yX1w")).then((m) => m.MapPageModule),
    },
    {
        path: 'marketplace',
        loadChildren: () => Promise.all(/*! import() | marketplace-marketplace-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("marketplace-marketplace-module")]).then(__webpack_require__.bind(null, /*! ./marketplace/marketplace.module */ "h2Vq")).then((m) => m.MarketplacePageModule),
    },
    {
        path: 'marketplace-categories',
        loadChildren: () => Promise.all(/*! import() | marketplace-categories-marketplace-categories-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("marketplace-categories-marketplace-categories-module")]).then(__webpack_require__.bind(null, /*! ./marketplace-categories/marketplace-categories.module */ "1DSL")).then((m) => m.MarketplaceCategoriesPageModule),
    },
    {
        path: 'payment-methode-choose',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-methode-choose-payment-methode-choose-module */ "payment-methode-choose-payment-methode-choose-module").then(__webpack_require__.bind(null, /*! ./payment-methode-choose/payment-methode-choose.module */ "0sEu")).then((m) => m.PaymentMethodeChoosePageModule),
    },
    {
        path: 'confirmation',
        loadChildren: () => __webpack_require__.e(/*! import() | confirmation-confirmation-module */ "confirmation-confirmation-module").then(__webpack_require__.bind(null, /*! ./confirmation/confirmation.module */ "lUhE")).then(m => m.ConfirmationPageModule)
    },
    {
        path: 'payment-methode',
        loadChildren: () => Promise.all(/*! import() | payment-methode-payment-methode-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("payment-methode-payment-methode-module")]).then(__webpack_require__.bind(null, /*! ./payment-methode/payment-methode.module */ "Nsck")).then((m) => m.PaymentMethodePageModule),
    },
    {
        path: 'map-list',
        loadChildren: () => __webpack_require__.e(/*! import() | map-list-map-list-module */ "map-list-map-list-module").then(__webpack_require__.bind(null, /*! ./map-list/map-list.module */ "/Dwm")).then((m) => m.MapListPageModule),
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "v35Q")).then((m) => m.CartPageModule),
    },
    {
        path: 'payment-successful',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-successful-payment-successful-module */ "payment-successful-payment-successful-module").then(__webpack_require__.bind(null, /*! ./payment-successful/payment-successful.module */ "jXZe")).then((m) => m.PaymentSuccessfulPageModule),
    },
    {
        path: 'pet-recepies',
        loadChildren: () => __webpack_require__.e(/*! import() | pet-recepies-pet-recepies-module */ "pet-recepies-pet-recepies-module").then(__webpack_require__.bind(null, /*! ./pet-recepies/pet-recepies.module */ "PSa7")).then((m) => m.PetRecepiesPageModule),
    },
    {
        path: 'qr-code',
        loadChildren: () => Promise.all(/*! import() | qr-code-qr-code-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("qr-code-qr-code-module")]).then(__webpack_require__.bind(null, /*! ./qr-code/qr-code.module */ "jYn2")).then((m) => m.QrCodePageModule),
    },
    {
        path: 'receipe-upload',
        loadChildren: () => __webpack_require__.e(/*! import() | receipe-upload-receipe-upload-module */ "receipe-upload-receipe-upload-module").then(__webpack_require__.bind(null, /*! ./receipe-upload/receipe-upload.module */ "Ozxm")).then((m) => m.ReceipeUploadPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("default~edit-profile-edit-profile-module~service-provider-signup-service-provider-signup-module~serv~2170bb0f"), __webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then((m) => m.SignupPageModule),
    },
    {
        path: 'park-details',
        loadChildren: () => __webpack_require__.e(/*! import() | park-details-park-details-module */ "park-details-park-details-module").then(__webpack_require__.bind(null, /*! ./park-details/park-details.module */ "6Ya7")).then((m) => m.ParkDetailsPageModule),
    },
    {
        path: 'park-near-me',
        loadChildren: () => Promise.all(/*! import() | park-near-me-park-near-me-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("park-near-me-park-near-me-module")]).then(__webpack_require__.bind(null, /*! ./park-near-me/park-near-me.module */ "Fcm6")).then((m) => m.ParkNearMePageModule),
    },
    {
        path: 'pet-doctors',
        loadChildren: () => Promise.all(/*! import() | pet-doctors-pet-doctors-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("common"), __webpack_require__.e("pet-doctors-pet-doctors-module")]).then(__webpack_require__.bind(null, /*! ./pet-doctors/pet-doctors.module */ "M/q2")).then((m) => m.PetDoctorsPageModule),
    },
    {
        path: 'pet-seaters',
        loadChildren: () => Promise.all(/*! import() | pet-seaters-pet-seaters-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("pet-seaters-pet-seaters-module")]).then(__webpack_require__.bind(null, /*! ./pet-seaters/pet-seaters.module */ "E7Xa")).then((m) => m.PetSeatersPageModule),
    },
    {
        path: 'pet-trainers',
        loadChildren: () => Promise.all(/*! import() | pet-trainers-pet-trainers-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("pet-trainers-pet-trainers-module")]).then(__webpack_require__.bind(null, /*! ./pet-trainers/pet-trainers.module */ "+DnE")).then((m) => m.PetTrainersPageModule),
    },
    {
        path: 'pet-walkers',
        loadChildren: () => Promise.all(/*! import() | pet-walkers-pet-walkers-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("common"), __webpack_require__.e("pet-walkers-pet-walkers-module")]).then(__webpack_require__.bind(null, /*! ./pet-walkers/pet-walkers.module */ "x8t0")).then((m) => m.PetWalkersPageModule),
    },
    {
        path: 'marketplace-details',
        loadChildren: () => Promise.all(/*! import() | marketplace-details-marketplace-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("marketplace-details-marketplace-details-module")]).then(__webpack_require__.bind(null, /*! ./marketplace-details/marketplace-details.module */ "YkqA")).then((m) => m.MarketplaceDetailsPageModule),
    },
    {
        path: 'profile-details',
        loadChildren: () => Promise.all(/*! import() | profile-details-profile-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("profile-details-profile-details-module")]).then(__webpack_require__.bind(null, /*! ./profile-details/profile-details.module */ "NX0N")).then((m) => m.ProfileDetailsPageModule),
    },
    {
        path: 'account-settings',
        loadChildren: () => Promise.all(/*! import() | account-settings-account-settings-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("account-settings-account-settings-module")]).then(__webpack_require__.bind(null, /*! ./account-settings/account-settings.module */ "ktQK")).then((m) => m.AccountSettingsPageModule),
    },
    {
        path: 'change-password',
        loadChildren: () => Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ./change-password/change-password.module */ "8oFo")).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("default~edit-profile-edit-profile-module~service-provider-signup-service-provider-signup-module~serv~2170bb0f"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "Wvzw")).then((m) => m.EditProfilePageModule),
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() | search-search-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null, /*! ./search/search.module */ "RmqX")).then((m) => m.SearchPageModule),
    },
    {
        path: 'subscription-payment',
        loadChildren: () => Promise.all(/*! import() | subscription-payment-subscription-payment-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-payment-subscription-payment-module")]).then(__webpack_require__.bind(null, /*! ./subscription-payment/subscription-payment.module */ "6mwk")).then((m) => m.SubscriptionPaymentPageModule),
    },
    {
        path: 'subscription',
        loadChildren: () => Promise.all(/*! import() | subscription-subscription-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-subscription-module")]).then(__webpack_require__.bind(null, /*! ./subscription/subscription.module */ "AfdY")).then((m) => m.SubscriptionPageModule),
    },
    {
        path: 'subscription-transactions',
        loadChildren: () => Promise.all(/*! import() | subscription-transactions-subscription-transactions-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-transactions-subscription-transactions-module")]).then(__webpack_require__.bind(null, /*! ./subscription-transactions/subscription-transactions.module */ "wAaV")).then((m) => m.SubscriptionTransactionsPageModule),
    },
    {
        path: 'woofcare',
        loadChildren: () => Promise.all(/*! import() | woofcare-woofcare-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("woofcare-woofcare-module")]).then(__webpack_require__.bind(null, /*! ./woofcare/woofcare.module */ "L/bu")).then((m) => m.WoofcarePageModule),
    },
    {
        path: 'add-edit-pet',
        loadChildren: () => Promise.all(/*! import() | add-edit-pet-add-edit-pet-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-edit-pet-add-edit-pet-module")]).then(__webpack_require__.bind(null, /*! ./add-edit-pet/add-edit-pet.module */ "z+Ei")).then((m) => m.AddEditPetPageModule),
    },
    {
        path: 'my-product',
        loadChildren: () => Promise.all(/*! import() | my-product-my-product-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("my-product-my-product-module")]).then(__webpack_require__.bind(null, /*! ./my-product/my-product.module */ "A/il")).then((m) => m.MyProductPageModule),
    },
    {
        path: 'add-new-service',
        loadChildren: () => Promise.all(/*! import() | add-new-services-add-new-services-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-new-services-add-new-services-module")]).then(__webpack_require__.bind(null, /*! ./add-new-services/add-new-services.module */ "QQCK")).then(m => m.AddNewServicesPageModule)
    },
    {
        path: 'select-your-pet',
        loadChildren: () => Promise.all(/*! import() | select-your-pet-select-your-pet-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("select-your-pet-select-your-pet-module")]).then(__webpack_require__.bind(null, /*! ./select-your-pet/select-your-pet.module */ "BzeZ")).then(m => m.SelectYourPetPageModule)
    },
    {
        path: 'visit-details',
        loadChildren: () => Promise.all(/*! import() | visit-details-visit-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("visit-details-visit-details-module")]).then(__webpack_require__.bind(null, /*! ./visit-details/visit-details.module */ "eNZZ")).then(m => m.VisitDetailsPageModule)
    },
    {
        path: 'service-provider-detail',
        loadChildren: () => Promise.all(/*! import() | service-provider-detail-service-provider-detail-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("service-provider-detail-service-provider-detail-module")]).then(__webpack_require__.bind(null, /*! ./service-provider-detail/service-provider-detail.module */ "v3u8")).then(m => m.ServiceProviderDetailPageModule)
    },
    {
        path: 'service-provider-signup',
        loadChildren: () => Promise.all(/*! import() | service-provider-signup-service-provider-signup-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("default~edit-profile-edit-profile-module~service-provider-signup-service-provider-signup-module~serv~2170bb0f"), __webpack_require__.e("common"), __webpack_require__.e("service-provider-signup-service-provider-signup-module")]).then(__webpack_require__.bind(null, /*! ./service-provider-signup/service-provider-signup.module */ "V8Pe")).then(m => m.ServiceProviderSignupPageModule)
    },
    {
        path: 'service-provider-login',
        loadChildren: () => __webpack_require__.e(/*! import() | service-provider-login-service-provider-login-module */ "service-provider-login-service-provider-login-module").then(__webpack_require__.bind(null, /*! ./service-provider-login/service-provider-login.module */ "oIV7")).then(m => m.ServiceProviderLoginPageModule)
    },
    {
        path: 'service-provider-signup2',
        loadChildren: () => Promise.all(/*! import() | service-provider-signup2-service-provider-signup2-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("default~edit-profile-edit-profile-module~service-provider-signup-service-provider-signup-module~serv~2170bb0f"), __webpack_require__.e("common"), __webpack_require__.e("service-provider-signup2-service-provider-signup2-module")]).then(__webpack_require__.bind(null, /*! ./service-provider-signup2/service-provider-signup2.module */ "7Ryn")).then(m => m.ServiceProviderSignup2PageModule)
    },
    {
        path: 'provider-home',
        loadChildren: () => Promise.all(/*! import() | provider-home-provider-home-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("provider-home-provider-home-module")]).then(__webpack_require__.bind(null, /*! ./provider-home/provider-home.module */ "W6UA")).then(m => m.ProviderHomePageModule)
    },
    {
        path: 'service-details/:id',
        loadChildren: () => Promise.all(/*! import() | service-detailsnew-service-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("service-detailsnew-service-details-module")]).then(__webpack_require__.bind(null, /*! ./service-detailsnew/service-details.module */ "NWec")).then(m => m.ServiceDetailsPageModule)
    },
    {
        path: 'add-service',
        loadChildren: () => Promise.all(/*! import() | add-service-add-service-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-service-add-service-module")]).then(__webpack_require__.bind(null, /*! ./add-service/add-service.module */ "oOJ9")).then(m => m.AddServicePageModule)
    },
    {
        path: 'edit-service/:id',
        loadChildren: () => Promise.all(/*! import() | edit-service-edit-service-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("edit-service-edit-service-module")]).then(__webpack_require__.bind(null, /*! ./edit-service/edit-service.module */ "WFNT")).then(m => m.EditServicePageModule)
    },
    {
        path: 'choose-signup',
        loadChildren: () => __webpack_require__.e(/*! import() | choose-signup-choose-signup-module */ "choose-signup-choose-signup-module").then(__webpack_require__.bind(null, /*! ./choose-signup/choose-signup.module */ "C6Ng")).then(m => m.ChooseSignupPageModule)
    },
    {
        path: 'service-provider-home',
        loadChildren: () => __webpack_require__.e(/*! import() | service-provider-home-service-provider-home-module */ "service-provider-home-service-provider-home-module").then(__webpack_require__.bind(null, /*! ./service-provider-home/service-provider-home.module */ "2pt1")).then(m => m.ServiceProviderHomePageModule)
    },
    {
        path: 'service-provider-services',
        loadChildren: () => __webpack_require__.e(/*! import() | service-provider-services-service-provider-services-module */ "service-provider-services-service-provider-services-module").then(__webpack_require__.bind(null, /*! ./service-provider-services/service-provider-services.module */ "xNwD")).then(m => m.ServiceProviderServicesPageModule)
    },
    {
        path: 'service-provider-transaction',
        loadChildren: () => Promise.all(/*! import() | service-provider-transaction-new-service-provider-transaction-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("service-provider-transaction-new-service-provider-transaction-module")]).then(__webpack_require__.bind(null, /*! ./service-provider-transaction-new/service-provider-transaction.module */ "j9NX")).then(m => m.ServiceProviderTransactionPageModule)
    },
    {
        path: 'transaction-detail',
        loadChildren: () => Promise.all(/*! import() | transaction-details-transaction-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("transaction-details-transaction-details-module")]).then(__webpack_require__.bind(null, /*! ./transaction-details/transaction-details.module */ "grr4")).then(m => m.TransactionDetailsPageModule)
    },
    {
        path: 'manage-bank-detail',
        loadChildren: () => Promise.all(/*! import() | manage-bank-detail-manage-bank-detail-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("manage-bank-detail-manage-bank-detail-module")]).then(__webpack_require__.bind(null, /*! ./manage-bank-detail/manage-bank-detail.module */ "uOQY")).then(m => m.ManageBankDetailPageModule)
    },
    {
        path: 'services-of-provider',
        loadChildren: () => Promise.all(/*! import() | services-of-provider-services-of-provider-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("services-of-provider-services-of-provider-module")]).then(__webpack_require__.bind(null, /*! ./services-of-provider/services-of-provider.module */ "S070")).then(m => m.ServicesOfProviderPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #f0f0f0));\n}\n\nion-menu.md ion-content {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\nion-menu.md ion-list {\n  background: transparent;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: none;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 0px;\n  border-radius: 0px;\n  padding: 10px;\n  border-bottom: 1px solid #bfbfbf;\n  --background: transparent;\n  background: transparent;\n  font-size: 17px;\n  letter-spacing: 0px;\n  font-weight: 500;\n  color: #000;\n}\n\nion-menu.md ion-item.selected {\n  --background: transparent;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: #ffffff;\n}\n\nion-menu.md ion-item ion-icon {\n  color: #ffffff;\n  font-size: 24px;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0px 0 0 0;\n  background: #f0f0f0;\n  --background: #f0f0f0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 10px;\n  --padding-end: 0px;\n  --min-height: 50px;\n  background: #f0f0f0;\n  --background: #f0f0f0;\n  padding: 10px;\n  border-bottom: 1px solid #bfbfbf;\n  font-size: 18px;\n  color: #000;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: #fff;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 25px;\n  color: #fff;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: #000;\n}\n\n.top-icosf {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 15px 20px;\n  border-bottom: 1px solid #bfbfbf;\n}\n\n.top-icosf .icon-sf {\n  text-align: center;\n  margin-right: 15px;\n}\n\n.top-icosf .icon-sf img {\n  width: 82px;\n  height: 82px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid #cfcfcf;\n  padding: 2px;\n}\n\n.top-icosf .icon-sf span {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #bfbfbf;\n  margin-top: 4px;\n}\n\n.top-icosf .rify {\n  padding-bottom: 20px;\n}\n\n.top-icosf .rify h3 {\n  margin: 0px;\n  font-size: 18px;\n  color: #000000;\n  font-weight: 600;\n}\n\n.top-icosf .rify h5 {\n  margin: 0px;\n  font-size: 17px;\n  font-weight: 500;\n  margin-top: 4px;\n}\n\nspan.ic-sf {\n  width: 47px;\n  height: 47px;\n  background: #d6d6d6;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 59px;\n  margin-right: 20px;\n  color: #fff !important;\n}\n\nspan.rigt-arro {\n  margin: 0px;\n}\n\nspan.rigt-arro ion-icon {\n  color: #222 !important;\n  font-size: 18px !important;\n  vertical-align: bottom;\n}\n\nion-list#inbox-list ion-menu-toggle:last-child ion-item span.rigt-arro {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEVBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLGtCQUFjO0VBQ2QscUJBQWlCO0FBQ25COztBQUVBO0VBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsZ0JBQWdCO0FBQWxCOztBQUdBO0VBQ0UsZUFBZTtFQUVmLG1CQUFtQjtFQUVuQixjQUFjO0VBRWQsZ0JBQWdCO0FBSGxCOztBQU1BO0VBQ0UscUJBQWdCO0VBQ2hCLGtCQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDbkIsV0FBVTtBQUhYOztBQU1BO0VBQ0sseUJBQWE7QUFIbEI7O0FBTUE7RUFDRSxjQUFjO0FBSGhCOztBQU1BO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFIakI7O0FBTUE7RUFDRSxnQkFBZ0I7QUFIbEI7O0FBTUE7RUFDRSxzQkFBaUI7QUFIbkI7O0FBT0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFhO0FBSmY7O0FBUUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBTHJCOztBQVFBO0VBQ0MscUJBQWdCO0VBQ2Isa0JBQWM7RUFDZCxrQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLFdBQVc7QUFMZjs7QUFRQTtFQUNDLFdBQVk7QUFMYjs7QUFRQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBTGI7O0FBUUE7RUFDRSxrQkFBa0I7QUFMcEI7O0FBUUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUxyQjs7QUFRQTtFQUNFLGtCQUFrQjtBQUxwQjs7QUFRQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBRWYsb0NBQW9DO0FBTnRDOztBQVNBO0VBQ0UsYUFBUTtBQU5WOztBQVFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUxwQzs7QUFBQTtFQU9FLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFIcEI7O0FBTEE7RUFVRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7QUFEZjs7QUFkQTtFQWtCRyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUFsQjs7QUF0QkE7RUEwQkUsb0JBQW9CO0FBQXRCOztBQTFCQTtFQTRCRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFFbkI7O0FBakNBO0VBa0NHLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHbEI7O0FBQ0E7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBRTFCOztBQUFBO0VBQ0ksV0FBVztBQUdmOztBQUpBO0VBR0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFLeEI7O0FBRkE7RUFDSSxhQUFhO0FBS2pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjBmMGYwKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbmJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxuICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjojMDAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwcHggMCAwIDA7XHJcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuXHQtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiBjb2xvcjogI2ZmZiA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1jb2xvcjogIzAwMDtcclxufVxyXG4udG9wLWljb3NmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcblx0Lmljb24tc2Yge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0aW1nIHtcclxuXHRcdFx0d2lkdGg6IDgycHg7XHJcblx0XHRcdGhlaWdodDogODJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuXHRcdFx0cGFkZGluZzogMnB4O1xyXG5cdFx0fVxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdGNvbG9yOiAjYmZiZmJmO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA0cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5yaWZ5IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdFx0aDMge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdH1cclxuXHRcdGg1IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0bWFyZ2luLXRvcDogNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5zcGFuLmljLXNmIHtcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5zcGFuLnJpZ3QtYXJybyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHRpb24taWNvbiB7XHJcblx0XHRjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdH1cclxufVxyXG5pb24tbGlzdCNpbmJveC1saXN0IGlvbi1tZW51LXRvZ2dsZTpsYXN0LWNoaWxkIGlvbi1pdGVtIHNwYW4ucmlndC1hcnJvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map