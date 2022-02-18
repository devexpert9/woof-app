(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-successful-payment-successful-module"],{

/***/ "5PGH":
/*!***************************************************************!*\
  !*** ./src/app/payment-successful/payment-successful.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentSuccessfulPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessfulPage", function() { return PaymentSuccessfulPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_successful_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-successful.page.html */ "sLC5");
/* harmony import */ var _payment_successful_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-successful.page.scss */ "U9Qc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");





let PaymentSuccessfulPage = class PaymentSuccessfulPage {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
        setTimeout(() => {
            this.utilityService.navigate('tabs/home');
        }, 2000);
    }
};
PaymentSuccessfulPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
PaymentSuccessfulPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-successful',
        template: _raw_loader_payment_successful_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_successful_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentSuccessfulPage);



/***/ }),

/***/ "U9Qc":
/*!*****************************************************************!*\
  !*** ./src/app/payment-successful/payment-successful.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .pay-bs {\n  text-align: center;\n  margin-top: 60px;\n  background: #fff;\n  box-shadow: 5px 6px 5px rgba(0, 0, 0, 0.1);\n  padding: 50px 10px;\n  border-radius: 20px;\n}\n\nion-content .cont-calef .pay-bs h3 {\n  font-size: 25px;\n  font-weight: 600;\n  color: #222;\n}\n\nion-content .cont-calef .pay-bs .btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #ededed;\n  padding: 10px 35px;\n  border-radius: 50px;\n  margin-top: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnQtc3VjY2Vzc2Z1bC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZO0FBQWQ7O0FBRkE7RUFLRSxrQkFBa0I7QUFDcEI7O0FBTkE7RUFRRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWE7QUFFZjs7QUFaQTtFQVlHLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBSXRCOztBQXJCQTtFQW1CSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFNZjs7QUEzQkE7RUF3QkkscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBT3BCIiwiZmlsZSI6InBheW1lbnQtc3VjY2Vzc2Z1bC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LmJvdHRtLWNvbnRzIHtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHR9XHJcblx0aDQudHRsLXRwIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMjVweDtcclxuXHR9XHJcblx0LmNvbnQtY2FsZWYge1xyXG5cdFx0cGFkZGluZzogMjBweCAyMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHQucGF5LWJzIHtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA2MHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRib3gtc2hhZG93OiA1cHggNnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdGgzIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRjb2xvcjogIzIyMjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYnRuLWNveSB7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdGNvbG9yOiAjNGQ0ZDRkO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggMzVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDE3cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "jXZe":
/*!*****************************************************************!*\
  !*** ./src/app/payment-successful/payment-successful.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentSuccessfulPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessfulPageModule", function() { return PaymentSuccessfulPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_successful_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-successful-routing.module */ "y43L");
/* harmony import */ var _payment_successful_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-successful.page */ "5PGH");







let PaymentSuccessfulPageModule = class PaymentSuccessfulPageModule {
};
PaymentSuccessfulPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_successful_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentSuccessfulPageRoutingModule"]
        ],
        declarations: [_payment_successful_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessfulPage"]]
    })
], PaymentSuccessfulPageModule);



/***/ }),

/***/ "sLC5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-successful/payment-successful.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> PAYMENTS </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<div class=\"pay-bs\">\r\n\t\t\t\t<img src=\"assets/images/thanks.png\">\r\n\t\t\t\t<h3> Payment Successful </h3>\r\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/tabs/chat-single\"  class=\"btn-coy\"> Contact Seller </a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "y43L":
/*!*************************************************************************!*\
  !*** ./src/app/payment-successful/payment-successful-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentSuccessfulPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessfulPageRoutingModule", function() { return PaymentSuccessfulPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_successful_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-successful.page */ "5PGH");




const routes = [
    {
        path: '',
        component: _payment_successful_page__WEBPACK_IMPORTED_MODULE_3__["PaymentSuccessfulPage"]
    }
];
let PaymentSuccessfulPageRoutingModule = class PaymentSuccessfulPageRoutingModule {
};
PaymentSuccessfulPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentSuccessfulPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=payment-successful-payment-successful-module.js.map