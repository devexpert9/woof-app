(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-requestnew-appointment-request-module"],{

/***/ "8OYS":
/*!******************************************************************************!*\
  !*** ./src/app/appointment-requestnew/appointment-request-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AppointmentRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequestPageRoutingModule", function() { return AppointmentRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointment_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-request.page */ "H27y");




const routes = [
    {
        path: '',
        component: _appointment_request_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentRequestPage"]
    }
];
let AppointmentRequestPageRoutingModule = class AppointmentRequestPageRoutingModule {
};
AppointmentRequestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentRequestPageRoutingModule);



/***/ }),

/***/ "H27y":
/*!********************************************************************!*\
  !*** ./src/app/appointment-requestnew/appointment-request.page.ts ***!
  \********************************************************************/
/*! exports provided: AppointmentRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequestPage", function() { return AppointmentRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appointment_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appointment-request.page.html */ "Kv+D");
/* harmony import */ var _appointment_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-request.page.scss */ "jsxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppointmentRequestPage = class AppointmentRequestPage {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentRequestPage.ctorParameters = () => [];
AppointmentRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointment-request',
        template: _raw_loader_appointment_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointment_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppointmentRequestPage);



/***/ }),

/***/ "Kv+D":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-requestnew/appointment-request.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<!-- <div class=\"top-head bg-sky\">\r\n\t\t<img src=\"assets/images/sky-logo.png\" class=\"img-logo\">\r\n\t</div> -->\r\n\t<app-header [pageName]='\"request\"' [pn]='\"req\"' app=\"serviceProvider\"></app-header>\r\n\r\n\t<div class=\"bottm-conts sky-col\">\r\n\t\t<h4 class=\"ttl-tp\"> REQUESTS </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t<div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div><div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div><div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t</div>");

/***/ }),

/***/ "ZzUZ":
/*!**********************************************************************!*\
  !*** ./src/app/appointment-requestnew/appointment-request.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppointmentRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequestPageModule", function() { return AppointmentRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _appointment_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-request-routing.module */ "8OYS");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _appointment_request_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment-request.page */ "H27y");








let AppointmentRequestPageModule = class AppointmentRequestPageModule {
};
AppointmentRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointment_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentRequestPageRoutingModule"]
        ],
        declarations: [_appointment_request_page__WEBPACK_IMPORTED_MODULE_7__["AppointmentRequestPage"]]
    })
], AppointmentRequestPageModule);



/***/ }),

/***/ "jsxc":
/*!**********************************************************************!*\
  !*** ./src/app/appointment-requestnew/appointment-request.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-main {\n  border: 1px solid #d6dcea;\n  padding: 0;\n  border-radius: 11px;\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.header-main {\n  display: flex;\n}\n\n.header-main {\n  display: flex;\n  width: 100%;\n  background: #ebf1ff;\n  padding: 12px;\n  border-radius: 8px;\n  padding-top: 12px;\n  padding-bottom: 5px;\n}\n\n.booki {\n  color: #000;\n  opacity: .5;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.icons {\n  float: right;\n  position: absolute;\n  right: 20px;\n  /* top: 93px; */\n  margin-top: 20px;\n}\n\n.buttons-main {\n  padding: 14px 11px;\n}\n\n.main-btn.accepts {\n  width: 180px;\n  height: 37px;\n  background: #9cb7ff;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 42px;\n  margin-right: 6px;\n}\n\na.main-btn.decline {\n  font-size: 16px;\n  color: #9cb7ff;\n  background: #f5f8ff;\n  padding: 9px 20px;\n  height: 37px;\n  line-height: 37px;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 100px;\n}\n\n.bottom-txt {\n  display: -webkit-inline-box;\n  width: 100%;\n  padding: 14px 11px;\n  padding-bottom: 0;\n}\n\n.name {\n  margin: 0;\n  margin-left: 13px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0;\n  margin-top: 8px;\n}\n\n.texts h5 {\n  font-size: 13px;\n  margin-top: 2px;\n  font-weight: 500;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcG9pbnRtZW50LXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ08seUJBQXlCO0VBQzVCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQUMsbUJBQW1CO0FBRTFDOztBQUFBO0VBQ0ksYUFBYTtBQUdqQjs7QUFEQTtFQUNNLGFBQWE7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUl2Qjs7QUFGQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFLckI7O0FBSkM7RUFDRyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFBO0VBQ0EsZ0JBQWdCO0FBT3BCOztBQUxBO0VBQ0ksa0JBQWtCO0FBUXRCOztBQVBDO0VBQ0csWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQVVyQjs7QUFUQztFQUNHLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0FBWXhCOztBQVZBO0VBQ0ksMkJBQTJCO0VBQzNCLFdBQVc7RUFBQyxrQkFBa0I7RUFBSyxpQkFBaUI7QUFleEQ7O0FBYkE7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFnQm5COztBQWRBO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFpQnBCIiwiZmlsZSI6ImFwcG9pbnRtZW50LXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWFpbiB7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkY2VhO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaGVhZGVyLW1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaGVhZGVyLW1haW4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJmMWZmO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4uYm9va2kge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufS5pY29ucyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIC8qIHRvcDogOTNweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbnMtbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDExcHg7XHJcbn0ubWFpbi1idG4uYWNjZXB0cyB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWNiN2ZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59YS5tYWluLWJ0bi5kZWNsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOWNiN2ZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjhmZjtcclxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcbi5ib3R0b20tdHh0IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO3BhZGRpbmc6IDE0cHggMTFweDsgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi50ZXh0cyBoNSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=appointment-requestnew-appointment-request-module.js.map