(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-methode-choose-payment-methode-choose-module"],{

/***/ "0sEu":
/*!*************************************************************************!*\
  !*** ./src/app/payment-methode-choose/payment-methode-choose.module.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentMethodeChoosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodeChoosePageModule", function() { return PaymentMethodeChoosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_methode_choose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-methode-choose-routing.module */ "cMrB");
/* harmony import */ var _payment_methode_choose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-methode-choose.page */ "tlKk");







let PaymentMethodeChoosePageModule = class PaymentMethodeChoosePageModule {
};
PaymentMethodeChoosePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_methode_choose_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodeChoosePageRoutingModule"]
        ],
        declarations: [_payment_methode_choose_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodeChoosePage"]]
    })
], PaymentMethodeChoosePageModule);



/***/ }),

/***/ "cMrB":
/*!*********************************************************************************!*\
  !*** ./src/app/payment-methode-choose/payment-methode-choose-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentMethodeChoosePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodeChoosePageRoutingModule", function() { return PaymentMethodeChoosePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_methode_choose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-methode-choose.page */ "tlKk");




const routes = [
    {
        path: '',
        component: _payment_methode_choose_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodeChoosePage"]
    }
];
let PaymentMethodeChoosePageRoutingModule = class PaymentMethodeChoosePageRoutingModule {
};
PaymentMethodeChoosePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodeChoosePageRoutingModule);



/***/ }),

/***/ "geIb":
/*!*************************************************************************!*\
  !*** ./src/app/payment-methode-choose/payment-methode-choose.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .choose-paymt h4.txr-st {\n  margin-top: 0px;\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n}\n\nion-content ion-radio-group.list-ict ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0 10px;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-label {\n  font-size: 18px;\n  letter-spacing: 0px;\n  color: #000;\n  font-weight: 600;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-label img {\n  vertical-align: middle;\n  height: 47px;\n  margin-right: 7px;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-radio {\n  margin: 0px;\n  background: #fff;\n  width: 25px;\n  height: 25px;\n  border: 8px solid #d4d4d4;\n  border-radius: 50%;\n  --color-checked: transparent;\n  --color: transparent;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-radio.radio-checked {\n  border: 8px solid #a194bb;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 7px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 13px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 35px;\n  --height: 35px;\n  max-height: 35px;\n  font-size: 18px;\n  font-weight: 500;\n  font-family: \"Lato\", sans-serif !important;\n  color: #000;\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  --placeholder-color: #000;\n  --placeholder-opacity: 1;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content .form-botm {\n  display: block;\n  margin-top: 20px;\n}\n\nion-content ion-row.marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 20px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 11px 35px;\n  border: 2px solid #d5c2fb;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnQtbWV0aG9kZS1jaG9vc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtBQUFoQjs7QUFGQTtFQUtJLGtCQUFrQjtBQUN0Qjs7QUFOQTtFQVFJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUVsQjs7QUFaQTtFQWNNLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBRXpCOztBQXJCQTtFQXdCTSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ3JCOztBQTlCQTtFQStCUSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFHeEI7O0FBckNBO0VBb0NVLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBSzNCOztBQTNDQTtFQTBDUSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBZ0I7RUFDaEIsb0JBQVE7QUFLaEI7O0FBdERBO0VBb0RRLHlCQUF5QjtBQU1qQzs7QUExREE7RUF5REksb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUt0Qjs7QUFqRUE7RUE4RE0sZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBTy9COztBQTNFQTs7RUF3RU0sZ0NBQWdDO0VBQ2hDLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxrQkFBYztFQUNkLHFCQUFpQjtFQUNqQix5QkFBb0I7RUFDcEIsd0JBQXNCO0FBUTVCOztBQTdGQTtFQXdGTSxtQkFBYztBQVNwQjs7QUFqR0E7RUE0RkksY0FBYztFQUNkLGdCQUFnQjtBQVNwQjs7QUF0R0E7RUFnR0ksY0FBYztBQVVsQjs7QUExR0E7RUFtR0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBV2xCOztBQWhIQTtFQXVHTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBYXRCIiwiZmlsZSI6InBheW1lbnQtbWV0aG9kZS1jaG9vc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5ib3R0bS1jb250cyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIGg0LnR0bC10cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5jb250LWNhbGVmIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmNob29zZS1wYXltdCB7XHJcbiAgICBoNC50eHItc3Qge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1yYWRpby1ncm91cC5saXN0LWljdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQge1xyXG4gICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNhMTk0YmI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0uaW5wdC1mIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjYyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgLS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDtcclxuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWJvdG0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBpb24tcm93Lm1hcmctbnNnIHtcclxuICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gIH1cclxuICAuYnRuLWNudC1yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAucmVzZXQtYnRuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMzVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2Q1YzJmYjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gc3Bhbi5iYWNrLWljb24ge1xyXG4vLyBcdHBhZGRpbmc6IDE1cHg7XHJcbi8vIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyBcdGZvbnQtc2l6ZTogMjVweDtcclxuLy8gXHRjb2xvcjogI2ZmZjtcclxuLy8gXHRtYXJnaW4tdG9wOiAwcHg7XHJcbi8vIH1cclxuIl19 */");

/***/ }),

/***/ "qHYe":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-methode-choose/payment-methode-choose.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head bg-prple\">\r\n\t\t<img src=\"assets/images/logo4.png\" class=\"img-logo\">\r\n\t\t<span class=\"back-icon\" routerLink=\"/tabs/cart\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> </span>\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp txt-prple\"> Payment </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<div class=\"choose-paymt\">\r\n\t\t\t\t<h4 class=\"txr-st\"> Payment Method </h4>\r\n\t\t\t\t<ion-radio-group value=\"buford\" class=\"list-ict\">\r\n\t\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t\t<ion-label><img src=\"assets/images/pay1.png\"> Payment with Paypal</ion-label>\r\n\t\t\t\t\t\t<ion-radio slot=\"end\" value=\"biff\"></ion-radio>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t\t<ion-label><img src=\"assets/images/pay2.png\"> Credit Card</ion-label>\r\n\t\t\t\t\t\t<ion-radio slot=\"end\" value=\"buford\"></ion-radio>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t\t<ion-label><img src=\"assets/images/pay3.png\"> MB WAY </ion-label>\r\n\t\t\t\t\t\t<ion-radio slot=\"end\" value=\"buford2\"></ion-radio>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-radio-group>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-botm\">\r\n\t\t\t\t\r\n\t\t\t\t<ion-row class=\"marg-nsg\">\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t\t\t  <ion-label position=\"stacked\">First Name</ion-label>\r\n\t\t\t\t\t\t  <ion-input placeholder=\"\" value=\"Shelton\"></ion-input>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Second Name</ion-label>\r\n\t\t\t\t\t\t  <ion-input placeholder=\"\" value=\"Bishop\"></ion-input>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t  <ion-label position=\"stacked\">Card Number</ion-label>\r\n\t\t\t\t  <ion-input placeholder=\"\" value=\"9 987 6543 210\"></ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-row class=\"marg-nsg\">\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Expires</ion-label>\r\n\t\t\t\t\t\t  <ion-input placeholder=\"MM/YY\" value=\"\"></ion-input>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Security Code</ion-label>\r\n\t\t\t\t\t\t  <ion-input placeholder=\"\" value=\"234\"></ion-input>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t\t  <ion-label position=\"stacked\">BILLING ADDRESS</ion-label>\r\n\t\t\t\t  <ion-input placeholder=\"\" value=\"2912  Hurry Street\"></ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<div class=\"btn-cnt-r\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"reset-btn\" routerLink=\"/tabs/home\"> Place Order </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "tlKk":
/*!***********************************************************************!*\
  !*** ./src/app/payment-methode-choose/payment-methode-choose.page.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentMethodeChoosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodeChoosePage", function() { return PaymentMethodeChoosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_methode_choose_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-methode-choose.page.html */ "qHYe");
/* harmony import */ var _payment_methode_choose_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-methode-choose.page.scss */ "geIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentMethodeChoosePage = class PaymentMethodeChoosePage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentMethodeChoosePage.ctorParameters = () => [];
PaymentMethodeChoosePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-methode-choose',
        template: _raw_loader_payment_methode_choose_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_methode_choose_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentMethodeChoosePage);



/***/ })

}]);
//# sourceMappingURL=payment-methode-choose-payment-methode-choose-module.js.map