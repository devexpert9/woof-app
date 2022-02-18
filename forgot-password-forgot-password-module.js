(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "2bN1":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "l7ks");
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss */ "hxgU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");






let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(authService, utility) {
        this.authService = authService;
        this.utility = utility;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.email = '';
    }
    reset() {
        if (this.email.replace(/ /g, '') == '') {
            return;
        }
        this.utility.present();
        this.authService.forgotPassword({ email: this.email }).subscribe((res) => {
            console.log(res);
            if (res['status'])
                this.utility.prompt('Please check your mail for further assistance', (cb) => {
                    if (cb) {
                        this.utility.navigate('/login');
                    }
                });
            else {
                this.utility.showAlert(res['msg']);
            }
            this.utility.dismiss();
            // this.utility.customAlert('Ok',','Please check your mail for further assistance');
        }, (err) => {
            console.log('something went wrong');
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong, Please try again later');
            setTimeout(() => {
                this.utility.navigate('/login');
            }, 2000);
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "8PDw":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.service */ "ZtwD");






let AuthService = class AuthService {
    constructor(http, bHTTP, utility) {
        this.http = http;
        this.bHTTP = bHTTP;
        this.utility = utility;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'users/';
        this.serviceBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service/';
        this.registerUrl = this.baseUrl + 'register';
        this.loginUrl = this.baseUrl + 'login';
        this.profileUrl = this.baseUrl + 'profile';
        this.updateUrl = this.baseUrl + 'update-profile';
        this.serviceProvider = this.baseUrl + 'getServiceProvider?category={category}';
        this.serviceCategory = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service-category/get';
        this.forgot = this.baseUrl + 'forgot-password';
        this.serviceDetail = this.serviceBaseUrl + 'details';
    }
    login(json) {
        return this.http.post(this.loginUrl, json);
    }
    register(json) {
        return this.http.post(this.registerUrl, json);
    }
    getProfile(json) {
        return this.http.post(this.profileUrl, json).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            let data = res['data'];
            if (data.image != '' && data.image != undefined && data.image != null) {
                data.imageUrl = this.utility.getPetImageUrl(data.image);
            }
            else {
                data.imageUrl = '';
            }
            if (data.dogFooterImage != '' &&
                data.dogFooterImage != undefined &&
                data.dogFooterImage != null) {
                data.dogImageUrl = this.utility.getPetImageUrl(data.dogFooterImage);
            }
            else {
                data.dogImageUrl = '';
            }
            return data;
        }));
    }
    getServiceProvider(category) {
        let url = this.serviceProvider.replace('{category}', category);
        return this.http.get(url);
    }
    getServiceDetail(data) {
        return this.http.post(this.serviceDetail, data);
    }
    updateProfile(data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHTTP);
        let fd = new FormData();
        fd.append('fistname', data.firstname);
        fd.append('lastname', data.lastname);
        fd.append('fiscalNumber', data.fiscalNumber);
        fd.append('email', data.email);
        fd.append('nationality', data.nationality);
        fd.append('contact', data.contact);
        fd.append('city', data.city);
        fd.append('address', data.address);
        fd.append('country', data.country);
        fd.append('zipcode', data.zipCode);
        fd.append('image', data.image);
        fd.append('dogFooterImage', data.dogFooterImage);
        // return this.http.post(this.updateUrl, data);
        return newHTTP.post(this.updateUrl, fd, {
            headers: { authorization: this.utility.getToken() },
        });
    }
    getServiceCategory() {
        return this.http.get(this.serviceCategory);
    }
    forgotPassword(data) {
        return this.http.post(this.forgot, data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "JgOp":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "RtEn");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "RtEn":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "hxgU":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .top-logo {\n  text-align: center;\n}\n\nion-content .top-logo img {\n  max-width: 400px;\n  width: 100%;\n}\n\nion-content .top-txt {\n  text-align: center;\n  margin-top: 8px;\n}\n\nion-content .top-txt h2 {\n  margin: 0px;\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  opacity: 0.76;\n}\n\nion-content .top-txt p {\n  margin: 0px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #000000;\n  opacity: 0.76;\n  margin-top: 15px;\n  line-height: 19px;\n}\n\nion-content .cont-forms {\n  padding: 30px 20px 15px;\n}\n\nion-content .cont-forms ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  border-bottom: 1px solid #adadad;\n  --padding-bottom: 0px;\n  padding: 0px !important;\n  height: 53px;\n  margin-bottom: 15px;\n}\n\nion-content .cont-forms ion-item ion-label {\n  margin: 0px;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #000;\n  opacity: 0.62;\n}\n\nion-content .cont-forms ion-item ion-input {\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  height: 32px;\n  max-height: 32px;\n}\n\nion-content .cont-forms ion-item span.icon-ch {\n  margin: 0px;\n  position: absolute;\n  right: 0;\n  top: 22px;\n  font-size: 22px;\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 25px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 12px 25px;\n  border: 2px solid #ffaf87;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7QUFBcEI7O0FBRkE7RUFJRyxnQkFBZ0I7RUFDaEIsV0FBVztBQUVkOztBQVBBO0VBU0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFFakI7O0FBWkE7RUFZRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUloQjs7QUFwQkE7RUFtQkcsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBS3BCOztBQTlCQTtFQTZCRSx1QkFBdUI7QUFLekI7O0FBbENBO0VBK0JHLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLGdDQUFnQztFQUNoQyxxQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUFPdEI7O0FBNUNBO0VBdUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQVNqQjs7QUFyREE7RUErQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQVVwQjs7QUE3REE7RUFzREksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7QUFXbkI7O0FBckVBO0VBK0RFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQVVoQjs7QUEzRUE7RUFtRUcscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQVluQiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC50b3AtbG9nbyB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRpbWcge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnRvcC10eHQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogOHB4O1xyXG5cdFx0aDIge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0b3BhY2l0eTogMC43NjtcclxuXHRcdH1cclxuXHRcdHAge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0b3BhY2l0eTogMC43NjtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb250LWZvcm1zIHtcclxuXHRcdHBhZGRpbmc6IDMwcHggMjBweCAxNXB4O1xyXG5cdFx0aW9uLWl0ZW0gIHtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcblx0XHRcdC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuXHRcdFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdGhlaWdodDogNTNweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdFx0aW9uLWxhYmVsICB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjYyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1pbnB1dCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xyXG5cdFx0XHRcdG1heC1oZWlnaHQ6IDMycHg7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Bhbi5pY29uLWNoIHtcclxuXHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0dG9wOiAyMnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYnRuLWNudC1yIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQucmVzZXQtYnRuIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdGNvbG9yOiAjNGQ0ZDRkO1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdHBhZGRpbmc6IDEycHggMjVweDtcclxuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2ZmYWY4NztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "l7ks":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgot-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <div class=\"top-logo\">\r\n    <img src=\"assets/images/logo.png\" />\r\n  </div>\r\n  <div class=\"top-txt\">\r\n    <h2>Forgot Your Password?</h2>\r\n    <p>\r\n      Confirm your email and we’ll <br />\r\n      send the instructions.\r\n    </p>\r\n  </div>\r\n  <div class=\"cont-forms\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Email</ion-label>\r\n      <ion-input\r\n        placeholder=\"Enter Email\"\r\n        name=\"name\"\r\n        [(ngModel)]=\"email\"\r\n      ></ion-input>\r\n      <span class=\"icon-ch\" slot=\"end\">\r\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n      </span>\r\n    </ion-item>\r\n    <div class=\"btn-cnt-r\">\r\n      <a href=\"javascript:void(0)\" class=\"reset-btn\" (click)=\"reset()\">\r\n        Reset Password\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map