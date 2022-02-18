(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "+PTa":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 15px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef img.clad {\n  width: 100%;\n  box-shadow: 7px 10px 16px rgba(200, 200, 200, 0.46);\n  border-radius: 15px;\n}\n\nion-content .cont-calef span.arrow-cnt {\n  display: block;\n  text-align: center;\n  margin: 25px 0 20px;\n  color: rgba(0, 0, 0, 0.64);\n  font-size: 25px;\n}\n\nion-content .cont-calef ion-list.list-pstr {\n  display: block;\n  margin-top: 20px;\n  overflow: visible;\n  --overflow: visible;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item {\n  margin-bottom: 10px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item ion-avatar {\n  width: 62px;\n  height: 62px;\n  margin-right: 12px;\n  border: 1px solid #ebebeb;\n  margin-right: 30px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 5px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item h2 img {\n  height: 19px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 4px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item h3 img {\n  height: 16px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item ion-label {\n  margin: 0px;\n  padding-left: 25px;\n  position: relative;\n}\n\nion-content .cont-calef ion-list.list-pstr ion-item ion-icon {\n  color: #151515;\n  font-size: 16px;\n  vertical-align: bottom;\n}\n\nion-content .cont-calef .botm-cong h4.tls-st {\n  margin: 0px !important;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nion-content .cont-calef span.borsr-sr {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  border: 4px solid #a1f725;\n  border-radius: 50%;\n  left: 0;\n  top: 3px;\n}\n\nion-content .fixed-btn-bi {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  width: 62px;\n  height: 62px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.14);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7QUFBZDs7QUFGQTtFQUtFLGtCQUFrQjtBQUNwQjs7QUFOQTtFQVFFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYTtBQUVmOztBQVpBO0VBWUcsV0FBVztFQUNYLG1EQUFtRDtFQUNuRCxtQkFBbUI7QUFJdEI7O0FBbEJBO0VBaUJHLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixlQUFlO0FBS2xCOztBQTFCQTtFQXdCRyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBVztBQU1kOztBQWpDQTtFQTZCSSxtQkFBbUI7RUFDbkIsb0JBQWdCO0VBQ2hCLGtCQUFjO0FBUWxCOztBQXZDQTtFQWlDSyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBVXZCOztBQS9DQTtFQXdDSyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFXdkI7O0FBdERBO0VBNkNNLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBYXZCOztBQTVEQTtFQW1ESyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFhdkI7O0FBbkVBO0VBd0RNLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBZXZCOztBQXpFQTtFQThESyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWV2Qjs7QUEvRUE7RUFtRUssY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7QUFnQjNCOztBQXJGQTtFQTJFSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQWNwQjs7QUEzRkE7RUFpRkcsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQWNYOztBQXJHQTtFQTJGRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyQ0FBMkM7QUFjN0MiLCJmaWxlIjoiY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5ib3R0bS1jb250cyB7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdGg0LnR0bC10cCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblx0fVxyXG5cdC5jb250LWNhbGVmIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggMTVweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0aW1nLmNsYWQge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym94LXNoYWRvdzogN3B4IDEwcHggMTZweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNDYpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdFx0fVxyXG5cdFx0c3Bhbi5hcnJvdy1jbnQge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW46IDI1cHggMCAyMHB4O1xyXG5cdFx0XHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0KTtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLWxpc3QubGlzdC1wc3RyIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdFx0XHQtLW92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdFx0XHRpb24taXRlbSB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0aW9uLWF2YXRhciB7XHJcblx0XHRcdFx0XHR3aWR0aDogNjJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNjJweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTlweDtcclxuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRjb2xvcjogIzdkN2Q3ZDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRweDtcclxuXHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcclxuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMjVweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMxNTE1MTU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmJvdG0tY29uZyB7XHJcblx0XHRcdGg0LnRscy1zdCB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c3Bhbi5ib3Jzci1zciB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRcdGhlaWdodDogMTVweDtcclxuXHRcdFx0Ym9yZGVyOiA0cHggc29saWQgI2ExZjcyNTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR0b3A6IDNweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmZpeGVkLWJ0bi1iaSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDE1cHg7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHRcdHdpZHRoOiA2MnB4O1xyXG5cdFx0aGVpZ2h0OiA2MnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDQwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJveC1zaGFkb3c6IDJweCAzcHggOXB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ "JrV2":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div> -->\r\n  <app-header [pageName]='\"Calendar\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\"> CALENDAR </h4> -->\r\n    <div class=\"cont-calef\">\r\n      <!-- <img src=\"assets/images/calendar.png\" class=\"clad\" /> -->\r\n\r\n      <ion-calendar\r\n        [(ngModel)]=\"date\"\r\n        (change)=\"onChange($event)\"\r\n        [type]=\"type\"\r\n        [format]=\"'YYYY-MM-DD'\"\r\n      >\r\n      </ion-calendar>\r\n      <span class=\"arrow-cnt\">\r\n        <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n      </span>\r\n      <div class=\"botm-cong\">\r\n        <h4 class=\"tls-st\">Reminders</h4>\r\n        <ion-list class=\"list-pstr\">\r\n          <ion-item lines=\"none\" *ngFor=\"let d of data\">\r\n            <ion-avatar slot=\"end\">\r\n              <img src=\"assets/images/pet3.jpg\" />\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <span class=\"borsr-sr\"></span>\r\n              <h2>{{d?.serviceName}}</h2>\r\n              <h3>\r\n                <ion-icon name=\"time-outline\"></ion-icon> {{d?.start +' - ' + (\r\n                d?.appointmentDate | date)}}\r\n              </h3>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a href=\"javascript:void(0)\" class=\"fixed-btn-bi\">\r\n    <ion-icon name=\"add-outline\"></ion-icon>\r\n  </a>\r\n</ion-content>\r\n");

/***/ }),

/***/ "KIgb":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "P7s2");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ "O51e":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "KIgb");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "P7s2");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]],
    })
], CalendarPageModule);



/***/ }),

/***/ "P7s2":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar.page.html */ "JrV2");
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.page.scss */ "+PTa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/appointment.service */ "brL0");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let CalendarPage = class CalendarPage {
    constructor(utility, appointment) {
        this.utility = utility;
        this.appointment = appointment;
        this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.optionsMulti = {
            pickMode: 'multi',
        };
    }
    ngOnInit() {
        this.role = this.utility.getRole();
        this.getAppointments();
    }
    getAppointments() {
        this.utility.present();
        if (this.role == 'pet owner') {
            this.appointment.getUserAppointments(this.selectedDate).subscribe((res) => {
                this.data = res;
                console.log(this.data);
                this.utility.dismiss();
            }, (err) => {
                this.utility.dismiss();
                console.log(err, 'error');
            });
        }
        else {
            this.appointment
                .getProviderAppointment(this.selectedDate)
                .subscribe((res) => {
                this.data = res;
                console.log(this.data);
                this.utility.dismiss();
            });
        }
    }
    onChange($event) {
        console.log($event);
        let date = $event.toString();
        console.log(date);
        this.selectedDate = date;
        console.log(this.selectedDate);
        this.getAppointments();
    }
};
CalendarPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _core_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] }
];
CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map