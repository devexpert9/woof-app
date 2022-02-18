(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-details-visit-details-module"],{

/***/ "0OXD":
/*!***************************************************************!*\
  !*** ./src/app/visit-details/visit-details-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VisitDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitDetailsPageRoutingModule", function() { return VisitDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visit_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-details.page */ "cydF");




const routes = [
    {
        path: '',
        component: _visit_details_page__WEBPACK_IMPORTED_MODULE_3__["VisitDetailsPage"]
    }
];
let VisitDetailsPageRoutingModule = class VisitDetailsPageRoutingModule {
};
VisitDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitDetailsPageRoutingModule);



/***/ }),

/***/ "5xPy":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visit-details/visit-details.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">SELECT DETAILS </h4>\r\n\t <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Location</ion-label>\r\n  <ion-input placeholder=\"Toronto, On, Canada\"><img src=\"assets/images/loc.png\" class=\"img-loc\"></ion-input>\r\n</div>\r\n<div class=\"cover-pad fiels\">\r\n  <ion-label class=\"labl-nf\">Choose Visit Type</ion-label>\r\n <ion-row>\r\n <ion-col size=\"3\">\r\n <div class=\"inner-dog\">\r\n <img src=\"assets/images/moon.png\" class=\"img-dog\">\r\n </div>\r\n <p class=\"wlk-txt\">Stay<br>\r\nOvernight</p>\r\n </ion-col> <ion-col size=\"3\">\r\n <div class=\"inner-dog \">\r\n <img src=\"assets/images/first-d.png\" class=\"img-dog\">\r\n </div>\r\n <p class=\"wlk-txt\">1 Visit<br>\r\nPer Day</p>\r\n </ion-col>\r\n <ion-col size=\"3\">\r\n <div class=\"inner-dog active\">\r\n <img src=\"assets/images/w-cel.png\" class=\"img-dog\">\r\n </div>\r\n <p class=\"wlk-txt\">2 Visit<br>\r\nPer Day</p>\r\n </ion-col> <ion-col size=\"3\">\r\n <div class=\"inner-dog \">\r\n <img src=\"assets/images/cal-3.png\" class=\"img-dog\">\r\n </div>\r\n <p class=\"wlk-txt\">3 Visit<br>\r\nPer Day</p>\r\n </ion-col>\r\n </ion-row>\r\n</div>\r\n  <div class=\"cover-pad fiels\"><ion-label class=\"labl-nf\">Choose Date & Time</ion-label>\r\n<ion-row>\r\n <ion-col size=\"6\">\r\n  <p>Date</p>\r\n  <ion-datetime value=\"1990-02-19\" placeholder=\"Select Date\" class=\"pading\"></ion-datetime><img src=\"assets/images/cal.png\" class=\"cal-loc\">\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<p>First Time</p>\r\n  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n\r\n\t\t\t\t\t\t\t</ion-col><ion-col size=\"3\">\r\n\t\t\t\t\t\t\t<p>Second Time</p>\r\n  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\t\t\t\t \r\n\r\n</div>\r\n\r\n<div class=\"fiels\">\r\n  <ion-label class=\"labl-nf\">Number of Days</ion-label>\r\n   <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n      <ion-select-option value=\"brown\">1</ion-select-option>\r\n      <ion-select-option value=\"blonde\">2</ion-select-option>\r\n      <ion-select-option value=\"black\">3</ion-select-option>\r\n      <ion-select-option value=\"red\">4</ion-select-option>\r\n    </ion-select>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"fiels\">\r\n  <ion-label class=\"labl-nf\">Anything else the sitter will need\r\n to know <span class=\"mainopt\">(Optional)</span></ion-label>\r\n  <ion-textarea rows=\"6\" placeholder=\"Type here....\"></ion-textarea>\r\n\r\n</div>\t<div class=\"btn-div\"><a class=\"btn-coy\" routerLink=\"/payment-methode\">Submit </a></div></div>\r\n\t\r\n\t</ion-content>");

/***/ }),

/***/ "Hz8R":
/*!*******************************************************!*\
  !*** ./src/app/visit-details/visit-details.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".labl-nf {\n  margin-bottom: 5px;\n  font-size: 18px !important;\n  color: #8f8f8f;\n  font-weight: 900;\n  margin-top: 0;\n  display: block;\n}\n\nion-input {\n  border: 1px solid #bfbfbf !important;\n  border-radius: 7px !important;\n  margin-top: 15px !important;\n}\n\nion-item {\n  margin-bottom: 16px;\n}\n\n.mainopt {\n  width: auto !important;\n  position: inherit;\n  display: initial;\n  color: #8f8f8f;\n}\n\n.input-wrapper {\n  display: block !important;\n}\n\n.bottm-conts {\n  padding: 20px 2px;\n}\n\nion-input {\n  padding-left: 11px;\n}\n\nion-input {\n  padding-left: 9px !important;\n}\n\n.img-loc {\n  margin-right: 8px;\n}\n\nion-input {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1;\n  font-size: 16px !important;\n}\n\nion-item.item {\n  margin-bottom: 25px;\n}\n\nion-datetime {\n  border: 1px solid #bfbfbf;\n  padding: 10px 9px;\n  border-radius: 7px;\n  font-size: 16px;\n}\n\n.cover-pad {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\n.btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 11px 36px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 30px;\n  margin-top: 22px;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n.ttl-tp {\n  position: relative;\n  left: -18px;\n}\n\n.cover-pad p {\n  margin: 0;\n  font-size: 11px;\n  color: #6b6b6b;\n  font-weight: 700;\n  margin-top: 11px;\n  margin-bottom: 5px;\n}\n\n.datetime-text {\n  padding-left: 20px;\n}\n\ntextarea.native-textarea {\n  /* --placeholder-color: #000 !important; */\n  /* --placeholder-opacity: 1; */\n  font-size: 15px !important;\n}\n\nion-textarea {\n  border: 1px solid #bfbfbf !important;\n  /* border-radius: 7px; */\n  /* margin-top: 15px; */\n  padding: 12px !important;\n  border-radius: 6px !important;\n  height: 185px;\n  margin-top: 12px !important;\n}\n\nion-datetime {\n  padding-left: 37px;\n}\n\nimg.cal-loc {\n  position: absolute;\n  top: 43px;\n  left: 13px;\n}\n\nspan {\n  width: 100%;\n  display: block;\n  position: absolute;\n  left: -5px;\n  top: -26px;\n  color: #080808;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.inner-dog {\n  width: 71px;\n  height: 71px;\n  background: #dcdcdc;\n  border-radius: 50%;\n  line-height: 92px;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  margin: 0 auto;\n  margin-top: 14px;\n  position: relative;\n}\n\n.inner-dog.active:after {\n  /* background: white; */\n  /* height: 20px; */\n  /* width: 20px; */\n  position: absolute;\n  content: \"\";\n  height: 60px;\n  width: 60px;\n  left: 4px;\n  border-radius: 60%;\n  top: 4px;\n  border: 2px solid #fff;\n}\n\n.inner-dog.active {\n  background: #be9ffc;\n}\n\n.active span {\n  color: #fff;\n}\n\ninput {\n  --padding-start: 15px\r\n;\n}\n\n.wlk-txt {\n  text-align: center;\n  text-align: center;\n  font-size: 13px !important;\n  color: #080808 !important;\n  margin-top: 6px !important;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  ---padding-start: 15px !important;\n  padding: 8px 10px;\n  border-radius: 6px;\n}\n\nion-radio-group.radus {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nion-radio-group.radus ion-item ion-radio {\n  background: #fff;\n  border: 1px solid #cacaca;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\nion-radio-group.radus ion-item {\n  --padding-start: 5px;\n}\n\n.fiels {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0JBQWtCO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2xCOztBQUNBO0VBQ0ksb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFFL0I7O0FBREM7RUFDRyxtQkFBbUI7QUFJdkI7O0FBRkE7RUFDRyxzQkFBc0I7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBS2xCOztBQUhBO0VBQ0kseUJBQXlCO0FBTTdCOztBQUpBO0VBQ0ksaUJBQWlCO0FBT3JCOztBQU5DO0VBQ0csa0JBQWtCO0FBU3RCOztBQVBBO0VBQ0ksNEJBQTRCO0FBVWhDOztBQVJBO0VBQ0ksaUJBQWlCO0FBV3JCOztBQVRBO0VBQ0ksb0NBQW9CO0VBQWlCLHdCQUFzQjtFQUFHLDBCQUEwQjtBQWM1Rjs7QUFaQTtFQUNJLG1CQUFtQjtBQWV2Qjs7QUFkQztFQUNHLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFpQm5COztBQWhCQztFQUNDLGVBQWU7RUFDYixtQkFBbUI7QUFtQnZCOztBQWxCQztFQUNDLHFCQUFxQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFxQnBCOztBQXBCQztFQUNHLGtCQUFrQjtBQXVCdEI7O0FBdEJDO0VBQ0csa0JBQWtCO0VBQ2xCLFdBQVc7QUF5QmY7O0FBdkJBO0VBQ0ksU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUEwQnRCOztBQXpCQztFQUNHLGtCQUFrQjtBQTRCdEI7O0FBM0JDO0VBQ0csMENBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUEwQjtBQThCOUI7O0FBN0JDO0VBQ0csb0NBQW9DO0VBQ3BDLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiwyQkFBMkI7QUFnQy9COztBQTlCQTtFQUNJLGtCQUFrQjtBQWlDdEI7O0FBaENDO0VBQ0csa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBbUNkOztBQWxDQztFQUNLLFdBQVc7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBcUNuQjs7QUFwQ0M7RUFDSyxXQUFXO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBdUN0Qjs7QUF0Q0M7RUFDRyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isc0JBQXNCO0FBeUMxQjs7QUF2Q0E7RUFDSSxtQkFBbUI7QUEwQ3ZCOztBQXpDQztFQUNHLFdBQVc7QUE0Q2Y7O0FBM0NDO0VBQU07QUFBZ0I7QUFnRHZCOztBQTlDQTtFQUFTLGtCQUFrQjtFQUN4QixrQkFBa0I7RUFDakIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUFLLDBCQUNqQztBQWtERDs7QUFqREE7RUFDSSxzQkFBc0I7RUFDdEIsaUNBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFvRHRCOztBQWxEQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBcUQvQjs7QUFwREM7RUFDRyxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQXVEdEI7O0FBckRBO0VBQ0ksb0JBQWdCO0FBd0RwQjs7QUF0REE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0FBeUR2QiIsImZpbGUiOiJ2aXNpdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJsLW5mIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5tYWlub3B0IHtcclxuICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG59XHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59aW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWxvYyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO2ZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtLml0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufWlvbi1kYXRldGltZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xyXG4gICAgcGFkZGluZzogMTBweCA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0uY292ZXItcGFkIHtcclxuICBwYWRkaW5nOiAwIDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59LmJ0bi1jb3kge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcclxuICAgIHBhZGRpbmc6IDExcHggMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufS5idG4tZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufS50dGwtdHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTE4cHg7XHJcbn1cclxuLmNvdmVyLXBhZCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn10ZXh0YXJlYS5uYXRpdmUtdGV4dGFyZWEge1xyXG4gICAgLyogLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogN3B4OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTVweDsgKi9cclxuICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzN3B4O1xyXG59aW1nLmNhbC1sb2Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0M3B4O1xyXG4gICAgbGVmdDogMTNweDtcclxufXNwYW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHRvcDogLTI2cHg7XHJcbiAgICBjb2xvcjogIzA4MDgwODtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0uaW5uZXItZG9nIHtcclxuICAgICAgd2lkdGg6IDcxcHg7XHJcbiAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDkycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59LmlubmVyLWRvZy5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDIwcHg7ICovXHJcbiAgICAvKiB3aWR0aDogMjBweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxufVxyXG4uaW5uZXItZG9nLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmU5ZmZjO1xyXG59LmFjdGl2ZSBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59aW5wdXR7LS1wYWRkaW5nLXN0YXJ0OiAxNXB4XHJcbn1cclxuLndsay10eHR7dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDgwODA4ICFpbXBvcnRhbnQ7ICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50XHJcblx0fVxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAtLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5pb24tcmFkaW8tZ3JvdXAucmFkdXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1pb24tcmFkaW8tZ3JvdXAucmFkdXMgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuaW9uLXJhZGlvLWdyb3VwLnJhZHVzIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG59XHJcbi5maWVscyB7XHJcbiAgICBwYWRkaW5nOiAwIDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "cydF":
/*!*****************************************************!*\
  !*** ./src/app/visit-details/visit-details.page.ts ***!
  \*****************************************************/
/*! exports provided: VisitDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitDetailsPage", function() { return VisitDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visit_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visit-details.page.html */ "5xPy");
/* harmony import */ var _visit_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-details.page.scss */ "Hz8R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VisitDetailsPage = class VisitDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
VisitDetailsPage.ctorParameters = () => [];
VisitDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visit-details',
        template: _raw_loader_visit_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visit_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitDetailsPage);



/***/ }),

/***/ "eNZZ":
/*!*******************************************************!*\
  !*** ./src/app/visit-details/visit-details.module.ts ***!
  \*******************************************************/
/*! exports provided: VisitDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitDetailsPageModule", function() { return VisitDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visit_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit-details-routing.module */ "0OXD");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _visit_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visit-details.page */ "cydF");








let VisitDetailsPageModule = class VisitDetailsPageModule {
};
VisitDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visit_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitDetailsPageRoutingModule"]
        ],
        declarations: [_visit_details_page__WEBPACK_IMPORTED_MODULE_7__["VisitDetailsPage"]]
    })
], VisitDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=visit-details-visit-details-module.js.map