(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-login-service-provider-login-module"],{

/***/ "EFgS":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-login/service-provider-login.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>service-provider-login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "FWeF":
/*!***********************************************************************!*\
  !*** ./src/app/service-provider-login/service-provider-login.page.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceProviderLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderLoginPage", function() { return ServiceProviderLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-login.page.html */ "EFgS");
/* harmony import */ var _service_provider_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-login.page.scss */ "VP2e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServiceProviderLoginPage = class ServiceProviderLoginPage {
    constructor() { }
    ngOnInit() {
    }
};
ServiceProviderLoginPage.ctorParameters = () => [];
ServiceProviderLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-login',
        template: _raw_loader_service_provider_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderLoginPage);



/***/ }),

/***/ "LDlv":
/*!*********************************************************************************!*\
  !*** ./src/app/service-provider-login/service-provider-login-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceProviderLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderLoginPageRoutingModule", function() { return ServiceProviderLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-login.page */ "FWeF");




const routes = [
    {
        path: '',
        component: _service_provider_login_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderLoginPage"]
    }
];
let ServiceProviderLoginPageRoutingModule = class ServiceProviderLoginPageRoutingModule {
};
ServiceProviderLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderLoginPageRoutingModule);



/***/ }),

/***/ "VP2e":
/*!*************************************************************************!*\
  !*** ./src/app/service-provider-login/service-provider-login.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXByb3ZpZGVyLWxvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "oIV7":
/*!*************************************************************************!*\
  !*** ./src/app/service-provider-login/service-provider-login.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceProviderLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderLoginPageModule", function() { return ServiceProviderLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-login-routing.module */ "LDlv");
/* harmony import */ var _service_provider_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-provider-login.page */ "FWeF");







let ServiceProviderLoginPageModule = class ServiceProviderLoginPageModule {
};
ServiceProviderLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderLoginPageRoutingModule"]
        ],
        declarations: [_service_provider_login_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderLoginPage"]]
    })
], ServiceProviderLoginPageModule);



/***/ })

}]);
//# sourceMappingURL=service-provider-login-service-provider-login-module.js.map