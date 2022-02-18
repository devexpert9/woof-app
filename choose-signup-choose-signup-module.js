(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-signup-choose-signup-module"],{

/***/ "BMXd":
/*!***************************************************************!*\
  !*** ./src/app/choose-signup/choose-signup-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChooseSignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSignupPageRoutingModule", function() { return ChooseSignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choose_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-signup.page */ "Xsxu");




const routes = [
    {
        path: '',
        component: _choose_signup_page__WEBPACK_IMPORTED_MODULE_3__["ChooseSignupPage"]
    }
];
let ChooseSignupPageRoutingModule = class ChooseSignupPageRoutingModule {
};
ChooseSignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseSignupPageRoutingModule);



/***/ }),

/***/ "C6Ng":
/*!*******************************************************!*\
  !*** ./src/app/choose-signup/choose-signup.module.ts ***!
  \*******************************************************/
/*! exports provided: ChooseSignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSignupPageModule", function() { return ChooseSignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choose_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-signup-routing.module */ "BMXd");
/* harmony import */ var _choose_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-signup.page */ "Xsxu");







let ChooseSignupPageModule = class ChooseSignupPageModule {
};
ChooseSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseSignupPageRoutingModule"]
        ],
        declarations: [_choose_signup_page__WEBPACK_IMPORTED_MODULE_6__["ChooseSignupPage"]]
    })
], ChooseSignupPageModule);



/***/ }),

/***/ "O7X5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-signup/choose-signup.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>choose-signup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Xsxu":
/*!*****************************************************!*\
  !*** ./src/app/choose-signup/choose-signup.page.ts ***!
  \*****************************************************/
/*! exports provided: ChooseSignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSignupPage", function() { return ChooseSignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-signup.page.html */ "O7X5");
/* harmony import */ var _choose_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-signup.page.scss */ "n/e3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChooseSignupPage = class ChooseSignupPage {
    constructor() { }
    ngOnInit() {
    }
};
ChooseSignupPage.ctorParameters = () => [];
ChooseSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-signup',
        template: _raw_loader_choose_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseSignupPage);



/***/ }),

/***/ "n/e3":
/*!*******************************************************!*\
  !*** ./src/app/choose-signup/choose-signup.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2Utc2lnbnVwLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=choose-signup-choose-signup-module.js.map