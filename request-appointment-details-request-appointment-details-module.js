(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-appointment-details-request-appointment-details-module"],{

/***/ "8BBY":
/*!*******************************************************************************************!*\
  !*** ./src/app/request-appointment-details/request-appointment-details-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RequestAppointmentDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAppointmentDetailsPageRoutingModule", function() { return RequestAppointmentDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _request_appointment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-appointment-details.page */ "ydh1");




const routes = [
    {
        path: '',
        component: _request_appointment_details_page__WEBPACK_IMPORTED_MODULE_3__["RequestAppointmentDetailsPage"]
    }
];
let RequestAppointmentDetailsPageRoutingModule = class RequestAppointmentDetailsPageRoutingModule {
};
RequestAppointmentDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestAppointmentDetailsPageRoutingModule);



/***/ }),

/***/ "MWUZ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request-appointment-details/request-appointment-details.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<!-- <div class=\"top-head bg-sky\">\r\n\t\t<img src=\"assets/images/sky-logo.png\" class=\"img-logo\">\r\n\t</div> -->\r\n<!-- \t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div> -->\r\n\t<app-header [pageName]='\"request\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\r\n\t<div class=\"bottm-conts sky-col\" >\r\n\t\t<h4 class=\"ttl-tp\"> APPOINTMENT DETAILS </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t<div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica\r\nSmith</h1>\r\n\r\n</div>\r\n<div class=\"pad-all\">\r\n<div class=\"heading-main\">Notes</div>\r\n<p>Reference site about Lorem Ipsum, giving\r\ninformation on its origins, as well as a random Lipsum generator.</p>\r\n<div class=\"heading-main\">Booking Details</div>\r\n<ul>\r\n<li><span class=\"icon-img\"><img src=\"assets/images/sky-cal.png\"></span><span class=\"icon-name\">1 Visit per day</span></li>\r\n<li><span class=\"icon-img\"><img src=\"assets/images/re.png\"></span><span class=\"icon-name\">2 days</span></li>\r\n</ul>\r\n<div class=\"heading-main mt-30\">Service Name</div>\r\n<ul>\r\n<li><span class=\"icon-img\"><img src=\"assets/images/sit.png\"></span><span class=\"icon-name\">Pet Sitting</span></li>\r\n</ul>\r\n</div>\r\n<div class=\"line-main\"></div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t</div>");

/***/ }),

/***/ "Y0OM":
/*!***********************************************************************************!*\
  !*** ./src/app/request-appointment-details/request-appointment-details.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-main {\n  border: 1px solid #d6dcea;\n  padding: 0;\n  border-radius: 11px;\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.header-main {\n  display: flex;\n}\n\n.header-main {\n  display: flex;\n  width: 100%;\n  background: #ebf1ff;\n  padding: 12px;\n  border-radius: 8px;\n  padding-top: 12px;\n  padding-bottom: 5px;\n}\n\n.booki {\n  color: #000;\n  opacity: .5;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.icons {\n  float: right;\n  position: absolute;\n  right: 20px;\n  /* top: 93px; */\n  margin-top: 20px;\n}\n\n.buttons-main {\n  padding: 14px 11px;\n}\n\n.main-btn.accepts {\n  width: 180px;\n  height: 37px;\n  background: #9cb7ff;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 42px;\n  margin-right: 6px;\n}\n\na.main-btn.decline {\n  font-size: 16px;\n  color: #9cb7ff;\n  background: #f5f8ff;\n  padding: 9px 20px;\n  height: 37px;\n  line-height: 37px;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 100px;\n}\n\n.bottom-txt {\n  display: -webkit-inline-box;\n  width: 100%;\n  padding: 14px 11px;\n  padding-bottom: 0;\n}\n\n.name {\n  margin: 0;\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0;\n  margin-top: 21px;\n}\n\n.pad-all {\n  padding: 14px 11px;\n}\n\n.heading-main {\n  color: #9cb7ff;\n  font-size: 16px;\n  font-weight: 400;\n  position: relative;\n  padding-left: 8px;\n}\n\np {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n  margin-bottom: 40px;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  margin-bottom: 11px;\n}\n\n.icon-name {\n  font-size: 13px;\n  position: relative;\n  left: 12px;\n  color: #080808;\n  top: -6px;\n  font-weight: 500;\n  font-size: 14px;\n  position: relative;\n  left: 12px;\n  color: #080808;\n  top: -6px;\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n.icon-img {\n  width: 23px !important;\n  text-align: center;\n  display: inline-block;\n}\n\nimg.icon-img img {\n  width: 100%;\n  height: 100%;\n}\n\n.mt-30 {\n  margin-top: 26px !important;\n  display: inline-block;\n}\n\n.line-main {\n  border-top: 1px solid #ddd;\n  padding: 0 30px !important;\n  margin: 0 20px;\n  margin-top: 0;\n  padding-bottom: 16px !important;\n}\n\n.heading-main:after {\n  position: absolute;\n  content: \"\";\n  background: #ebf1ff;\n  height: 31px;\n  width: 31px;\n  left: -5px;\n  border-radius: 100px;\n  z-index: -1;\n  top: -8px;\n}\n\n.texts h5 {\n  font-size: 13px;\n  margin-top: 2px;\n  font-weight: 500;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlcXVlc3QtYXBwb2ludG1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTyx5QkFBeUI7RUFDNUIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFBQyxtQkFBbUI7QUFFMUM7O0FBQUE7RUFDSSxhQUFhO0FBR2pCOztBQURBO0VBQ00sYUFBYTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBSXZCOztBQUZBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUtyQjs7QUFKQztFQUNHLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQUE7RUFDQSxnQkFBZ0I7QUFPcEI7O0FBTEE7RUFDSSxrQkFBa0I7QUFRdEI7O0FBUEM7RUFDRyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBVXJCOztBQVRDO0VBQ0csZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFZeEI7O0FBVkE7RUFDSSwyQkFBMkI7RUFDM0IsV0FBVztFQUFDLGtCQUFrQjtFQUFLLGlCQUFpQjtBQWV4RDs7QUFiQTtFQUNPLFNBQVM7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBZ0JwQjs7QUFkQTtFQUNJLGtCQUFrQjtBQWlCdEI7O0FBZkE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBa0JyQjs7QUFqQkM7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFBSyxtQkFBbUI7QUFxQnZDOztBQW5CQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7QUFzQnBCOztBQXJCQztFQUNHLG1CQUFtQjtBQXdCdkI7O0FBdkJDO0VBQ0csZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDbkIsZUFBZTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBMEJyQjs7QUF6QkM7RUFDRyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQTRCekI7O0FBM0JDO0VBQ0csV0FBVztFQUNYLFlBQVk7QUE4QmhCOztBQTdCQztFQUNHLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFnQ3pCOztBQTlCQTtFQUNJLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGFBQWE7RUFDYiwrQkFBK0I7QUFpQ25DOztBQS9CQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsU0FBUztBQWtDYjs7QUFoQ0E7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQW1DcEIiLCJmaWxlIjoicmVxdWVzdC1hcHBvaW50bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW1haW4ge1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGNlYTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmhlYWRlci1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmhlYWRlci1tYWluIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ViZjFmZjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmJvb2tpIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn0uaWNvbnMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAvKiB0b3A6IDkzcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idXR0b25zLW1haW4ge1xyXG4gICAgcGFkZGluZzogMTRweCAxMXB4O1xyXG59Lm1haW4tYnRuLmFjY2VwdHMge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzljYjdmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufWEubWFpbi1idG4uZGVjbGluZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzljYjdmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY4ZmY7XHJcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG4uYm90dG9tLXR4dCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtwYWRkaW5nOiAxNHB4IDExcHg7ICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5uYW1lIHtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbn1cclxuLnBhZC1hbGwge1xyXG4gICAgcGFkZGluZzogMTRweCAxMXB4O1xyXG59XHJcbi5oZWFkaW5nLW1haW4ge1xyXG4gICAgY29sb3I6ICM5Y2I3ZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1wIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDsgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG51bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufWxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbn0uaWNvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzA4MDgwODtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59Lmljb24taW1nIHtcclxuICAgIHdpZHRoOiAyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1pbWcuaWNvbi1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Lm10LTMwIHtcclxuICAgIG1hcmdpbi10b3A6IDI2cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubGluZS1tYWluIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkaW5nLW1haW46YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICNlYmYxZmY7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAtOHB4O1xyXG59XHJcbi50ZXh0cyBoNSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */");

/***/ }),

/***/ "sME1":
/*!***********************************************************************************!*\
  !*** ./src/app/request-appointment-details/request-appointment-details.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestAppointmentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAppointmentDetailsPageModule", function() { return RequestAppointmentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _request_appointment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-appointment-details-routing.module */ "8BBY");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _request_appointment_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-appointment-details.page */ "ydh1");








let RequestAppointmentDetailsPageModule = class RequestAppointmentDetailsPageModule {
};
RequestAppointmentDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_appointment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestAppointmentDetailsPageRoutingModule"]
        ],
        declarations: [_request_appointment_details_page__WEBPACK_IMPORTED_MODULE_7__["RequestAppointmentDetailsPage"]]
    })
], RequestAppointmentDetailsPageModule);



/***/ }),

/***/ "ydh1":
/*!*********************************************************************************!*\
  !*** ./src/app/request-appointment-details/request-appointment-details.page.ts ***!
  \*********************************************************************************/
/*! exports provided: RequestAppointmentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAppointmentDetailsPage", function() { return RequestAppointmentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_request_appointment_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./request-appointment-details.page.html */ "MWUZ");
/* harmony import */ var _request_appointment_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-appointment-details.page.scss */ "Y0OM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RequestAppointmentDetailsPage = class RequestAppointmentDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
RequestAppointmentDetailsPage.ctorParameters = () => [];
RequestAppointmentDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request-appointment-details',
        template: _raw_loader_request_appointment_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_appointment_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RequestAppointmentDetailsPage);



/***/ })

}]);
//# sourceMappingURL=request-appointment-details-request-appointment-details-module.js.map