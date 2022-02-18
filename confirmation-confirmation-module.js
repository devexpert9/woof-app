(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmation-confirmation-module"],{

/***/ "6aH2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> CONFIRMATION </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<div class=\"image-main\">\r\n\t\t\t<img src=\"assets/images/confirmation.png\" class=\"img-banner\">\r\n\t\t\t<h2 class=\"headng\">Thank You for Booking!</h2>\r\n\t\t\t<p class=\"text-conf\">Your request regarding the appointment has<br>\r\nbeen sent to the Service Provider. Please wait for the\r\nconfirmation message. </p><p class=\"text-conf\">Your payment is safe with us till then. </p>\r\n\t\t\t\r\n\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/tabs/woof-care\"  class=\"btn-coy\"> Back to Home </a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "NLLk":
/*!*************************************************************!*\
  !*** ./src/app/confirmation/confirmation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageRoutingModule", function() { return ConfirmationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation.page */ "wk97");




const routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPage"]
    }
];
let ConfirmationPageRoutingModule = class ConfirmationPageRoutingModule {
};
ConfirmationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmationPageRoutingModule);



/***/ }),

/***/ "lUhE":
/*!*****************************************************!*\
  !*** ./src/app/confirmation/confirmation.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function() { return ConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-routing.module */ "NLLk");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation.page */ "wk97");







let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPageRoutingModule"]
        ],
        declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]]
    })
], ConfirmationPageModule);



/***/ }),

/***/ "m3MB":
/*!*****************************************************!*\
  !*** ./src/app/confirmation/confirmation.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .pay-bs {\n  text-align: center;\n  margin-top: 60px;\n  background: #fff;\n  box-shadow: 5px 6px 5px rgba(0, 0, 0, 0.1);\n  padding: 50px 10px;\n  border-radius: 20px;\n}\n\nion-content .cont-calef .pay-bs h3 {\n  font-size: 25px;\n  font-weight: 600;\n  color: #222;\n}\n\nion-content .cont-calef .pay-bs .btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #ededed;\n  padding: 10px 35px;\n  border-radius: 50px;\n  margin-top: 17px;\n}\n\n.image-main {\n  text-align: center;\n}\n\n.headng {\n  color: #080808;\n  font-size: 25px;\n  font-weight: 800;\n  margin-top: 55px;\n}\n\n.btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 12px 25px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 50px;\n}\n\n.text-conf {\n  font-size: 14px;\n  color: #080808d9;\n  font-weight: 500;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZO0FBQWQ7O0FBRkE7RUFLRSxrQkFBa0I7QUFDcEI7O0FBTkE7RUFRRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWE7QUFFZjs7QUFaQTtFQVlHLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBSXRCOztBQXJCQTtFQW1CSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFNZjs7QUEzQkE7RUF3QkkscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBT3BCOztBQUZBO0VBQ0ksa0JBQWtCO0FBS3RCOztBQUpDO0VBQ0csY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBT3BCOztBQU5DO0VBQ0UscUJBQXFCO0VBQ3BCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBU3ZCOztBQVBBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFVcEIiLCJmaWxlIjoiY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxuXHRoNC50dGwtdHAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHQuY29udC1jYWxlZiB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdC5wYXktYnMge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdG1hcmdpbi10b3A6IDYwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6IDVweCA2cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcblx0XHRcdHBhZGRpbmc6IDUwcHggMTBweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5idG4tY295IHtcclxuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0Y29sb3I6ICM0ZDRkNGQ7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlZGVkZWQ7XHJcblx0XHRcdFx0cGFkZGluZzogMTBweCAzNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMTdweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uaW1hZ2UtbWFpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0uaGVhZG5nIHtcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbn0uYnRuLWNveSB7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcclxuICAgIHBhZGRpbmc6IDEycHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi50ZXh0LWNvbmYge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwODA4MDhkOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "wk97":
/*!***************************************************!*\
  !*** ./src/app/confirmation/confirmation.page.ts ***!
  \***************************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmation.page.html */ "6aH2");
/* harmony import */ var _confirmation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation.page.scss */ "m3MB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConfirmationPage = class ConfirmationPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmationPage.ctorParameters = () => [];
ConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmation',
        template: _raw_loader_confirmation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmationPage);



/***/ })

}]);
//# sourceMappingURL=confirmation-confirmation-module.js.map