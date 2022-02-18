(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _core_eventbus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/eventbus.service */ "J5XG");








let LoginPage = class LoginPage {
    constructor(auth, utility, menuCtrl, eventBus) {
        this.auth = auth;
        this.utility = utility;
        this.menuCtrl = menuCtrl;
        this.eventBus = eventBus;
        this.model = {};
        this.user_role = 'service provider';
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
    ionViewWillEnter() {
        // this.model = { email: '', password: '' };
        // this.menuCtrl.enable(false);
        this.menuCtrl.swipeGesture(false);
    }
    // private markFormGroupTouched(formGroup) {
    //   (<any>Object).values(formGroup.controls).forEach((control) => {
    //     control.markAsTouched();
    //     if (control.controls) {
    //       this.markFormGroupTouched(control);
    //     }
    //   });
    // }
    submit(form) {
        // form.markAsTouched();
        console.log(form);
        if (form.status.toLowerCase() == 'invalid') {
            Object.keys(form.controls).forEach((key) => {
                form.controls[key].markAsTouched();
            });
            // this.markFormGroupTouched(form);
            //return this.utility.showAlert('Form invalid');
        }
        form.value.role = 'pet owner';
        if (form.status.toLowerCase() == 'valid') {
            this.utility.present();
            let dict = {
                email: form.value.email,
                password: form.value.password,
                role: this.user_role,
            };
            this.auth.login(dict).subscribe((res) => {
                this.eventBus.publishSomeData({});
                console.log(res);
                const token = res['token'];
                const userObj = res['data'];
                this.utility.setLocal('token', token);
                this.utility.dismiss();
                this.utility.setLocal('userObj', JSON.stringify(userObj));
                if (this.user_role == 'service provider') {
                    // this.utility.navigate('/tabs/provider-home');
                    this.utility.navigateRoot('/tabs/calender-appointment');
                    this.eventBus.sideMenu.next('service-provider');
                    this.utility.setSideMenuUserDetail();
                }
                else {
                    this.utility.navigateRoot('/tabs/home');
                    this.utility.setSideMenuUserDetail();
                }
            }, (err) => {
                this.utility.dismiss();
                console.log(err);
                this.utility.showAlert(err.error.message);
            });
        }
    }
    ngOnDestroy() {
        console.log('working');
        this.menuCtrl.enable(true);
        //Called once, before the instance is destroyed.
        //Add 'implements OnDdestroy' to the class.
    }
    ionViewWillLeave() {
        console.log('leaving');
        this.menuCtrl.swipeGesture(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _core_eventbus_service__WEBPACK_IMPORTED_MODULE_7__["EventbusService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "RBmT":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.service */ "ZtwD");



let AuthGuard = class AuthGuard {
    constructor(utility) {
        this.utility = utility;
        console.log('auth');
    }
    canActivate(route, state) {
        if (this.utility.getToken() != null &&
            this.utility.getToken() != undefined) {
            if (JSON.parse(localStorage.getItem('userObj')).role == 'service provider') {
                this.utility.navigate('/tabs/provider-home');
                return true;
            }
            else {
                this.utility.navigate('/tabs/home');
                return true;
            }
        }
        else {
            console.log('else');
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgot-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <div class=\"top-logo\">\r\n    <img src=\"assets/images/logo.png\" />\r\n  </div>\r\n  <div class=\"top-txt\">\r\n    <h2>\r\n      You are a click away from the <span> World Of <i>O</i>ur Friends </span>\r\n    </h2>\r\n  </div>\r\n  <div class=\"role-section\">\r\n    <ion-list>\r\n      <ion-radio-group value=\"service_provider\" [(ngModel)]=\"user_role\">\r\n        <ion-list-header>\r\n          <ion-label class=\"user_role\">CHOOSE USER ROLE</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item class=\"user_role_options\">\r\n          <ion-label>Service Provider</ion-label>\r\n          <ion-radio\r\n            slot=\"start\"\r\n            name=\"service_provider\"\r\n            id=\"service_provider\"\r\n            value=\"service provider\"\r\n            mode=\"md\"\r\n          ></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"user_role_options\">\r\n          <ion-label>Pet Owner</ion-label>\r\n          <ion-radio\r\n            slot=\"start\"\r\n            name=\"pet_owner\"\r\n            id=\"pet_owner\"\r\n            value=\"pet owner\"\r\n            mode=\"md\"\r\n          ></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"cont-forms\">\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input\r\n          placeholder=\"Enter Email\"\r\n          value=\"mrmuff022@gmail.com\"\r\n          name=\"email\"\r\n          [(ngModel)]=\"model.email\"\r\n          required\r\n          #email=\"ngModel\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n        ></ion-input>\r\n\r\n        <!-- <span class=\"icon-ch\" slot=\"end\">\r\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n        </span> -->\r\n      </ion-item>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(email.touched || loginForm.submitted) && email.errors?.required\"\r\n      >\r\n        Email is required\r\n      </span>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(email.touched || loginForm.submitted) && email.errors?.pattern\"\r\n      >\r\n        Email is not valid\r\n      </span>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input\r\n          placeholder=\"Enter Password\"\r\n          name=\"password\"\r\n          type=\"password\"\r\n          [(ngModel)]=\"model.password\"\r\n          #password=\"ngModel\"\r\n          minlength=\"6\"\r\n          required\r\n        ></ion-input>\r\n      </ion-item>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(password.touched || loginForm.submitted) && password.errors?.required\"\r\n      >\r\n        Password is required\r\n      </span>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(password.touched || loginForm.submitted) && password.errors?.minlength\"\r\n      >\r\n        Password should contain 6 characters\r\n      </span>\r\n      <p class=\"forg-td\">\r\n        <a href=\"javascript:void(0)\" routerLink=\"/forgot-password\">\r\n          Forgot Password?\r\n        </a>\r\n      </p>\r\n      <div class=\"btn-cnt-r\">\r\n        <a\r\n          href=\"javascript:void(0)\"\r\n          class=\"reset-btn\"\r\n          type=\"submit\"\r\n          (click)=\"submit(loginForm)\"\r\n        >\r\n          Login\r\n        </a>\r\n      </div>\r\n      <p class=\"sign-td\">\r\n        <a\r\n          href=\"javascript:void(0)\"\r\n          (click)=\"loginForm.reset()\"\r\n          routerLink=\"/service-provider-home\"\r\n        >\r\n          Don’t have an account? Sign Up\r\n        </a>\r\n      </p>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.guard */ "RBmT");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "34Y5");





const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .top-logo {\n  margin-top: 10%;\n  text-align: center;\n}\n\nion-content .top-logo img {\n  max-width: 320px;\n  width: 100%;\n}\n\nion-content ion-radio {\n  margin-inline-end: 5px !important;\n}\n\nion-content .top-txt {\n  text-align: center;\n  margin-top: 0px;\n}\n\nion-content .top-txt h2 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  opacity: 0.76;\n}\n\nion-content .top-txt h2 span {\n  display: block;\n  font-size: 20px;\n}\n\nion-content .top-txt h2 span i {\n  font-style: initial;\n  color: #f79025;\n}\n\nion-content .cont-forms {\n  padding: 5px 20px 15px;\n  padding: 5px 20px 15px;\n  position: absolute;\n  width: 100%;\n  margin-top: 10%;\n}\n\nion-content .cont-forms ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  border-bottom: 1px solid #adadad;\n  --padding-bottom: 0px;\n  padding: 0px !important;\n  --padding-top: 15px;\n}\n\nion-content .cont-forms ion-item ion-label {\n  margin: 0px;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #000;\n  opacity: 0.62;\n}\n\nion-content .cont-forms ion-item ion-input {\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  height: 32px;\n  max-height: 32px;\n}\n\nion-content .cont-forms ion-item span.icon-ch {\n  margin: 0px;\n  position: absolute;\n  right: 0;\n  top: 22px;\n  font-size: 22px;\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 25px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 11px 55px;\n  border: 2px solid #ffaf87;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\nion-content p.forg-td {\n  margin: 0px;\n  text-align: right;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\nion-content p.forg-td a {\n  text-decoration: none;\n  font-size: 15px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content .user_role {\n  font-size: 16px;\n  color: #c1c1c1;\n}\n\nion-content .user_role_options {\n  width: 50%;\n  float: left;\n}\n\nion-content .user_role_options ion-label {\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWU7RUFDZixrQkFBa0I7QUFBdEI7O0FBSEE7RUFLTSxnQkFBZ0I7RUFDaEIsV0FBVztBQUVqQjs7QUFSQTtFQVdJLGlDQUFpQztBQUNyQzs7QUFaQTtFQWNJLGtCQUFrQjtFQUNsQixlQUFlO0FBRW5COztBQWpCQTtFQWlCTSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUluQjs7QUF6QkE7RUF1QlEsY0FBYztFQUNkLGVBQWU7QUFNdkI7O0FBOUJBO0VBMEJVLG1CQUFtQjtFQUNuQixjQUFjO0FBUXhCOztBQW5DQTtFQWlDSSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQU1uQjs7QUEzQ0E7RUF1Q00sb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLHFCQUFpQjtFQUNqQix1QkFBdUI7RUFFdkIsbUJBQWM7QUFPcEI7O0FBcERBO0VBK0NRLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQVNyQjs7QUE3REE7RUF1RFEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQVV4Qjs7QUFyRUE7RUE4RFEsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7QUFXdkI7O0FBN0VBO0VBdUVJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQVVsQjs7QUFuRkE7RUEyRU0scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQVl0Qjs7QUE5RkE7RUFzRkksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBWXZCOztBQXJHQTtFQTJGTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFjdEI7O0FBNUdBO0VBa0dJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBY3RCOztBQWxIQTtFQXNHTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFnQnRCOztBQXpIQTtFQThHSSxlQUFlO0VBQ2YsY0FBYztBQWVsQjs7QUE5SEE7RUFtSEksVUFBVTtFQUNWLFdBQVc7QUFlZjs7QUFuSUE7RUFzSE0sZUFBZTtBQWlCckIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC50b3AtbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1yYWRpbyB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50b3AtdHh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzY7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAgICAgICBjb2xvcjogI2Y3OTAyNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnQtZm9ybXMge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHggMTVweDtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIGhlaWdodDogNTNweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjI7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzJweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuLmljb24tY2gge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tY250LXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC5yZXNldC1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTFweCA1NXB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZhZjg3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBwLmZvcmctdGQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBwLnNpZ24tdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICM0ZTRlNGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlcl9yb2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJfcm9sZV9vcHRpb25zIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map