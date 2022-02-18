(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "/ujS":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.page.html */ "YQwf");
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.page.scss */ "Gr1o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChangePasswordPage = class ChangePasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ChangePasswordPage.ctorParameters = () => [];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangePasswordPage);



/***/ }),

/***/ "6+Cs":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "/ujS");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "8oFo":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "6+Cs");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "/ujS");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "Gr1o":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .top-logo {\n  text-align: center;\n}\n\nion-content .top-logo img {\n  max-width: 320px;\n  width: 100%;\n}\n\nion-content .top-txt {\n  text-align: center;\n  margin-top: 0px;\n}\n\nion-content .top-txt h2 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  opacity: 0.76;\n}\n\nion-content .top-txt h2 span {\n  display: block;\n  font-size: 20px;\n}\n\nion-content .top-txt h2 span i {\n  font-style: initial;\n  color: #f79025;\n}\n\nion-content .cont-forms {\n  padding: 0px;\n}\n\nion-content .cont-forms ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  border-bottom: 1px solid #adadad;\n  --padding-bottom: 0px;\n  padding: 0px !important;\n  height: 53px;\n  margin-bottom: 25px;\n}\n\nion-content .cont-forms ion-item ion-label {\n  margin: 0px;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: 400;\n  color: #646464;\n  opacity: 0.62;\n  font-weight: 500;\n}\n\nion-content .cont-forms ion-item ion-input {\n  font-size: 18px;\n  font-weight: 400;\n  color: #000000;\n  height: 32px;\n  max-height: 33px;\n  position: relative;\n  top: 1px;\n}\n\nion-content .cont-forms ion-item span.icon-ch {\n  margin: 0px;\n  position: absolute;\n  right: 0;\n  top: 24px;\n  font-size: 20px;\n  color: #adadad;\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 25px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #131212cc;\n  text-decoration: none;\n  padding: 11px 55px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50px;\n  font-weight: 500;\n}\n\nion-content p.forg-td {\n  margin: 0px;\n  text-align: right;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\nion-content p.forg-td a {\n  text-decoration: none;\n  font-size: 15px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\ninput {\n  font-size: 19px !important;\n  font-weight: 400 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7QUFBcEI7O0FBRkE7RUFJRyxnQkFBZ0I7RUFDaEIsV0FBVztBQUVkOztBQVBBO0VBU0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFFakI7O0FBWkE7RUFZRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUloQjs7QUFwQkE7RUFrQkksY0FBYztFQUNkLGVBQWU7QUFNbkI7O0FBekJBO0VBcUJLLG1CQUFtQjtFQUNuQixjQUFjO0FBUW5COztBQTlCQTtFQTRCRSxZQUFXO0FBTWI7O0FBbENBO0VBOEJHLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLGdDQUFnQztFQUNoQyxxQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUFRdEI7O0FBNUNBO0VBc0NRLFdBQVc7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtBQVVwQjs7QUF0REE7RUErQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFDRDtBQVVIOztBQWhFQTtFQXdESSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFZbEI7O0FBekVBO0VBa0VFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQVdoQjs7QUEvRUE7RUFzRUcscUJBQXFCO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQWFwQjs7QUExRkE7RUFpRkUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBYXJCOztBQWpHQTtFQXNGRyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFlbkI7O0FBeEdBO0VBNkZFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBZXBCOztBQTlHQTtFQWlHRyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFpQm5COztBQWJBO0VBQ0ksMEJBQTBCO0VBQzFCLDJCQUEyQjtBQWdCL0IiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQudG9wLWxvZ28ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aW1nIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAzMjBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdC50b3AtdHh0IHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDBweDtcclxuXHRcdGgyIHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdG9wYWNpdHk6IDAuNzY7XHJcblx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0XHRpIHtcclxuXHRcdFx0XHRcdGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcblx0XHRcdFx0XHRjb2xvcjogI2Y3OTAyNTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnQtZm9ybXMge1xyXG5cdFx0cGFkZGluZzowcHg7XHJcblx0XHRpb24taXRlbSAge1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcclxuXHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0XHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuXHRcdFx0aGVpZ2h0OiA1M3B4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0XHRpb24tbGFiZWwgIHtcclxuXHRcdFx0XHQgICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgb3BhY2l0eTogMC42MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWlucHV0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHhcclxuXHRcdFx0fVxyXG5cdFx0XHRzcGFuLmljb24tY2gge1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2FkYWRhZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYnRuLWNudC1yIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQucmVzZXQtYnRuIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxMzEyMTJjYztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDExcHggNTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdH1cclxuXHR9XHJcblx0cC5mb3JnLXRkIHtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRtYXJnaW4tdG9wOiAtMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRhIHtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdGNvbG9yOiAjNGU0ZTRlO1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0fVxyXG5cdH0gXHJcblx0cC5zaWduLXRkIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHRhIHtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdGNvbG9yOiAjNGU0ZTRlO1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "YQwf":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgot-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"acc\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">CHANGE PASSWORD </h4>\r\n\t\r\n\t<div class=\"cont-forms\">\r\n\t\t<ion-item lines=\"none\">\r\n\t\t  <ion-label position=\"stacked\">CURRENT PASSWORD</ion-label>\r\n\t\t  <ion-input placeholder=\"Enter Email\" value=\"**************\"></ion-input>\r\n\t\t  <span class=\"icon-ch\" slot=\"end\">   <ion-icon name=\"eye\"></ion-icon>\r\n </span>\r\n\t\t</ion-item>\r\n\t\t<ion-item lines=\"none\">\r\n\t\t  <ion-label position=\"stacked\">New Password</ion-label>\r\n\t\t  <ion-input placeholder=\"Enter Password\" value=\"qwerty@321\"></ion-input>\r\n\t\t  <span class=\"icon-ch\" slot=\"end\">     <ion-icon name=\"eye-off\"></ion-icon>\r\n\r\n </span>\r\n\t\t</ion-item>\r\n\t\t\r\n\t\t<ion-item lines=\"none\">\r\n\t\t  <ion-label position=\"stacked\">Confirm Password</ion-label>\r\n\t\t  <ion-input placeholder=\"Enter Password\" value=\"qwerty@321\"></ion-input>\r\n\t\t  <span class=\"icon-ch\" slot=\"end\">     <ion-icon name=\"eye-off\"></ion-icon>\r\n\r\n </span>\r\n\t\t</ion-item>\r\n\t\t\r\n\t\t<div class=\"btn-cnt-r\">\r\n\t\t\t<a href=\"javascript:void(0)\" class=\"reset-btn\" routerLink=\"#\"> Save </a>\r\n\t\t</div>\r\n\r\n\t</div>\t</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map