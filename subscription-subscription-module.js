(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "AfdY":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "KGXC");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.page */ "V5vJ");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPageRoutingModule"],
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]],
    })
], SubscriptionPageModule);



/***/ }),

/***/ "DdsP":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .sbsc-box {\n  display: block;\n  width: 125px;\n  min-height: 125px;\n  border: 1px solid #e1e1e1;\n  text-align: center;\n  border-radius: 30px;\n  background: #fff;\n  position: relative;\n  margin: 0 auto 20px;\n  z-index: 0;\n}\n\nion-content .sbsc-box h3 {\n  font-size: 33px;\n  color: #4c4c4c;\n  margin-bottom: 0px;\n  margin-top: 14px;\n}\n\nion-content .sbsc-box h5 {\n  font-size: 16px;\n  color: #4c4c4c;\n  margin-top: 3px;\n}\n\nion-content .sbsc-box span.info-v {\n  font-size: 21px;\n  color: #dfd1fa;\n  margin-top: 5px;\n  display: inline-block;\n}\n\nion-content .sbsc-box1 {\n  display: block;\n  min-height: 125px;\n  border: 1px solid #e1e1e1;\n  text-align: center;\n  border-radius: 30px;\n  background: #fff;\n  position: relative;\n  margin: 0 auto 20px;\n  z-index: 0;\n  padding: 0 0 15px;\n}\n\nion-content .sbsc-box1 h3 {\n  font-size: 33px;\n  color: #4c4c4c;\n  margin-bottom: 0px;\n  margin-top: 14px;\n}\n\nion-content .sbsc-box1 h5 {\n  font-size: 16px;\n  color: #4c4c4c;\n  margin-top: 3px;\n}\n\nion-content .sbsc-box1 span.info-v {\n  font-size: 21px;\n  color: #dfd1fa;\n  margin-top: 5px;\n  display: inline-block;\n}\n\nion-content .sbsc-box.selected {\n  border: 2px solid #d5c2fb;\n  overflow: hidden;\n  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.11);\n}\n\nion-content .sbsc-box.selected h3 {\n  font-size: 29px;\n  margin-top: 28px;\n}\n\nion-content .sbsc-box.selected h5 {\n  font-size: 14px;\n  color: #585858;\n  margin-bottom: 5px;\n}\n\nion-content .sbsc-box.selected span.selct-check {\n  position: absolute;\n  background: #dfd1fa;\n  color: #fff;\n  width: 75px;\n  transform: rotate(41deg);\n  top: -25px;\n  padding: 6px;\n  font-size: 18px;\n  right: -26px;\n  padding-top: 30px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n}\n\nion-content .sbsc-box.selected span.selct-check ion-icon {\n  transform: rotate(-25deg);\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 20px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 11px 30px;\n  border: 2px solid #d5c2fb;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0FBQWhCOztBQUZBO0VBS0ksa0JBQWtCO0FBQ3RCOztBQU5BO0VBUUksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBRWxCOztBQVpBO0VBb0JJLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFKZDs7QUF6QkE7RUErQk0sZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRnRCOztBQWhDQTtFQXFDTSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFEckI7O0FBdENBO0VBMENNLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQUEzQjs7QUE3Q0E7RUFrREksY0FBYztFQUVkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0FBRnJCOztBQTFEQTtFQThETSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFBdEI7O0FBakVBO0VBb0VNLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNyQjs7QUF2RUE7RUF5RU0sZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBRTNCOztBQTlFQTtFQWdGSSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUVoRDs7QUFwRkE7RUFvRk0sZUFBZTtFQUNmLGdCQUFnQjtBQUl0Qjs7QUF6RkE7RUF3Rk0sZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFLeEI7O0FBL0ZBO0VBNkZNLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBTXhCOztBQTlHQTtFQTBHUSx5QkFBeUI7QUFRakM7O0FBbEhBO0VBK0dJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQU9sQjs7QUF4SEE7RUFtSE0scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQVN0QiIsImZpbGUiOiJzdWJzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5ib3R0bS1jb250cyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIGg0LnR0bC10cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5jb250LWNhbGVmIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLy8gc3Bhbi5iYWNrLWljb24ge1xyXG4gIC8vIFx0cGFkZGluZzogMTVweDtcclxuICAvLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyBcdGZvbnQtc2l6ZTogMjVweDtcclxuICAvLyBcdGNvbG9yOiAjZmZmO1xyXG4gIC8vIFx0bWFyZ2luLXRvcDogMHB4O1xyXG4gIC8vIH1cclxuICAuc2JzYy1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mby12IHtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBjb2xvcjogI2RmZDFmYTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2JzYy1ib3gxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gd2lkdGg6IDEyNXB4O1xyXG4gICAgbWluLWhlaWdodDogMTI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mby12IHtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBjb2xvcjogI2RmZDFmYTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zYnNjLWJveC5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDVjMmZiO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIHNwYW4uc2VsY3QtY2hlY2sge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkZmQxZmE7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB3aWR0aDogNzVweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDFkZWcpO1xyXG4gICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcmlnaHQ6IC0yNnB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLWNudC1yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAucmVzZXQtYnRuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMzBweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2Q1YzJmYjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KGXC":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageRoutingModule", function() { return SubscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.page */ "V5vJ");




const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPage"]
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ "Lgw8":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Subscriptions\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp txt-prple\"> SUBSCRIPTION </h4> -->\r\n    <div class=\"cont-calef\">\r\n      <!-- <ion-row>\r\n\t\t\t\t<ion-col size=\"12\" size-md=\"4\">\r\n\t\t\t\t\t<div class=\"sbsc-box1\">\r\n\t\t\t\t\t\t<h3> Free </h3>\r\n\t\t\t\t\t\t<h5> 7 days </h5>\r\n\t\t\t\t\t\t<span class=\"info-v\"> Subscription automatically start after 7 days free trial.</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n      <ion-row>\r\n        <!-- <ion-col size=\"6\" size-md=\"4\">\r\n\t\t\t\t\t<div class=\"sbsc-box\">\r\n\t\t\t\t\t\t<h3> Free </h3>\r\n\t\t\t\t\t\t<h5> 7 days </h5>\r\n\t\t\t\t\t\t<span class=\"info-v\"> <ion-icon name=\"information-circle\"></ion-icon> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col> -->\r\n        <ion-col\r\n          size=\"6\"\r\n          size-md=\"4\"\r\n          *ngFor=\"let s of subscriptions; let i = index\"\r\n        >\r\n          <div\r\n            class=\"sbsc-box\"\r\n            [class.selected]=\"selected ==i \"\r\n            (click)=\"handleSelect(i)\"\r\n          >\r\n            <span class=\"selct-check\" *ngIf=\"selected == i\">\r\n              <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n            </span>\r\n            <h3>{{s.price}}</h3>\r\n            <h5>{{s.duration}}</h5>\r\n            <span class=\"info-v\">\r\n              <ion-icon name=\"information-circle\"></ion-icon>\r\n            </span>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" size-md=\"4\">\r\n\t\t\t\t\t<div class=\"sbsc-box \">\r\n\t\t\t\t\t\t<span class=\"selct-check\"> <ion-icon name=\"checkmark-outline\"></ion-icon> </span> \r\n\t\t\t\t\t\t<h3> $15.99 </h3>\r\n\t\t\t\t\t\t<h5> 60 days </h5>\r\n\t\t\t\t\t\t<span class=\"info-v\"> <ion-icon name=\"information-circle\"></ion-icon> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col> -->\r\n        <!-- <ion-col size=\"6\" size-md=\"4\">\r\n\t\t\t\t\t<div class=\"sbsc-box\">\r\n\t\t\t\t\t\t<h3> $99 </h3>\r\n\t\t\t\t\t\t<h5> One Time </h5>\r\n\t\t\t\t\t\t<span class=\"info-v\"> <ion-icon name=\"information-circle\"></ion-icon> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col> -->\r\n      </ion-row>\r\n      <div class=\"btn-cnt-r\">\r\n        <a href=\"javascript:void(0)\" class=\"reset-btn\" (click)=\"payment()\">\r\n          Choose & Pay\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "V5vJ":
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription.page.html */ "Lgw8");
/* harmony import */ var _subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.page.scss */ "DdsP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");





let SubscriptionPage = class SubscriptionPage {
    constructor(utility) {
        this.utility = utility;
        this.subscriptions = [
            {
                price: 'Free',
                duration: '7 days',
            },
            {
                price: '$9.99',
                duration: '30 days',
            },
            {
                price: '$15.99',
                duration: '60 days',
            },
            {
                price: '$99',
                duration: 'One Time',
            },
        ];
    }
    ngOnInit() { }
    handleSelect(i) {
        console.log(i);
        this.selected = i;
    }
    payment() {
        // let msg =
        //   'Your subscription and payment will be  effected after a seven days trial. During this period, you will not be able to generate your  pet’s QR code or book any appointment. Proceed the free trial?';
        // this.utility.customAlert('Yes', 'No', msg, (cb) => {
        //   if (!cb) {
        //     this.utility.setLocal('trial', 1);
        //   } else {
        //     this.utility.setLocal('trial', 0);
        //   }
        // });
        this.utility.navigate('/subscription-payment');
    }
};
SubscriptionPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
SubscriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscription',
        template: _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscriptionPage);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module.js.map