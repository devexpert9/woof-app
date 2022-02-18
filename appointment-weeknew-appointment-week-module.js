(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-weeknew-appointment-week-module"],{

/***/ "3MQ8":
/*!**************************************************************!*\
  !*** ./src/app/appointment-weeknew/appointment-week.page.ts ***!
  \**************************************************************/
/*! exports provided: AppointmentWeekPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentWeekPage", function() { return AppointmentWeekPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appointment_week_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appointment-week.page.html */ "adwh");
/* harmony import */ var _appointment_week_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-week.page.scss */ "CYqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppointmentWeekPage = class AppointmentWeekPage {
    constructor() {
        this.profiletab = "Basic";
    }
    ngOnInit() {
    }
};
AppointmentWeekPage.ctorParameters = () => [];
AppointmentWeekPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointment-week',
        template: _raw_loader_appointment_week_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointment_week_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppointmentWeekPage);



/***/ }),

/***/ "CYqo":
/*!****************************************************************!*\
  !*** ./src/app/appointment-weeknew/appointment-week.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-main {\n  border: 1px solid #d6dcea;\n  padding: 0;\n  border-radius: 11px;\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.header-main {\n  display: flex;\n}\n\n.header-main {\n  display: flex;\n  width: 100%;\n  background: #ebf1ff;\n  padding: 12px;\n  border-radius: 8px;\n  padding-top: 12px;\n  padding-bottom: 5px;\n}\n\n.booki {\n  color: #000;\n  opacity: .5;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.icons {\n  float: right;\n  position: absolute;\n  right: 20px;\n  /* top: 93px; */\n  margin-top: 20px;\n}\n\n.buttons-main {\n  padding: 14px 11px;\n}\n\n.main-btn.accepts {\n  width: 180px;\n  height: 37px;\n  background: #9cb7ff;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 42px;\n  margin-right: 6px;\n}\n\na.main-btn.decline {\n  font-size: 16px;\n  color: #9cb7ff;\n  background: #f5f8ff;\n  padding: 9px 20px;\n  height: 37px;\n  line-height: 37px;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  border-radius: 100px;\n}\n\n.bottom-txt {\n  display: -webkit-inline-box;\n  width: 100%;\n  padding: 14px 11px;\n  padding-bottom: 0;\n}\n\n.name {\n  margin: 0;\n  margin-left: 13px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0;\n  margin-top: 8px;\n}\n\n.texts h5 {\n  font-size: 13px;\n  margin-top: 2px;\n  font-weight: 500;\n}\n\nion-segment-button {\n  text-transform: capitalize;\n  min-height: 35px !important;\n}\n\nion-segment {\n  background: #f5f8ff;\n  border-radius: 8px;\n  margin-bottom: 37px;\n}\n\nion-segment-button.md.in-segment.segment-button-checked {\n  border: 2px solid #9cb7ff;\n  border-radius: 9px;\n  color: #9cb7ff;\n  --indicator-color: transparent;\n}\n\n.week-main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: space-between;\n  margin-bottom: 43px;\n}\n\n.main-dis h2 {\n  color: #a1a0a0;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.main-dis h3 {\n  color: #202020;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.main-dis {\n  flex: 1;\n  text-align: center;\n}\n\n.mw {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n\n.wkly {\n  color: #9cb7ff;\n  font-size: 13px;\n  margin-top: 9px;\n}\n\nion-segment-button {\n  color: #9cb7ff;\n}\n\n.wkly ion-icon {\n  position: relative;\n  top: 3px;\n}\n\n.july {\n  font-size: 23px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.main-dis.active {\n  background: #9cb7ff;\n  color: #fff;\n  border-radius: 100px;\n}\n\n.main-dis.active h3, .main-dis.active h2 {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcG9pbnRtZW50LXdlZWsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ08seUJBQXlCO0VBQzVCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQUMsbUJBQW1CO0FBRTFDOztBQUFBO0VBQ0ksYUFBYTtBQUdqQjs7QUFEQTtFQUNNLGFBQWE7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUl2Qjs7QUFGQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFLckI7O0FBSkM7RUFDRyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFBO0VBQ0EsZ0JBQWdCO0FBT3BCOztBQUxBO0VBQ0ksa0JBQWtCO0FBUXRCOztBQVBDO0VBQ0csWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQVVyQjs7QUFUQztFQUNHLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0FBWXhCOztBQVZBO0VBQ0ksMkJBQTJCO0VBQzNCLFdBQVc7RUFBQyxrQkFBa0I7RUFBSyxpQkFBaUI7QUFleEQ7O0FBYkE7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFnQm5COztBQWRBO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFpQnBCOztBQWZBO0VBQ0ksMEJBQTBCO0VBQUMsMkJBQTJCO0FBbUIxRDs7QUFsQkM7RUFDRyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQXFCdkI7O0FBbkJBO0VBQ08seUJBQXlCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsOEJBQWtCO0FBc0J0Qjs7QUFwQkE7RUFDRyxhQUFhO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBdUJ2Qjs7QUFyQkE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQXdCcEI7O0FBdEJBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUF5QnBCOztBQXZCQTtFQUNJLE9BQU87RUFBQyxrQkFBaUI7QUEyQjdCOztBQTFCQztFQUNHLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBNkJ2Qjs7QUE1QkM7RUFDRyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUErQm5COztBQTlCQztFQUNHLGNBQWM7QUFpQ2xCOztBQS9CQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0FBa0NaOztBQWhDQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQW1DbEI7O0FBakNBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBb0I7QUFvQ3hCOztBQWxDQTtFQUVJLFdBQVc7QUFvQ2YiLCJmaWxlIjoiYXBwb2ludG1lbnQtd2Vlay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tYWluIHtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmRjZWE7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5oZWFkZXItbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5oZWFkZXItbWFpbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlYmYxZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5ib29raSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59Lmljb25zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgLyogdG9wOiA5M3B4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYnV0dG9ucy1tYWluIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTFweDtcclxufS5tYWluLWJ0bi5hY2NlcHRzIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGJhY2tncm91bmQ6ICM5Y2I3ZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1hLm1haW4tYnRuLmRlY2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM5Y2I3ZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmOGZmO1xyXG4gICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuLmJvdHRvbS10eHQge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7cGFkZGluZzogMTRweCAxMXB4OyAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLnRleHRzIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO21pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufWlvbi1zZWdtZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY4ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5pbi1zZWdtZW50LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgYm9yZGVyOiAycHggc29saWQgIzljYjdmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGNvbG9yOiAjOWNiN2ZmO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi53ZWVrLW1haW4ge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQzcHg7XHJcbn1cclxuLm1haW4tZGlzIGgyIHtcclxuICAgIGNvbG9yOiAjYTFhMGEwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ubWFpbi1kaXMgaDMge1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5tYWluLWRpcyB7XHJcbiAgICBmbGV4OiAxO3RleHQtYWxpZ246Y2VudGVyO1xyXG59Lm13IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59LndrbHkge1xyXG4gICAgY29sb3I6ICM5Y2I3ZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbn1pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgY29sb3I6ICM5Y2I3ZmY7XHJcbn1cclxuLndrbHkgaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbn1cclxuLmp1bHkge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5tYWluLWRpcy5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzljYjdmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuLm1haW4tZGlzLmFjdGl2ZSBoMywgLm1haW4tZGlzLmFjdGl2ZSBoMiB7XHJcblxyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "adwh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-weeknew/appointment-week.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n<!-- \t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div> -->\r\n\r\n\t<app-header [pageName]='\"request\"' [pn]='\"req\"' app=\"serviceProvider\"></app-header>\r\n\t\r\n\t<!-- <div class=\"top-head bg-sky\">\r\n\t\t<img src=\"assets/images/sky-logo.png\" class=\"img-logo\">\r\n\t</div> -->\r\n\t<div class=\"bottm-conts sky-col\">\r\n\t\t<h4 class=\"ttl-tp\"> CALENDER/APPOINTMENTs </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t<div class=\"mw\"><span class=\"july\">July</span>\r\n\t\t\r\n\t\t<span class=\"wkly\">Weekly      <ion-icon name=\"caret-down-outline\"></ion-icon>\r\n     \r\n\r\n</span>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t<div class=\"week-main\">\r\n\t\t<div class=\"main-dis\">\r\n\t\t<h2>S</h2>\r\n\t\t<h3>1</h3>\r\n\t\t</div>\r\n\t\t<div class=\"main-dis\">\r\n\t\t<h2>M</h2>\r\n\t\t<h3>2</h3>\r\n\t\t</div><div class=\"main-dis active\">\r\n\t\t<h2>T</h2>\r\n\t\t<h3>3</h3>\r\n\t\t</div><div class=\"main-dis\">\r\n\t\t<h2>W</h2>\r\n\t\t<h3>4</h3>\r\n\t\t</div><div class=\"main-dis\">\r\n\t\t<h2>T</h2>\r\n\t\t<h3>5</h3>\r\n\t\t</div><div class=\"main-dis\">\r\n\t\t<h2>F</h2>\r\n\t\t<h3>6</h3>\r\n\t\t</div><div class=\"main-dis\">\r\n\t\t<h2>S</h2>\r\n\t\t<h3>7</h3>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<ion-segment [(ngModel)]=\"profiletab\">\r\n\t\t\t\t<ion-segment-button value=\"Basic\">\r\n\t\t\t\t   Past\r\n\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"pwd\">\r\n\t\t\t\t   Upcoming\r\n\t\t\t\t</ion-segment-button>\r\n\t\t\t\t<ion-segment-button value=\"wd\">\r\n\t\t\t\t   Declined\r\n\t\t\t\t</ion-segment-button>\r\n\t\t\t</ion-segment>\r\n\t\t\t<div [ngSwitch]=\"profiletab\">\r\n\t\t\t\t<ion-list *ngSwitchCase=\"'Basic'\"> \r\n\t\t<div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div><div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div><div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\" routerLink=\"/booking-detail\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t</ion-list>\r\n\t\t<ion-list *ngSwitchCase=\"'pwd'\"> \r\n\t\t<div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t</ion-list>\r\n\t\t<ion-list *ngSwitchCase=\"'wd'\"> \r\n\t\t<div class=\"card-main\">\r\n\t\t<div class=\"header-main\">\r\n\t\t<div class=\"iocon-main\"><img src=\"assets/images/calhf.png\" class=\"calf-logo\"></div>\r\n\t\t<div class=\"texts\">\r\n\t\t<h6 class=\"booki\">Booking Date</h6>\r\n\t\t<h5>Jul 8 2021     09:30 am</h5>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"bottom-txt\">\r\n\t\t<img src=\"assets/images/girl.png\">\r\n\t\t<h1 class=\"name\">Veronica<br>\r\nSmith</h1>\r\n<div class=\"icons\"><img src=\"assets/images/i-icon.png\"></div>\r\n</div>\r\n<div class=\"buttons-main\">\r\n<a href=\"\" class=\"main-btn accepts\" >Accept</a>\r\n<a href=\"\" class=\"main-btn decline\" >Decline</a>\r\n</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t</ion-list>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t</div>");

/***/ }),

/***/ "eLO7":
/*!****************************************************************!*\
  !*** ./src/app/appointment-weeknew/appointment-week.module.ts ***!
  \****************************************************************/
/*! exports provided: AppointmentWeekPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentWeekPageModule", function() { return AppointmentWeekPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _appointment_week_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-week-routing.module */ "losW");
/* harmony import */ var _appointment_week_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-week.page */ "3MQ8");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let AppointmentWeekPageModule = class AppointmentWeekPageModule {
};
AppointmentWeekPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _appointment_week_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentWeekPageRoutingModule"]
        ],
        declarations: [_appointment_week_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentWeekPage"]]
    })
], AppointmentWeekPageModule);



/***/ }),

/***/ "losW":
/*!************************************************************************!*\
  !*** ./src/app/appointment-weeknew/appointment-week-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AppointmentWeekPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentWeekPageRoutingModule", function() { return AppointmentWeekPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointment_week_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-week.page */ "3MQ8");




const routes = [
    {
        path: '',
        component: _appointment_week_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentWeekPage"]
    }
];
let AppointmentWeekPageRoutingModule = class AppointmentWeekPageRoutingModule {
};
AppointmentWeekPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentWeekPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=appointment-weeknew-appointment-week-module.js.map